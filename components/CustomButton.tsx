import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

type ButtonProps = {
        text: string;
        handlePress: () => void;
}

const CustomButton = ({text, handlePress}: ButtonProps) => {
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: '#333B3F',
        padding: 10,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    text: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Montserrat',
    }
});

export default CustomButton;
