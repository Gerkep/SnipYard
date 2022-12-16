import {Text, StyleSheet} from "react-native";
import { useFonts } from "expo-font";

const DropDay = ({day}) => {

    const [loaded] = useFonts({
        'beau': require('../../assets/fonts/beau.ttf'),
        'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
      });

      if (!loaded) {
        return null;
      }

    return (
        <Text style={styles.text}>{day}</Text>
    )
}

export default DropDay;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontFamily: "Lato-Bold",
        marginLeft: 18,
        marginTop: 28,
        marginBottom: 10,
    }
})

