import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import icons from '@/constant/icons';
import TitleCustome from '@/components/TitleCustome';
import { dataProduct } from '@/assets/dataTest';
import fournisseurs from './fournisseurs';
import { LinearGradient } from 'expo-linear-gradient';


const Stock = () => {

  
  return (
    <View style={styles.container}>
      <TitleCustome title="STOCK" />

      <View style={[styles.row, styles.option]}>
        <TouchableOpacity>MON STOCK</TouchableOpacity>
        <TouchableOpacity>ALERTES</TouchableOpacity>
        <TouchableOpacity>PEREMPTIONS</TouchableOpacity>
      </View>
      <View style={[styles.row, {marginBottom: 5}]}>
        <Text style={{ fontFamily: 'Montserrat-Regular'}}>DESIGNATION</Text>
        <Text>ALERTES</Text>
        <Text>STOCK</Text>
      </View>
      <FlatList
        data={dataProduct}
        style={styles.productsContainer}
        renderItem={({ item }) => (
          <View style={styles.product}>
            {item.stock < item.alerte ? (
              <LinearGradient colors={['#FFFFFF', '#F9C6C6']} end={{ x: 0.5, y: 0 }} style={styles.background} />
            ) : 
            <LinearGradient colors={['#FFFFFF', '#B8ECE9']} end={{ x: 0.5, y: 0 }}  style={styles.background} />
            }
            <View style={styles.designation}>
              <Text style={styles.name} >{item.designation}</Text>
              <Text style={styles.fournisseur}> <Image style={{width:15, height:15}} source={icons.darkTruck} /> {item.fournisseur} </Text>
              <Text style={styles.category}><Image style={{width:15, height:15}} source={icons.categorie} /> {item.categorie}</Text>
            </View>
            <View>
              <Text>{item.alerte}</Text>
            </View>
            <View style={[styles.row, styles.stock]}>
              <TouchableOpacity style={[styles.stc, styles.right]}>-</TouchableOpacity>
              <View  style={styles.stc}><Text>{item.stock}</Text></View>
              <TouchableOpacity style={[styles.stc, styles.left]}>+</TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Stock;

const styles = StyleSheet.create({
  background: {
    height: '100%',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1,
  },
  right: {
    borderRightWidth: 2,
    borderRightColor: '#84949C',
  },
  left: {
    borderLeftWidth: 2,
    borderLeftColor: '#84949C',
  },
  stc: {
    height: '100%', 
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 37
  },
  stock: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#84949C',
    width: 100,
    height: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
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
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  option: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  productsContainer: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  product: {
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  designation: {
    width: '50%',
  },
  name:{
    fontFamily: 'Montserrat-Bold',
  },
  fournisseur: {
    fontFamily: 'Montserrat-Thin',
    fontSize: 12,
  },
  category: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
});
