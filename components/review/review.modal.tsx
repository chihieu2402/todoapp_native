import { Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Octicons from '@expo/vector-icons/Octicons';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'red',
        borderBottomWidth: 1,
        paddingVertical: 10,
        marginBottom: 20,
    },
    groupInput: {
        marginBottom: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    text:{
        fontSize: 20,
        fontWeight: "400"
    }
});
interface IProps {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void;
}
const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Create a review</Text>
                        <SimpleLineIcons name="close" size={24} color="black" onPress={() => setModalVisible(false)} />
                    </View>
                    
                    <View style={styles.groupInput}>
                        <Text style={styles.text}>Modal Content</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.groupInput}>
                        <Text style={styles.text}>Rating</Text> 
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input} />
                    </View>

                
                <View style={{marginTop: 20}}>
                    {/* <Button title="Add Review" /> */}
                    
                </View>
                </View>
        </Modal>
    )
}

export default CreateModal;