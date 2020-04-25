import AsyncStorage from '@react-native-community/async-storage';
import api from '@config/api';
import Config from 'react-native-config';
import { actionCreators as authActions } from '@redux/auth/actions';

const AUTH_EP = '/auth';

export const setCurrentToken = currentToken => {
  api.setHeader('Authorization', `Bearer ${currentToken}`);
  return AsyncStorage.setItem('@Auth:currentToken', JSON.stringify(currentToken));
};
export const getCurrentToken = () => AsyncStorage.getItem('@Auth:currentToken').then(JSON.parse);
export const removeCurrentToken = () => AsyncStorage.removeItem('@Auth:currentToken');

export const getCurrentTokenFromApi = () => api.post(AUTH_EP, { apiKey: Config.API_KEY });
export const authSetup = async dispatch => {
  const currentToken = await getCurrentToken();
  if (currentToken) {
    api.setHeader('Authorization', `Bearer ${currentToken}`);
  } else {
    const apiResult = await getCurrentTokenFromApi();
    if (apiResult.ok) {
      const {
        data: { token }
      } = apiResult;
      await setCurrentToken(token);
    }
  }
  dispatch(authActions.init());
};
