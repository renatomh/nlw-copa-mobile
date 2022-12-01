import { HStack } from 'native-base';
import CountryFlag from 'react-native-country-flag';

import { Input } from './Input';

interface Props {
  code: string;
  position: 'left' | 'right';
  teamPoints?: number;
  onChangeText: (value: string) => void;
}

export function Team({ code, position, teamPoints, onChangeText }: Props) {
  return (
    <HStack alignItems="center">
      {position === 'left' && <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />}

      <Input
        w={10}
        h={9}
        textAlign="center"
        fontSize="xs"
        keyboardType="numeric"
        onChangeText={onChangeText}
        placeholder={teamPoints?.toString() || ''}
        isDisabled={teamPoints !== undefined}
      />

      {position === 'right' && <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />}
    </HStack>
  );
}
