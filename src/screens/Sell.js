import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native"
import ProductNavbar from "../components/ProductNavbar";
import ProductBigPreview from "../components/ProductBigPreview";
import ProductProps from "../components/ProductProps";
import ActionButton from "../components/ActionButton";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const Product = () => {

    const navigation = useNavigation();
    const [condition, setCondition] = useState('Unknown');
    const [invoice, setInvoice] = useState('Unknown');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
         <ProductNavbar shareable={true}/>
         <View style={styles.previewContainer}>
            <ProductBigPreview />
            <View style={styles.productInfoContainer}>
                <View>
                    <Text style={styles.productName}>Adidas Prophere Sneaker</Text>
                    <Text style={styles.brand}>Adidas</Text>
                </View>
                <View style={styles.priceInputContainer}>
                    <Text style={styles.priceLabel}>$</Text>
                    <TextInput placeholder="123" style={styles.priceInput}></TextInput>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput placeholder="Your product description goes here..." multiline={true} style={styles.descriptionInput}></TextInput>
            </View>
            <View style={styles.pickersConatiner}>
                <Picker
                selectedValue={condition}
                onValueChange={(value, index) => setCondition(value)}
                mode="dropdown" // Android only
                itemStyle={styles.pickerItem}
                style={styles.picker}
                >
                    <Picker.Item label="Choose condition..." value="Undefined" />
                    <Picker.Item label="New" value="New" />
                    <Picker.Item label="Used" value="Used" />
                </Picker>
                <Picker
                    selectedValue={invoice}
                    onValueChange={(value, index) => setInvoice(value)}
                    mode="dropdown" // Android only
                    itemStyle={styles.pickerItem}
                    style={styles.picker}
                >
                    <Picker.Item label="Choose invoice..." value="Undefined" />
                    <Picker.Item label="VAT invoice" value="VAT invoice" />
                    <Picker.Item label="No invoice" value="No invoice" />
                </Picker>
            </View>
         </View>
         <View style={styles.actionButtonContainer}>
            <ActionButton text="LIST NOW" action={() => navigation.navigate("ProductListed")}/>
         </View>
        </ScrollView>
    )
}

export default Product;

const styles = StyleSheet.create({
    actionButtonContainer: {
        paddingBottom: 20
    },
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
        fontWeight: "bold",
        fontFamily: "beau"
    },
    brand: {
        fontSize: 14,
        color: "#777777",
        marginTop: 2,
                fontFamily: "beau"
    },
    priceInputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    priceLabel: {
        marginRight: 5,
        fontSize: 20,
    },
    priceInput: {
        borderColor: '#ECECEC',
        borderWidth: 1,
        fontSize: 20,
        backgroundColor: '#F7F7F7',
        width: 100,
        height: 35,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    inputContainer: {
        marginTop: 20
    },
    label: {
        fontSize: 14,
        color: "#777777",
    },
    descriptionInput: {
        height: 80,
        width: "100%",
        borderRadius: 10,
        borderColor: '#ECECEC',
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 12,
        marginTop: 4
    },
    pickersConatiner: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "nowraps"
    },
    picker: {
        width: "50%"
    },
    pickerItem: {
        fontSize: 14,
    }
});