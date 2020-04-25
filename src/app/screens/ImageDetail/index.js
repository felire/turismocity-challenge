import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, View, Image } from 'react-native';
import Share from 'react-native-share';
import ImageZoom from 'react-native-image-pan-zoom';
import { actionCreators as imagesActions } from '@redux/images/actions';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import { Loading } from '@components/Loadable';

import styles, { WIDTH, HEIGHT } from './styles';

const ImageDetail = ({ navigation }) => {
  const dispatch = useDispatch();
  const id = navigation.getParam('id', null);
  const getImage = useCallback(() => dispatch(imagesActions.getImage(id)), [dispatch, id]);
  const { currentImage, currentImageLoading } = useSelector(state => ({
    currentImage: state.images.currentImage,
    currentImageLoading: state.images.currentImageLoading
  }));
  const onShare = () =>
    Share.open({
      url: currentImage.fullPicture
    });
  useEffect(() => {
    getImage();
  }, [getImage]);
  return currentImageLoading || !currentImage ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageZoom cropWidth={WIDTH} cropHeight={HEIGHT} imageWidth={WIDTH} imageHeight={HEIGHT}>
          <Image style={styles.image} source={{ uri: currentImage.fullPicture }} />
        </ImageZoom>
      </View>
      <View style={styles.footer}>
        <View>
          <CustomText>{currentImage.author}</CustomText>
          <CustomText>{currentImage.camera}</CustomText>
        </View>
        <CustomButton title="Share" onPress={onShare} style={styles.shareButton} />
      </View>
    </SafeAreaView>
  );
};

export default ImageDetail;
