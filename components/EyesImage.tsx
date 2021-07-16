import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
  },
});

export interface EyesImageProps {
  name?: string;
  source: ImageSourcePropType;
}

export default function EyesImage(props: EyesImageProps) {
  return (
    <Image style={styles.image} source={props.source} />
  )
}
