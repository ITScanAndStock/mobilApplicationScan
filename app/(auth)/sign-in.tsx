import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constant/icons';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';

const Signin = () => {
  const [form, setForm] = useState({
      identifiant: '',
      password: '',
  });

  return (
      <SafeAreaView style={{ flex: 1 }}>
          {/* Utilisation de KeyboardAvoidingView pour éviter que le clavier cache les éléments */}
          <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
          >
              {/* ScrollView avec le support du clavier */}
              <ScrollView
                  contentContainerStyle={styles.scrollContainer}
                  keyboardShouldPersistTaps="handled"
              >
                  <View style={styles.container}>
                      <Image source={icons.colorLogo} style={styles.image} />

                      <View style={styles.inputContainer}>
                          <Text style={styles.text}>
                              Connectez-vous à votre compte
                          </Text>
                          <FormField
                              title="Identifiant"
                              value={form.identifiant}
                              handleChangeText={(e: string) =>
                                  setForm({ ...form, identifiant: e })
                              }
                              placeholder="Identifiant"
                          />
                          <FormField
                              title="Password"
                              value={form.password}
                              handleChangeText={(e: string) =>
                                  setForm({ ...form, password: e })
                              }
                              placeholder="Mot de passe"
                              secureTextEntry={true}
                          />

                          <Text>Mot de passe oublié ?</Text>
                      </View>

                      <CustomButton text="SE CONNECTER" handlePress={() => {}} />
                  </View>
              </ScrollView>
          </KeyboardAvoidingView>
      </SafeAreaView>
  );
};

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
  inputContainer: {
      gap: 20,
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
  },
});

export default Signin;
