import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity ,StyleSheet} from "react-native"
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import CreateModal from "./review.modal";
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
  const [modalVisible, setModalVisible] = useState(false);

  const addNew = (review: IReview) => {
    setReview([...reviews, review]);
  }

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Review List</Text>
      <View style={{ alignItems: 'center', padding: 10 }}>
      <SimpleLineIcons name="plus" size={30} color="orange" onPress={() => setModalVisible(true)} />
      </View>
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
      <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} addNew={addNew} />
    </View>
  )
}
export default HomeScreen;   