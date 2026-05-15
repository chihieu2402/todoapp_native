import { View, Text,StyleSheet} from "react-native"
import { globalStyles } from "../../utils/const";
const style = StyleSheet.create({
    about: {
        fontSize: 20,
    },
});

const AboutScreen = () => {
  return (
    <View>  
        <Text style={[globalStyles.globalFont, style.about]}>About Screen gg</Text>
    </View>
  )
}
export default AboutScreen;   