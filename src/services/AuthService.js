import { actionCreators as authActions } from '@redux/auth/actions';

export const authSetup = dispatch => {
  dispatch(authActions.init());
};
