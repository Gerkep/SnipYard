import {StyleSheet, ScrollView, View, Animated, TouchableOpacity, Image} from "react-native";
import { useState, useRef, useEffect } from "react";
import ProfileProductPreview from "../components/ProfileProductPreview";
import lvjacket from "../../assets/lvjacket.png";
import diorjacket from "../../assets/diorjacket.png";
import shoe from "../../assets/shoe.png";
import prophere from "../../assets/prophere.png";
import ProfileHeader from "../components/ProfileHeader";
import ProfileNavbar from "../components/ProfileNavbar";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";


const Profile = () => {

    const [displayAll, setDisplayAll] = useState(true);
    const [items, setItems] = useState([]);
    const scrollOffsetY = useRef(new Animated.Value(0)).current;

    const fetchItems = async () => {
        let fetchedItems = [];
        const querySnapshot = await getDocs(collection(db, "Users", "piotrg2003@gmail.com", "ownedItems"));
        querySnapshot.forEach((doc) => {
            fetchedItems.push(doc.data());
        });
        console.log(fetchedItems)
        setItems(fetchedItems);
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <View style={{flex: 1}}>
            <ProfileNavbar animHeaderValue={scrollOffsetY} name="Louis Adams"/>
            <ScrollView 
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
                    {useNativeDriver: false}
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false} 
            >
            <ProfileHeader animHeaderValue={scrollOffsetY} displayAll={displayAll} onOptionChange={() => setDisplayAll(!displayAll)}/>
            <View style={styles.itemsContainer}>
                {items.map((item) => {
                    return (
                        <ProfileProductPreview price={item.price} image={item.imageURL} brand={item.brandName}/>
                    );
                })}
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        paddingTop: 40,
        flex: 1
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
    },
    itemsContainer: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        zIndex: 0,
    }
})

export default Profile;