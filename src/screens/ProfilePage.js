import { Avatar } from "react-native-paper"
import { SafeAreaView, View, Text, StyleSheet } from "react-native"

const ProfilePage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>My Profile</Text>
            <View style={styles.profileContainer}>

                <View style={styles.avatarContainer}>
                    <Avatar.Image size={100} />
                </View>

                <View style={styles.infoContainer}>

                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Phone Number</Text>
                        <Text style={styles.value}>999999999</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value}>john_doe@gmail.com</Text>
                    </View>

                    <View style={styles.fieldContainer}>
                        <Text style={styles.label}>Tell Us About Yourself</Text>
                        <Text style={styles.value}>
                            Hi, my name is John and I'm from San Francisco, California. I enjoy playing basketball and football.
                        </Text>

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
    },
    infoContainer: {
        width: '100%',
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
