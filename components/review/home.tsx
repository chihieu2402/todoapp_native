import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity ,StyleSheet} from "react-native"
import AppHeader from "../navigation/app.header";

interface IReview {
  id: number;
  title: string;
  star: number;
}
const style=  StyleSheet.create({
    reviewItem: {
        padding: 10,
       backgroundColor: '#ccc',
       margin: 15,
    },
});

const HomeScreen = (props: any) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReview] = useState<IReview[]>([
    { id: 1, title: 'Review 1', star: 5 },
    { id: 2, title: 'Review 2', star: 4 },
  ]);
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Review List</Text>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={style.reviewItem}>
              <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                <Text >{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />  
      </View>
      <Button title="Go to Details"
      />

    </View>
  )
}
export default HomeScreen;   