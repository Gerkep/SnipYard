import messageIcon from "../../assets/messageIcon.png";
import moreIcon from "../../assets/moreIcon.png";
import {View, Image, TouchableOpacity, StyleSheet, Text, Animated} from "react-native";

const Max_Header_Height = 308;
const Min_Header_Height = 200;
const Scroll_Distance = Max_Header_Height - Min_Header_Height

const ProfileNavbar = ({animHeaderValue, name}) => {

    const animateContentOpacity = animHeaderValue.interpolate({
        inputRange: [0, Max_Header_Height - Min_Header_Height],
        outputRange: ['0', '1'],
        extrapolate: 'clamp'
      })

    return (
        <View style={styles.actionsContainer}>
            <Animated.Text style={[styles.name, {opacity: animateContentOpacity}]}>{name}</Animated.Text>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity><Image resizeMode="contain" style={styles.actionIcon} source={messageIcon}/></TouchableOpacity>
                <TouchableOpacity><Image resizeMode="contain" style={styles.actionIcon} source={moreIcon}/></TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileNavbar;

const styles = StyleSheet.create({
    actionIcon: {
        width: 25,
        height: 25,
        marginLeft: 20
    },
    actionsContainer: {
        right: 0,
        top: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
        zIndex: 1,
        elevation: 1,
        backgroundColor: "white",
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 14
    },
    name: {
        fontFamily: "Lato-Bold",
        fontSize: 20
    }

})