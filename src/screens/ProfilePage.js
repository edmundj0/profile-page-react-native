import { Avatar } from 'react-native-paper';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute } from '@react-navigation/native';


const ProfilePage = ({ navigation }) => {
    const route = useRoute()
    const {phoneNumber, email, about} = route.params


    const handleEditProfile = () => {
        navigation.navigate('EditProfile');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>My Profile</Text>

            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <Avatar.Image
                        size={100}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Phone Number</Text>
                        <Text style={styles.value}>{phoneNumber}</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value}>{email}</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Tell Us About Yourself</Text>
                        <Text style={styles.value}>{about}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    avatarContainer: {
        marginBottom: 16,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 50,
        padding: 5,
        backgroundColor: '#fff',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
    infoContainer: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 8,
    },
    fieldContainer: {
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
});

export default ProfilePage;
