import {View, TextInput, Image, StyleSheet} from "react-native";
import searchIcon from "../../assets/searchIcon.png";

const SearchBar = () => {
    return (
        <View style={styles.inputContainer}>
            <Image style={styles.icon} source={searchIcon}/>
            <TextInput style={styles.input} placeholder="Search"/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 350,
        height: 35,
        borderWidth: 1,
        borderColor: '#ECECEC',
        alignSelf: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    icon: {
        width: 15,
        height: 15
    },
    input: {
        flex: 1,
        marginLeft: 12,
        height: 35
    }
})

export default SearchBar;