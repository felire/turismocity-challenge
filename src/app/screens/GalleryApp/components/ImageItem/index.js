import React, { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Routes from '@constants/routes';

import styles from './styles';

const ImageItem = ({ navigation, imageUrl, id }) => {
  const onPress = () => navigation.navigate(Routes.ImageDetail, { id });
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default memo(ImageItem);
