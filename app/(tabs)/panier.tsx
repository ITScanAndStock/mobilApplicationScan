import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import React from 'react';
import icons from '@/constant/icons';
import TitleCustome from '@/components/TitleCustome';

const panier = () => {
  return (
    <View style={styles.container}>
      <TitleCustome title="PANIER" />

      <View style={styles.body}>
        <Image source={icons.maintenance} />
        <Text style={styles.textBis}>
          La page <Text style={styles.textBold}>"Panier"</Text> est en cours de développement.
        </Text>
        <Text style={styles.textBis}>Nous vous avertirons lorsqu'elle sera disponible.</Text>
        <Text style={styles.textBis}>
          En attendant, vous pouvez <Text style={styles.textBold}>accéder à cet onglet via votre navigateur sur ordinateur ou tablette.</Text>
        </Text>
      </View>
    </View>
  );
};

export default panier;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textBis: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  textBold: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: '700',
  },
});
