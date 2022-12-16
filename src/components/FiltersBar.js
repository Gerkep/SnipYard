import { View, Image, Text, StyleSheet } from "react-native";
import filterIcon from "../../assets/filterIcon.png";

const FiltersBar = () => {
    return (
        <View style={styles.bar}>
            <Image style={styles.icon} resizeMode="contain" source={filterIcon}/>
            <Text style={styles.text}>FILTERS</Text>
        </View>
    )
}

export default FiltersBar;

const styles = StyleSheet.create({
    bar: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 14,
        alignItems: "center",
        paddingVertical: 10
    },
    icon: {
        width: 20, 
        height: 20
    },
    text: {
        fontSize: 15,
        marginLeft: 10
    }
})