import { View, Image, StyleSheet } from "react-native";

const MarketplaceLogo = ({logo}) => {
    return (
        <Image style={styles.logo} resizeMode="contain" source={logo}/>
    )
}

export default MarketplaceLogo;

const styles = StyleSheet.create({
    logo: {
        width: 140,
        height: 50,
        alignSelf: "center",
        marginTop: 55
    }
})