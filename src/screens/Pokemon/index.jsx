import React from 'react';
import styled from 'styled-components/native';

const Screen = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 30px;
`;

const Heading = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export default function Pokemon() {
  return (
    <Screen>
      <Heading>Pokemon</Heading>
    </Screen>
  );
}

/**
 * The name here will be used in Screen name.
 */
Pokemon.name = 'Pokemon';
