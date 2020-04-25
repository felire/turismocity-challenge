import PropTypes from 'prop-types';
import Routes from '@constants/routes';
import { useSelector } from 'react-redux';
import withLoadable from '@components/Loadable';

const initialLoadingSelector = state => state.auth.initialLoading;

const InitialLoading = ({ navigation }) => {
  const initialLoading = useSelector(initialLoadingSelector);
  if (!initialLoading) {
    navigation.navigate(Routes.App);
  }
  return null;
};

InitialLoading.propTypes = {
  // TODO: complete this shape
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};

export default withLoadable(() => useSelector(initialLoadingSelector))(InitialLoading);
