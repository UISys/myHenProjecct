import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView, Button } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Aseel',
    description: 'It is noted for its pugnacity, high stamina, majestic gait and dogged fighting qualities.'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Chittagong/Malay',
    description: 'The popular varieties are buff, white, black, dark brown and grey.'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Kadaknath',
    description: 'The skin, beak, shanks, toes and soles of feet are slate-like in colour'
  },
  {
    id: '28694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Busra',
    description: 'Medium sized bird, deep bodied, light feathered and alert in nature.'
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (<>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{ paddingTop: 5, paddingBottom: 5, textAlign: 'center', fontSize: 40 }}>Indian Pure Breeds</Text>
        {DATA.map(item => {
          return <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }} key={item.id}>
            <View style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}>
              <View>
                <Text style={{ paddingTop: 5, paddingBottom: 5, fontSize: 20, paddingLeft: 5 }}>{item.title}</Text>
                <Image
                  source={require("../loading-screen/images/henImage_Loading.jpg")}
                  style={{
                    height: 200,
                    width: 300,
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 300 }}>
                <Text style={{ color: "#777", paddingTop: 5, paddingBottom: 10 }}>
                  {item.description}
                </Text>
                <Button
                  title="ADD TO CART"
                  onPress={() =>  navigation.navigate('Cart', { name: 'Jane' })}
                  color="green"
                />
              </View>
            </View>
          </View>
        })
        }
      </ScrollView>
    </SafeAreaView>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeScreen;