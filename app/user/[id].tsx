import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function Profile() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text>l'id est {params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
