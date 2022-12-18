import { View, StyleSheet, Text, ScrollView } from "react-native"
import ProductNavbar from "../components/ProductNavbar";
import ProductBigPreview from "../components/ProductBigPreview";
import ProductProps from "../components/ProductProps";
import ActionButton from "../components/ActionButton";
import { useNavigation } from "@react-navigation/native";

const Product = () => {

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom: 20}}>
         <ProductNavbar shareable={true}/>
         <View style={styles.previewContainer}>
            <ProductBigPreview />
            <View style={styles.productInfoContainer}>
                <View>
                    <Text style={styles.productName}>ADIDAS PROPHERE SNEAKER</Text>
                    <Text style={styles.brand}>Adidas</Text>
                </View>
                <Text style={styles.price}></Text>
            </View>
            <Text style={styles.description}>
            The upper on this Adidas Prophere shoe is composed of a flexible knit material. 
            The upper features an adaptive fit, so it flexes and adjusts accordingly.
            </Text>
            <View style={styles.propsContaienr}>
                <ProductProps owner="gerkep07" size="45 EU" />
            </View>
         </View>
        <ActionButton text="PLACE AN OFFER" action={() => navigation.navigate("ScanRequest")}/>

        </ScrollView>
    )
}

export default Product;

const styles = StyleSheet.create({
    previewContainer: {
        width: "100%",
        paddingHorizontal: 20,

    },
    productInfoContainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    productName: {
        fontSize: 18,
        fontFamily: "beau"
    },
    brand: {
        fontSize: 14,
        color: "#777777",
        marginTop: 2,
        fontFamily: "beau"
    },
    price: {
        fontWeight: "900",
        fontSize: 20,

    },
    description: {
        fontSize: 14,
        marginTop: 20,
        fontFamily: "Lato-Regular"
    },
    propsContaienr: {
        marginTop: 20
    },
});