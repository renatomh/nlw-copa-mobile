<h1 align="center"><img alt="NLW Copa Mobile" title="NLW Copa Mobile" src=".github/logo.svg" width="250" /></h1>

# NLW Copa Mobile

## 💡 Project's Idea

This project was developed during the RocketSeat's Next Level Week - Copa event. It aims to provide a mobile application for placing bets on pools for the Fifa World Cup 2022.

## 🔍 Features

* Social login using Google Account;
* Creating new pools;
* Listing existing pools;
* Joining existing pools;
* Listing matches;
* Placing matches guesses;

<p align="center">
    <img src=".github/login.gif" alt="login" />&emsp;
    <img src=".github/sample.gif" alt="sample" />&emsp;
    <img src=".github/guesses.gif" alt="guesses" />
</p>

## 💹 Extras

* Viewing created guesses;

## 🛠 Technologies

During the development of this project, the following technologies were used:

- [React Native](https://reactnative.dev/)
- [Native Base](https://nativebase.io/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Expo](https://expo.dev/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Day.js](https://day.js.org/)
- [Google OAuth 2.0 Authentication](https://docs.expo.dev/guides/authentication/#google)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Project Configuration

### First, install the dependencies for the project

```bash
$ yarn
```

## 🌐 Settings Files Update

It's also required to create the *.env* file on the project's root folder, based on the sample file *.env.example* and update it with the required info.

```
# Google OAuth 2.0 client ID
CLIENT_ID=YOUR_CLIENT_ID

# API Base URL
BASE_URL=YOUR_API_URL
```

## ⏯️ Running

To run the project in a development environment, execute the following command on the root directory.

```bash
$ yarn start
```

### Documentation:
* [How to add Environment variables in a React Native project with TS](https://dev.to/bhatvikrant/how-to-add-environment-variables-in-a-react-native-project-with-ts-2ne5)

## 📄 License

This project is under the **MIT** license. For more information, access [LICENSE](./LICENSE).
