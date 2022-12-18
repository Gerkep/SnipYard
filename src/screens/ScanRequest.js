import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import scan from "../../assets/scan.png";
import prophere from "../../assets/prophere.png"
import { useNavigation } from "@react-navigation/native";

const ProductListed = () => {

    const navigation = useNavigation();

    return (
       <View>
           <Image style={styles.icon} resizeMode="contain" source={scan}/>
           <Text style={styles.title}>SCAN ITEM</Text>
           <Text style={styles.message}>Please scan a snip on your item before you list it.</Text>
           <Image style={styles.preview} resizeMode="contain" source={prophere}/>
           <View style={styles.buttons}>
            <TouchableOpacity style={styles.magicButton} onPress={() => navigation.navigate("Sell")}><Text></Text></TouchableOpacity>
           </View>
       </View>
    )
}

export default ProductListed;

const styles = StyleSheet.create({
    icon: {
        marginTop: 90,
        alignSelf: "center",
        width: 120,
        height: 120
    },
    title: {
        fontWeight: "900",
        fontFamily: 'beau',
        fontSize: 40,
        marginTop: 20,
        alignSelf: "center"
    },
    message: {
        alignSelf: "center",
        textAlign: "center",
        width: "70%",
        fontSize: 18,
        fontFamily: "Lato-Regular",
        marginTop: 10,
    },
    preview: {
        marginTop: 70,
        alignSelf: "center",
        width: 270,
        height: 200
    },
    buttons: {
        marginTop: 30
    },
    magicButton: {
        width: "100%",
        height: 70,
        alignSelf: "center"
    }
});