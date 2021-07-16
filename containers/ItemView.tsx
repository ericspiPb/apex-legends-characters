import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EyesImage from '../components/EyesImage';

const styles = StyleSheet.create({
  container: {
  },
});

const { char1, char2, char3, char4, char5, char6 } = require('../assets/characters/index.js');
// const { ...chars } = require('../assets/characters/index.js'); // don't work

export default function ItemView() {
  return (
    <FlatList
      data={[char1, char2, char3, char4, char5, char6]}
      // data={[chars]} // dont' work
      renderItem={
        ({item}) => <EyesImage source={item} />
      }
    />
  )
}
