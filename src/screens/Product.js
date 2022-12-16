import { View, StyleSheet, Text, ScrollView } from "react-native"
import ProductNavbar from "../components/ProductNavbar";
import ProductBigPreview from "../components/ProductBigPreview";
import ProductProps from "../components/ProductProps";
import ActionButton from "../components/ActionButton";
import { useNavigation } from "@react-navigation/native";


const Product = () => {

    const navigation = useNavigation();

    return (
        <ScrollView>
         <ProductNavbar shareable={true}/>
         <View style={styles.previewContainer}>
            <ProductBigPreview />
            <View style={styles.productInfoContainer}>
                <View>
                    <Text style={styles.productName}>Dior Winter Jacket</Text>
                    <Text style={styles.brand}>DIOR</Text>
                </View>
                <Text style={styles.price}>$457</Text>
            </View>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </Text>
            <View style={styles.propsContaienr}>
                <ProductProps owner="gerkep07" condition="New" size="45 EU" invoice="VAT Invoice"/>
            </View>
         </View>
        <ActionButton text="ORDER NOW" action={() => navigation.navigate("ShippingInfo")}/>

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
        fontWeight: "bold"
    },
    brand: {
        fontSize: 14,
        color: "#777777",
        marginTop: 2
    },
    price: {
        fontWeight: "900",
        fontSize: 20

    },
    description: {
        fontSize: 14,
        marginTop: 20
    },
    propsContaienr: {
        marginTop: 20
    },
});