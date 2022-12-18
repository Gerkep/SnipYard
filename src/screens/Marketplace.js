import { View, FlatList, StyleSheet, Animated } from "react-native";
import ProductPreview from "../components/ProductPreview";
import lvjacket from "../../assets/lvjacket.png";
import diorjacket from "../../assets/diorjacket.png";
import shoe from "../../assets/shoe.png";
import lvpants from "../../assets/lvpants.png";
import lvbag from "../../assets/lvhandbag.png";
import lvbag2 from "../../assets/lvbag.png";
import { useRef, useEffect, useState } from "react";
import MarketHeader from "../components/MarketHeader";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Marketplace = () => {

    const [items, setItems] = useState([]);
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    
    const fetchItems = async () => {
        let fetchedItems = [];
        const querySnapshot = await getDocs(collection(db, "ListedItems"));
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
        <FlatList 
            stickyHeaderIndices={[0]}
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
                {useNativeDriver: false}
            )}
            ListHeaderComponent={
                <MarketHeader animHeaderValue={scrollOffsetY} />
            }
            showsVerticalScrollIndicator={false} 
            numColumns={2}
            keyExtractor={item => item.image} 
            data={items}
            renderItem={({item}) => (
                <ProductPreview price={item.price} image={item.imageURL}/>
            )} 
      />
    )
}

export default Marketplace;

const styles = StyleSheet.create({
    filterBarContainer: {
        marginTop: 15
    },
    itemsContainer: {
        marginTop: 10
    }
})