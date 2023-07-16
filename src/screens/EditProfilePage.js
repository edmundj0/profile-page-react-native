import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import ProfileContext from '../context/context';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const { phoneNumber, email, about, setPhoneNumber, setEmail, setAbout } = useContext(ProfileContext);

  const [originalEmail, setOriginalEmail] = useState(email);
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState(phoneNumber);
  const [originalAbout, setOriginalAbout] = useState(about);

  const handleCancel = () => {
    setPhoneNumber(originalPhoneNumber);
    setEmail(originalEmail);
    setAbout(originalAbout);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>About</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Tell Us About Yourself"
          value={about}
          onChangeText={setAbout}
          multiline
        />
      </View>
      <Button title="Save" onPress={() => navigation.goBack()} />
      <Button title="Cancel" onPress={handleCancel} color="#FF0000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  textArea: {
    height: 80,
  },
});

export default EditProfileScreen;
