import {Text, StyleSheet, View, FlatList, Animated} from "react-native";
import ProductPreview from "../components/ProductPreview";
import BrandContainer from "../components/BrandContainer";
import LVBackground from "../../assets/brands/louisvuitton/LVBackgorund.png"
import LVLogo from "../../assets/brands/louisvuitton/lvlogo.png"
import DiorLogo from "../../assets/brands/dior/diorlogo.png"
import DiorBackground from "../../assets/brands/dior/DiorBackground.png"
import {useRef} from "react";
import MainPageNavbar from "../components/MainPageNavbar";
import burberryBackground from "../../assets/brands/burberry/burberryBackground.png";
import burberryLogo from "../../assets/brands/burberry/burberrylogo.png"
import pradaBackground from "../../assets/brands/prada/pradaBackground.png";
import pradaLogo from "../../assets/brands/prada/pradaLogo.png"

const brands = [{logo: LVLogo, backgroundImage: LVBackground, name: "LouisVuitton"}, {logo: DiorLogo, backgroundImage: DiorBackground, name: "Dior"}, {logo: burberryLogo, backgroundImage: burberryBackground, name: "Burberry"}, {logo: pradaLogo, backgroundImage: pradaBackground, name: "Dior"}]

const MainPage = () => {

    const scrollOffsetY = useRef(new Animated.Value(0)).current;

    return (
        <FlatList 
            stickyHeaderIndices={[0]}   
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
                {useNativeDriver: false}
            )}
            ListHeaderComponent={
                <MainPageNavbar animHeaderValue={scrollOffsetY}/>
                }
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.itemsContainer} 
                keyExtractor={item => item.name} 
                data={brands} 
                renderItem={({item}) => (
                    <BrandContainer logo={item.logo} background={item.backgroundImage}/>
                )} 
        />
    )
} 

const styles = StyleSheet.create({
    categoriesContainer: {
        paddingVertical: 20,
        paddingHorizontal: 13,
    },
    itemsContainer: {

    },
    pageNameContainer: {
        marginHorizontal: 20
    }
})

export default MainPage;