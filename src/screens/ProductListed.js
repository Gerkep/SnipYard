import { View, StyleSheet, Text, Image } from "react-native"
import successIcon from "../../assets/successIcon.png";
import prophere from "../../assets/prophere.png"
import ActionButton from "../components/ActionButton";
import buyIcon from "../../assets/buyIcon.png";

const ProductListed = () => {


    return (
       <View>
           <Image style={styles.icon} resizeMode="contain" source={successIcon}/>
           <Text style={styles.title}>PRODUCT LISTED</Text>
           <Text style={styles.message}>Your product has been listed and is now waiting for a buyer.</Text>
           <Image style={styles.preview} resizeMode="contain" source={prophere}/>
           <View style={styles.buttons}>
                <ActionButton text="BACK TO PROFILE"/>
           </View>
       </View>
    )
}

export default ProductListed;

const styles = StyleSheet.create({
    icon: {
        marginTop: 85,
        alignSelf: "center",
        width: 100,
        height: 100
    },
    title: {
        fontWeight: "900",
        fontFamily: 'beau',
        fontSize: 40,
        marginTop: 25,
        alignSelf: "center"
    },
    message: {
        alignSelf: "center",
        textAlign: "center",
        width: "80%",
        fontSize: 18,
        fontFamily: "Lato-Regular",
        marginTop: 10,
    },
    preview: {
        marginTop: 50,
        alignSelf: "center",
        width: 200,
        height: 200
    },
    buttons: {
        marginTop: 30
    }
});