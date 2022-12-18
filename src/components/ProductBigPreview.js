import { Image, StyleSheet } from "react-native";
import prophere from "../../assets/prophere.png";

const ProductBigPreview = () => {
    return (
        <Image style={styles.image} resizeMode="contain" source={prophere}/>
    )
}

export default ProductBigPreview;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 250
    }
})