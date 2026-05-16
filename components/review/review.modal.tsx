import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { useState } from "react";
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
    addNew : any;
}
const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible, addNew } = props;
    const [star,setStar] = useState('');
    const [title,setTitle] = useState('');
    const handleSubmit = () => {
        if(!title||!star) {
            Alert.alert('Please fill in all fields');
            return;
        }

        addNew({
            id: Math.floor(Math.random() * 1000),
            title,
            star: parseInt(star),
        })
        setModalVisible(false);
        setStar('');
        setTitle('');
    }
    return ( 
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Create a review</Text>
                        <SimpleLineIcons name="close" size={24} color="black" onPress={() => {setModalVisible(false); setTitle(''); setStar('') } }/>
                    </View>
                    
                    <View style={styles.groupInput}>
                        <Text style={styles.text}>Modal Content</Text>
                        <TextInput
                            style={styles.input}
                            value={title}
                            onChangeText={(v)=>setTitle(v)}
                        />
                    </View>
                    <View style={styles.groupInput}>
                        <Text style={styles.text}>Rating</Text> 
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            value={star}
                            onChangeText={(v) => setStar(v)}
                        />
                    </View>

                
                <View style={{marginTop: 20}}>
                    <Button title="Add Review"
                        onPress={() => handleSubmit() }
                    />
                    
                </View>
                </View>
        </Modal>
    )
}

export default CreateModal;