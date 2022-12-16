import {View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import shoeImage from "../../assets/lvjacket.png";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const ProductPreview = ({price, image}) => {

    const navigation = useNavigation();
    const [loaded] = useFonts({
        'beau': require('../../assets/fonts/beau.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
      });

      if (!loaded) {
        return null;
      }

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Product")}>
                <Image style={styles.image} source={image}/>
                <View style={styles.details}>
                    <Text style={styles.price}>${price}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        aspectRatio: 1,
        backgroundColor: "#F7F7F7",
        padding: 15,
        borderWidth: 0.5,
        borderColor: "#ECECEC"
    },
    image: {
        width: 130,
        height: 130,
        alignSelf: "center",
        borderRadius: "10px",
    },
    details: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 12,
    },
    price: {
        fontFamily: "Lato-Regular",
    }
})

export default ProductPreview;
