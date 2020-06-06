import React, { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Routes from '@constants/routes';

import styles from './styles';

const ImageItem = ({ navigation, item }) => {
  const onPress = () => navigation.navigate(Routes.ImageDetail, { item });
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: item?.downloadUrl }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default memo(ImageItem);
