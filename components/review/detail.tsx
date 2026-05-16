import { View, Text, StyleSheet, Button, Image, ImageBackground} from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { useNavigation,NavigationProp, useRoute, RouteProp } from "@react-navigation/native";

import startIcon from '../../assets/images/star.png';

const style = StyleSheet.create({
    container: {
        fontSize: 20,
        fontFamily: OPENSANS_REGULAR,
    },
    reviewText: {
      fontSize: 20,
        fontFamily: OPENSANS_REGULAR,
        padding: 10,
       //backgroundColor: '#ccc',
       margin: 15,
    },
});


const DetailScreen = () => {
  const route: RouteProp<RootStackParamList, 'Details'> = useRoute();
  const {id, title,star} = route.params || {};
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    //<ImageBackground style={{ flex: 1 }} source={require('../../assets/images/react-native.png')}>
      <View>  
        <Text style={style.container}>Review Details</Text>
        <Text style={style.reviewText}>ID: {id}</Text>
        <Text style={style.reviewText}>Title: {title}</Text>
        <Text style={style.reviewText}>Star: {star}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <Image style={{ width: 40, height: 40 }} source={startIcon} />
          <Image style={{ width: 40, height: 40 }} source={startIcon} />
          <Image style={{ width: 40, height: 40 }} source={startIcon} />
                    

        </View>
    </View>
    //</ImageBackground>
  )
}
export default DetailScreen;   