import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ProfileContext from '../context/context';
import { useContext, useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ProfilePage = ({ navigation }) => {
    const [image, setImage] = useState(null)
    const { phoneNumber, email, about } = useContext(ProfileContext);

    const addImage = async () => {
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!_image.canceled) {
            setImage(_image.uri)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Profile</Text>

            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <View style={styles.imageContainer}>
                        {!image && <Image
                            style={styles.avatarImage}
                            source={require('../assets/default_avatar.png')}
                        />}
                        {
                            image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                        }
                        <View style={styles.uploadBtnContainer}>
                            <TouchableOpacity onPress={addImage} style={styles.uploadBtn} >
                                <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                                <AntDesign name="camera" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
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
        elevation:5,
        height:150,
        width:150,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
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
    uploadBtnContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7,
        borderRadius: 8,
    },
    uploadBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ProfilePage;
