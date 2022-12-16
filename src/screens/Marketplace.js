import { View, FlatList, StyleSheet } from "react-native";
import MarketplaceLogo from "../components/MarketplaceLogo";
import lvlogo from "../../assets/brands/louisvuitton/lvlogoblack.png"
import diorlogo from "../../assets/brands/dior/diorlogoblack.png";
import FiltersBar from "../components/FiltersBar";
import ProductPreview from "../components/ProductPreview";
import lvjacket from "../../assets/lvjacket.png";
import diorjacket from "../../assets/diorjacket.png";
import shoe from "../../assets/shoe.png";
import lvpants from "../../assets/lvpants.png";
import lvbag from "../../assets/lvhandbag.png";
import lvbag2 from "../../assets/lvbag.png";

const products = 
[
    {price: "234", brand: "Louis Pants", image: lvpants}, {price: "244", brand: "Louis Vouitton Jacket", image: lvjacket}, 
    {price: "134", brand: "Dior Winter Jacket", image: diorjacket}, {price: "534", brand: "B23 High-Top Sneaker", image: shoe}, 
    {price: "634", brand: "DIOR", image: lvbag}, {price: "634", brand: "DIOR", image: lvbag2}
]
const Marketplace = () => {
    return (
        <>
            <MarketplaceLogo logo={diorlogo}/>
            <View style={styles.filterBarContainer}>
                <FiltersBar />
            </View>
            <FlatList 
                    numColumns={2}
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={styles.itemsContainer} 
                    keyExtractor={category => category.price} 
                    data={products} 
                    renderItem={({item}) => (
                        <ProductPreview price={item.price} image={item.image}/>
                    )} 
            />
        </>
    )
}

export default Marketplace;

const styles = StyleSheet.create({
    filterBarContainer: {
        marginTop: 15
    },
    itemsContainer: {
        marginTop: 5
    }
})