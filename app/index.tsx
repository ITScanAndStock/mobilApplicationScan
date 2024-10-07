import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ScrollView, View } from 'react-native';
import { Redirect, router, Router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constant/icons';
import CustomButton from '@/components/CustomButton';

export default function Index() {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Image
                        source={icons.colorLogo}
                        style={{ width: 300, height: 275 }}
                    />
                    <CustomButton text={'SE CONNECTER'} handlePress={()=> router.push('/(auth)/sign-in')} />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622'  style="light" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        height: '100%',
        padding: 5,
        justifyContent: 'center',
    },
    container: {
        alignItems: 'center',
        paddingTop: 25,
        borderWidth: 3,
        height: 600,
        borderRadius: 20,
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontWeight: 'bold',
        height: 50,
        width: 200,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
