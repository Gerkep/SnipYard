import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";


const ProfileProductPreview = ({price, image, brand}) => {

    const navigation = useNavigation();
    const [loaded] = useFonts({
        'beau': require('../../assets/fonts/beau.ttf'),
        'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
    });

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
        borderColor: "#ECECEC",
    },
    estPrice: {
        fontSize: 8,
        fontFamily: "Lato-Regular",
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
        fontFamily: "Lato-Bold",
    }
})

export default ProfileProductPreview;
