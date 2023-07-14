import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import ProfileContext from '../context/context';

const EditProfileScreen = () => {

    const navigation = useNavigation()
    const { phoneNumber, email, about, setPhoneNumber, setEmail, setAbout } = useContext(ProfileContext)

    // const oldPhoneNumber = phoneNumber
    // const oldEmail = email
    // const oldAbout = about

    const handleCancel = () => {
        // Add stuff here later
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Tell Us About Yourself"
                value={about}
                onChangeText={setAbout}
                multiline
            />
            <Button title="Save" onPress={() => navigation.goBack() } />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default EditProfileScreen;
