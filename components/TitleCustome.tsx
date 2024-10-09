import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
};

export const TitleCustome = ({ title }: Props) => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}> {title} </Text>
      <View style={styles.line} />
    </View>
  );
};

export default TitleCustome;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    fontWeight: '600',
  },
  title: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
    height: 60,
  },
  line: {
    flex: 1,
    borderWidth: 0.5,
  },
});
