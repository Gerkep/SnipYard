import {Text, StyleSheet, View, Image, FlatList, TouchableOpacity} from "react-native";
import profilePic from "../../assets/profile.png";
import messageIcon from "../../assets/messageIcon.png";
import moreIcon from "../../assets/moreIcon.png";
import emptyStarIcon from "../../assets/emptyStarIcon.png";
import fullStarIcon from "../../assets/fullStarIcon.png";
import { useState } from "react";
import ProfileProductPreview from "../components/ProfileProductPreview";
import lvjacket from "../../assets/lvjacket.png";
import diorjacket from "../../assets/diorjacket.png";
import shoe from "../../assets/shoe.png";
import lvpants from "../../assets/lvpants.png";
import { useFonts } from 'expo-font';

const products = 
[
    {price: "234", brand: "Louis Pants", image: lvpants}, {price: "244", brand: "Louis Vouitton Jacket", image: lvjacket}, 
    {price: "134", brand: "Dior Winter Jacket", image: diorjacket}, {price: "534", brand: "B23 High-Top Sneaker", image: shoe}, 
    {price: "634", brand: "DIOR", image: diorjacket}
]

const Profile = () => {

    const [option, setOption] = useState("all");

    const [loaded] = useFonts({
        'beau': require('../../assets/fonts/beau.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
        'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
      });

      if (!loaded) {
        return null;
      }

    return (
        <View style={styles.page}>
            <View style={styles.profileContainer}>
                <View style={styles.actoionsContainer}>
                    <TouchableOpacity><Image resizeMode="contain" style={styles.actionIcon} source={messageIcon}/></TouchableOpacity>
                    <TouchableOpacity><Image resizeMode="contain" style={styles.actionIcon} source={moreIcon}/></TouchableOpacity>
                </View>
                <Image style={styles.profilePic} source={profilePic}/>
                    <Text style={styles.name}>Louis Adams</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                        <Text style={styles.label}>Total items</Text>
                        <Text style={styles.statsNumber}>6</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.label}>Rating</Text>
                        <View style={styles.starsContainer}>
                            <Image style={styles.star} source={fullStarIcon}/>
                            <Image style={styles.star} source={fullStarIcon}/>
                            <Image style={styles.star} source={fullStarIcon}/>
                            <Image style={styles.star} source={fullStarIcon}/>
                            <Image style={styles.star} source={emptyStarIcon}/>
                        </View>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.label}>Total sales</Text>
                        <Text style={styles.statsNumber}>2</Text>
                    </View>
                </View>
            </View>
            {option == "all" ?
                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={() => setOption("all")} style={styles.optionSelected}>
                        <Text style={{fontFamily: "Lato-Regular"}}>ALL ITEMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOption("listed")} style={styles.option}>
                        <Text style={{color: "#A8A8A8", fontFamily: "Lato-Regular"}}>LISTED</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={() => setOption("all")} style={styles.option}>
                        <Text style={{color: "#A8A8A8", fontFamily: "Lato-Regular"}}>ALL ITEMS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOption("listed")} style={styles.optionSelected}>
                        <Text style={{fontFamily: "Lato-Regular"}}>LISTED</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList 
                numColumns={2}
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.itemsContainer} 
                keyExtractor={category => category.price} 
                data={products} 
                renderItem={({item}) => (
                    <ProfileProductPreview price={item.price} image={item.image} brand={item.brand}/>
                )} 
            />            
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 40,
        flex: 1
    },
    actionIcon: {
        width: 25,
        height: 25,
        marginLeft: 20
    },
    actoionsContainer: {
        position: "absolute",
        right: 14,
        top: 0,
        flexDirection: "row"
    },
    profileContainer: {
        width: "100%",
        marginTop: 5,
        padding: 20,
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: "10px",
        alignSelf: "center"

    },
    name: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        marginTop: 12,
        fontFamily: "beau"
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20
    },
    stat: {
       alignItems: "center",
       marginHorizontal: 20
    },
    label: {
        fontSize: 12,
        fontFamily: "Lato-Regular",
    },
    statsNumber: {
        fontFamily: "Lato-Black",
        fontSize: 25

    },
    starsContainer: {
        flexDirection: "row"
    },
    star: {
        marginHorizontal: 3,
        marginVertical: 5,
        width: 16,
        height: 16
    },
    optionsContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    optionSelected: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginHorizontal: 45,
    },
    option: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 45,
    }
})

export default Profile;