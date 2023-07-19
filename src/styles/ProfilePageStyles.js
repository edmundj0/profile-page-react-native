import {StyleSheet} from 'react-native';

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

export default styles;
