import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from './screens/ProfilePage';
import EditProfilePage from './screens/EditProfilePage';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileProvider } from './context/context';

const Stack = createStackNavigator()

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
                  onPress={() => navigation.navigate('Edit Profile')}
                />
              ),
            })}
          />
          <Stack.Screen name="Edit Profile" component={EditProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}
