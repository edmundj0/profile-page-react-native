import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import ProfileContext from '../context/context';
import { useContext } from 'react';

const ProfilePage = ({ navigation }) => {
    const { phoneNumber, email, about } = useContext(ProfileContext);

    const handleEditProfile = () => {
        navigation.navigate('EditProfile');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Profile</Text>

            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.avatarImage}
                            source={require('../assets/default_avatar.png')}
                        />
                    </View>
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
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
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
