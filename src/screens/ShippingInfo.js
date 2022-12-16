import { View, StyleSheet, TextInput, Text, ScrollView } from "react-native"
import PageName from "../components/PageName";
import ProductNavbar from "../components/ProductNavbar";
import SummaryProps from "../components/SummaryProps";
import ProductSummaryPreview from "../components/ProductSummaryPreview";
import diorlogo from "../../assets/brands/dior/diorlogo.png";
import shoe from "../../assets/shoe.png";
import ActionButton from "../components/ActionButton";
import { useNavigation } from "@react-navigation/native";
import buyIcon from "../../assets/buyIcon.png";

const ShippingInfo = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.page}>
            <ProductNavbar shareable={false}/>
            <ScrollView style={styles.mainContainer}>
            <PageName name="Delivery Details"></PageName>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput style={styles.input} placeholder="Name"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput style={styles.input} placeholder="Surname"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.input} placeholder="Słoneczna 5"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={styles.input} placeholder="Lusowo"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Zip Code</Text>
                    <TextInput style={styles.input} placeholder="62-080"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Tel. Num.</Text>
                    <TextInput style={styles.input} placeholder="721 783 342"/>
                </View>
            </View>
            <View style={styles.previewContainer}>
                <ProductSummaryPreview name="B23 High-Top Sneaker" image={shoe} brand="DIOR" price="475"/>
            </View>
            <View style={styles.propsContainer}>
                <SummaryProps owner="gerkep07" condition="New" size="45 EU"/>
            </View>
            <ActionButton text="BUY NOW" action={() => navigation.navigate("ThankYou")} icon={buyIcon}/>
            </ScrollView>
        </View>
    )
}

export default ShippingInfo;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingBottom: 20
    },
    mainContainer: {
        paddingHorizontal: 20,
    },
    form: {
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    inputContainer: {
        marginTop: 20
    },
    label: {
        fontSize: 14,
        color: "#777777",
        marginLeft: 4,
    },
    input: {
        width: 155,
        height: 35,
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 4
    },
    propsContainer: {
        marginTop: 20
    },
    previewContainer: {
        marginTop: 20
    }
});