import {View,Text,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        borderColor: 'red',
        borderWidth: 2,
    },
    item1:{
        backgroundColor: 'violet',
        padding: 20,
    },
    item2:{
        backgroundColor: 'skyblue',
        padding: 20,
    },
    item3:{
        backgroundColor: 'pink',
        padding: 20,
    },  
    item4:{
        backgroundColor: 'yellow',
        padding: 20,
    }
});

const FlexBox = () => {
  return (
    <View style={styles.container}>
        <View style={styles.item1}>
            <Text>FlexBox1</Text>
        </View>

         <View style={styles.item2}>
            <Text>FlexBox2</Text>
        </View>

        <View style={styles.item3}>
            <Text>FlexBox3</Text>
        </View>

        <View style={styles.item4}>
            <Text>FlexBox4</Text>
        </View>
    </View>
  );
};

export default FlexBox;