import { AppRegistry } from 'react-native';

/**
 * Internal dependencies.
 */
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
