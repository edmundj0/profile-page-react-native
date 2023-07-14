import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from './screens/ProfilePage';
import EditProfileScreen from './screens/EditProfilePage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  const [phoneNumber, setPhoneNumber] = React.useState('123-456-7890');
  const [email, setEmail] = React.useState('john_doe@gmail.com');
  const [about, setAbout] = React.useState("Hi, my name is John and I'm from San Francisco, California. I enjoy playing basketball and football.");


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My Profile" component={ProfilePage}
          initialParams={{ phoneNumber, email, about }}
          options={{
            headerRight: () => (
              <Button
                title="Edit Profile"
                onPress={() => navigation.navigate('EditProfileScreen')}
              />
            ),
          }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
