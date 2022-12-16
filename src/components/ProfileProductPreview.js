import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileProductPreview = ({price, image, brand}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Sell")}>
            <View style={styles.topContainer}>
                <Text style={styles.estPrice}>est. price ${price}</Text>
            </View>
            <Image style={styles.image} source={image}/>
            <View style={styles.details}>
                <Text style={styles.name}>{brand}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        aspectRatio: 1,
        backgroundColor: "#F7F7F7",
        padding: 10,
        borderWidth: 0.5,
        borderColor: "#E1E1E1"
    },
    estPrice: {
        fontSize: 8
    },
    topContainer: {
        alignItems: "flex-end",
    },
    image: {
        width: 125,
        height: 125,
        alignSelf: "center",
        borderRadius: "10px",
        marginTop: 4
    },
    details: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 12,
    },
    name: {
        fontSize: 10,
        fontWeight: "bold"
    }
})

export default ProfileProductPreview;
