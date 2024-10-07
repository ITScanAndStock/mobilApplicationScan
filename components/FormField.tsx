import {
    StyleSheet,
    Image,
    TextInput,
    Touchable,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import icons from '@/constant/icons';

type FormFieldProps = {
    title: string;
    value: string;
    handleChangeText: (text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
};

const FormField = ({
    title,
    value,
    handleChangeText,
    placeholder,
}: FormFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={value}
                placeholder={placeholder}
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
            />
            {title === 'Password' && (
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Image source={icons.eye} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default FormField;

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        height: 50,
        borderRadius: 15,
        borderColor: '#333B3F',
        paddingLeft: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    input:{
        width: '90%',
        height: '100%',
    }
});
