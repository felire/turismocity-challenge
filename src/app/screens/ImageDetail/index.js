import React from 'react';
import { SafeAreaView, View, ImageBackground } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';

const ImageDetail = ({ navigation }) => {
  const item = navigation.getParam('item', null);
  return (
    <ImageBackground source={{ uri: item.downloadUrl }} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.footer}>
          <CustomText bold big white>
            {item.author}
          </CustomText>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ImageDetail;
