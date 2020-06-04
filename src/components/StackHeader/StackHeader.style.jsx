import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();
export const Header = styled(LinearGradient)`
  height: ${140 + statusBarHeight}px;
`;

Header.Container = styled.View`
  align-items: center;
  background-color: rgba(250, 250, 250, 0.8);
  bottom: 4px;
  justify-content: center;
  left: 0;
  padding: ${statusBarHeight + 15}px 16px 15px;
  position: absolute;
  top: 0;
  width: 100%;
`;

Header.Title = styled.Text`
  color: #000;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 10px;
`;

export const Search = styled.View`
  flex-direction: row;
  position: relative;
  width: 100%;
`;

Search.Input = styled.TextInput`
  background: rgba(0, 0, 0, 0.12);
  border-radius: 18px;
  flex: 1;
  font-size: 17px;
  height: 36px;
  letter-spacing: -0.41px;
  padding: 7px 15px;
`;
