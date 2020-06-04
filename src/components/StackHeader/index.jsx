/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import { Header, Search } from './StackHeader.style';

const gradientColor = ['#6e95fd', '#6fdefa', '#8de061', '#51e85e'];

function SearchPokemon() {
  return (
    <Search>
      <Search.Input placeholder="Search" placeholderTextColor="#4f4f4f" />
    </Search>
  );
}

export default function StackHeader({ title }) {
  return (
    <Header
      end={{ x: 1, y: 0 }}
      start={{ x: 0, y: 0 }}
      colors={gradientColor}
      locations={[0, 0.33, 0.66, 1]}
    >
      <Header.Container>
        <Header.Title>{title}</Header.Title>
        <SearchPokemon />
      </Header.Container>
    </Header>
  );
}
