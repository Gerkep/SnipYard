import { Image, StyleSheet } from "react-native";
import shoe from "../../assets/diorjacket.png";

const ProductBigPreview = () => {
    return (
        <Image style={styles.image} resizeMode="contain" source={shoe}/>
    )
}

export default ProductBigPreview;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250
    }
})