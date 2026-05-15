import { View, Text, StyleSheet, Button} from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { useNavigation,NavigationProp, useRoute, RouteProp } from "@react-navigation/native";
const style = StyleSheet.create({
    container: {
        fontSize: 20,
        fontFamily: OPENSANS_REGULAR,
    },
    reviewText: {
      fontSize: 20,
        fontFamily: OPENSANS_REGULAR,
        padding: 10,
       backgroundColor: '#ccc',
       margin: 15,
    },
});


const DetailScreen = () => {
  const route: RouteProp<RootStackParamList, 'Details'> = useRoute();
  const {id, title,star} = route.params || {};
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View>  
        <Text style={style.container}>Review Details</Text>
        <Text style={style.reviewText}>ID: {id}</Text>
        <Text style={style.reviewText}>Title: {title}</Text>
        <Text style={style.reviewText}>Star: {star}</Text>
        <Button title="Go Back Homepage" onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}
export default DetailScreen;   