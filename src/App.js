import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ProfilePage from './screens/ProfilePage';
import EditProfilePage from './screens/EditProfilePage';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileProvider } from './context/context';

const Stack = createStackNavigator()

// const [phoneNumber, setPhoneNumber] = React.useState('123-456-7890');
// const [email, setEmail] = React.useState('john_doe@gmail.com');
// const [about, setAbout] = React.useState("Hi, my name is John and I'm from San Francisco, California. I enjoy playing basketball and football.");
export default function App() {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="My Profile"
            component={ProfilePage}
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  title="Edit Profile"
                  onPress={() => navigation.navigate('EditProfile')}
                />
              ),
            })}
          />
          <Stack.Screen name="EditProfile" component={EditProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
