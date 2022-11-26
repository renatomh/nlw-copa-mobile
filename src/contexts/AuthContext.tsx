import { createContext, ReactNode, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { api } from "../services/api";

import { CLIENT_ID } from '@env';

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
};

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isUserLoading, setIsUserLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: CLIENT_ID,
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  });

  // console.log(AuthSession.makeRedirectUri({ useProxy: true }));

  async function signIn() {
    try {
      setIsUserLoading(true);
      /* Calling function to login */
      await promptAsync();

    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    };
  }

  async function signInWithGoogle(access_token: string){
    console.log('Access Token', access_token);
    try {
      setIsUserLoading(true);

      /* Getting user's server token */
      const tokenResponse = await api.post('/users', { access_token });
      console.log(tokenResponse.data);
      /* Setting token to the API default headers */
      api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;

      /* Getting user info */
      const userInfoResponse = await api.get('/me');
      console.log(userInfoResponse.data);
      setUser(userInfoResponse.data.user);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  /* Called when login process finishes */
  useEffect(() => {
    /* If login was successful */
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken);
    }
  }, [response]);

  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  );

};
