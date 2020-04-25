import React, { useEffect, useCallback, useRef } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as imagesActions } from '@redux/images/actions';

import ImageItem from './components/ImageItem';
import styles from './styles';

const THRESHOLD = 0.5;

const keyExtractor = item => `${item.id}`;

const renderItem = navigation => ({ item }) => {
  return <ImageItem navigation={navigation} id={item.id} imageUrl={item.croppedPicture} />;
};
const GalleryAppContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const onEndReachedCalled = useRef(false);
  const getImages = useCallback(refresh => dispatch(imagesActions.getImages(refresh)), [dispatch]);
  const { images, imagesLoading } = useSelector(state => ({
    images: state.images.images,
    imagesLoading: state.images.imagesLoading
  }));

  useEffect(() => {
    getImages(true);
  }, [getImages]);

  const handleOnEndReachedMomentum = () => (onEndReachedCalled.current = false);
  const handleOnEndReached = () => {
    if (!onEndReachedCalled.current && !imagesLoading) {
      getImages(false);
      onEndReachedCalled.current = true;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        numColumns={2}
        keyExtractor={keyExtractor}
        renderItem={renderItem(navigation)}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={THRESHOLD}
        onMomentumScrollBegin={handleOnEndReachedMomentum}
      />
    </SafeAreaView>
  );
};

export default GalleryAppContainer;
