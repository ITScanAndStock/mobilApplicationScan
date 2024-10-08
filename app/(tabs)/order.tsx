import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import React from 'react';
import icons from '@/constant/icons';

const Order = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>COMMANDES</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.body}>
        <Image source={icons.maintenance} />
        <Text style={styles.textBis}>
          La page <Text style={styles.textBold}>"Fournisseurs"</Text> est en cours de développement.
        </Text>
        <Text style={styles.textBis}>Nous vous avertirons lorsqu'elle sera disponible.</Text>
        <Text style={styles.textBis}>
          En attendant, vous pouvez <Text style={styles.textBold}>accéder à cet onglet via votre navigateur sur ordinateur ou tablette.</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Order;

const styles = StyleSheet.create({
  line: {
    flex: 1,
    borderWidth: 0.5,
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  body: {
    width: 'auto',
    height: 460,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textBis: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  textBold: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
  },

  title: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '600',
  },
});
