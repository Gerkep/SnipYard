import { View, StyleSheet, Text, Image } from "react-native"
import ShipmentIcon from "../../assets/shipmentIcon.png";
import jacket from "../../assets/diorjacket.png"
import { useFonts } from 'expo-font';
import ActionButton from "../components/ActionButton";
import buyIcon from "../../assets/buyIcon.png";

const ThankYou = () => {
    const [loaded] = useFonts({
        'beau': require('../../assets/fonts/beau.ttf'),
      });

      if (!loaded) {
        return null;
      }

    return (
       <View>
           <Image style={styles.icon} resizeMode="contain" source={ShipmentIcon}/>
           <Text style={styles.title}>ORDER PLACED</Text>
           <Text style={styles.message}>Dior Winter Jacket Top is now on its way to your doorstep.</Text>
           <Image style={styles.preview} resizeMode="contain" source={jacket}/>
           <View style={styles.buttons}>
                <ActionButton text="CONTINUE SHOPPING" icon={buyIcon}/>
           </View>
       </View>
    )
}

export default ThankYou;

const styles = StyleSheet.create({
    icon: {
        marginTop: 85,
        alignSelf: "center",
        width: 120,
        height: 120
    },
    title: {
        fontWeight: "900",
        fontFamily: 'beau',
        fontSize: 40,
        marginTop: 10,
        alignSelf: "center"
    },
    message: {
        alignSelf: "center",
        textAlign: "center",
        width: "80%",
        fontSize: 18,
  
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