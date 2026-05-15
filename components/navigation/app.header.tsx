import React from "react";
import { View, Text, StyleSheet } from "react-native"
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: 'row',
        backgroundColor: '#ccc',
        paddingTop: 40
    },
    HeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 0,
        width: '100%',
        textAlign: 'center',
    },
})

const AppHeader = () => {
      const navigation:any = useNavigation();
    return (
        <View style={styles.container}>
            <SimpleLineIcons name="menu" size={24} color="black" 
                onPress={()=>{ 
                    navigation.openDrawer();

            }}/>
            <Text style={[styles.HeaderText, globalStyles.globalFont]}>My App</Text>
        </View>
    )
}
export default AppHeader;