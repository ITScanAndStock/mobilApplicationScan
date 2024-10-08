import { View, Text, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constant/icons';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  interface MAil {
    email: string;
  }

  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <TouchableOpacity style={styles.back} onPress={() => router.back()}>
              <Image source={icons.back} />
              <Text style={{ fontFamily: 'Montserrat', fontWeight: '700', fontSize: 20 }}> RETOUR </Text>
            </TouchableOpacity>
            <Image source={icons.colorLogo} style={styles.image} />

            <View style={styles.inputContainer}>
              <Text style={styles.text}>Mot de passe oublié</Text>

              <FormField title="Email" value={email} handleChangeText={(e: string) => setEmail(e)} placeholder="Adresse mail" />
            </View>

            <CustomButton text="ENVOYER" handlePress={() => {}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    width: 140,
  },
  image: {
    width: 300,
    height: 275,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 30,
    paddingVertical: 20,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#000000',
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 25,
  },
  textError: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 25,
    color: '#CB4343',
  },
  inputContainer: {
    gap: 20,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
