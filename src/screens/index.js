/**
 * Screens.
 * All screens will be added here to configure routes in routes.js
 */

import Pokemon from './Pokemon';
import PokeList from './PokeList';

export const SCREENS = [
  {
    name: PokeList.name,
    component: PokeList,
    isInitialScreen: true,
    options: PokeList.screenOptions,
  },
  { name: Pokemon.name, component: Pokemon },
];

export const getInitialScreen = () =>
  SCREENS.filter(({ isInitialScreen }) => isInitialScreen);
