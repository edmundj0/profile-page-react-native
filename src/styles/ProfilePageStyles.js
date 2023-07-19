import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
      },
      profileContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
      },
      avatarContainer: {
        marginBottom: 20,
        borderRadius: 75,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#e6e6e6',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
      },
      avatarImage: {
        width: 150,
        height: 150,
      },
      infoContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
      },
      fieldContainer: {
        marginBottom: 24,
      },
      label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
      },
      value: {
        fontSize: 16,
        color: '#666',
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
      },
      uploadBtnContainer: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 24,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
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
