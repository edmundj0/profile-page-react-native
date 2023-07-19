import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import ProfileContext from '../context/context';
import { useContext, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/ProfilePageStyles'

const ProfilePage = () => {
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

export default ProfilePage;
