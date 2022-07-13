import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TextInput, StatusBar, Image, ScrollView, Button } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Aseel',
        description: 'It is noted for its pugnacity, high stamina, majestic gait and dogged fighting qualities.',
        price: "200 RS/KG",
        qty: "10"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Chittagong/Malay',
        description: 'The popular varieties are buff, white, black, dark brown and grey.',
        price: "300 RS/KG",
        qty: "40"
    }
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const CartScreen = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState(null);

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (<>
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={{ paddingTop: 5, paddingBottom: 5, textAlign: 'center', fontSize: 40 }}>MY BILL</Text>
                <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>

                    <View style={{ backgroundColor: "white", borderRadius: 10, marginBottom: 10 }}>
                        {DATA.map(item => {
                            return (
                                <>
                                    <View>
                                        <Text style={{ paddingTop: 5, paddingBottom: 5, fontSize: 20, paddingLeft: 5 }}>{item.title}</Text>
                                    </View>
                                    <View style={{ padding: 10, width: 300 }}>
                                        <Text style={{ color: "#777", paddingTop: 5, paddingBottom: 10 }}>
                                            PRICE: {item.price}
                                        </Text>
                                        <Text style={{ color: "#777", paddingTop: 5, paddingBottom: 10 }}>
                                            QTY: {item.qty}
                                        </Text>
                                    </View>
                                </>)
                        })}
                        <Text style={{ paddingTop: 5, paddingBottom: 5, marginLeft: 10, textAlign: 'left', fontSize: 20 }}>TOTAL: {2000} RS</Text>
                    </View>
                </View>
                <View style={{ padding: 10, width: 300, marginLeft: 40 }}>
                    <Button
                        title="PLACE ORDER -->"
                        onPress={() => navigation.navigate('CustomerDetails', { name: 'Jane' })}
                        color="green"
                    />
                </View>
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
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
});

export default CartScreen;