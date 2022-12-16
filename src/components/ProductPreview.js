import {View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import shoeImage from "../../assets/lvjacket.png";
import { useNavigation } from "@react-navigation/native";

const ProductPreview = ({price, image}) => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Product")}>
                <Image style={styles.image} source={image}/>
                <View style={styles.details}>
                    <Text>${price}</Text>
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
        borderColor: "#E1E1E1"
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
    }
})

export default ProductPreview;
