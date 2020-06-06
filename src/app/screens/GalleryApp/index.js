import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as imagesActions } from '@redux/images/actions';

import ImageItem from './components/ImageItem';
import styles from './styles';

const keyExtractor = item => `${item.id}`;

const renderItem = navigation => ({ item }) => {
  return <ImageItem navigation={navigation} item={item} />;
};
const GalleryAppContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const images = useSelector(state => state.images.images);

  useEffect(() => {
    dispatch(imagesActions.getImages());
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        numColumns={2}
        keyExtractor={keyExtractor}
        renderItem={renderItem(navigation)}
      />
    </SafeAreaView>
  );
};

export default GalleryAppContainer;
