import { View, Text, Image, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constant/icons';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const [form, setForm] = useState({
    identifiant: '',
    password: '',
  });

  type User = {
    identifiant: string;
    password: string;
  };

  const robin: User = {
    identifiant: '',
    password: '',
  };

  const [error, setError] = useState(false);

  const handlePress = () => {
    if (form.identifiant === robin.identifiant && form.password === robin.password) {
      setError(false);
      router.push('/(tabs)/scan');
    } else {
      setError(true);
      alert('Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <Image source={icons.colorLogo} style={styles.image} />

            <View style={styles.inputContainer}>
              {/* changement de couleur en fonction de l'erreur */}
              {error ? (
                <Text style={styles.textError}>Identifiant ou mot de passe incorrect</Text>
              ) : (
                <Text style={styles.text}>Connectez-vous à votre compte</Text>
              )}
              <FormField
                title="Identifiant"
                value={form.identifiant}
                handleChangeText={(e: string) => setForm({ ...form, identifiant: e })}
                placeholder="Identifiant"
                error={error}
              />
              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e: string) => setForm({ ...form, password: e })}
                placeholder="Mot de passe"
                secureTextEntry={true}
                error={error}
              />

              <TouchableOpacity onPress={() => router.push('/forgottenPassword')}>
                <Text> Mot de passe oublié ? </Text>
              </TouchableOpacity>
            </View>

            <CustomButton text="SE CONNECTER" handlePress={handlePress} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 275,
  },
  scrollContainer: {
    flexGrow: 2,
    justifyContent: 'center',
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
