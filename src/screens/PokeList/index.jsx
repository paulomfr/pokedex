/**
 * External dependencies.
 */
import React from 'react';
import styled from 'styled-components/native';

/**
 * Internal dependencies.
 */
import StackHeader from '../../components/StackHeader';

const Screen = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const Heading = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export default function PokeList() {
  return (
    <Screen>
      <Heading>Turok</Heading>
    </Screen>
  );
}

/**
 * The name here will be used in Screen name.
 */
PokeList.name = 'PokeList';
PokeList.screenOptions = {
  header: (props) => <StackHeader {...props} title="Pokemon" />,
};
