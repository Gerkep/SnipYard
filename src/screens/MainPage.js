import {Text, StyleSheet, View, FlatList, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import PageName from "../components/PageName";
import ProductPreview from "../components/ProductPreview";
import TopRightNavbar from "../components/TopRightNavbar";
import CategoryIcon from "../components/CategoryIcon";
import clothesIcon from "../../assets/clothesIcon.png";
import accessoriesIcon from "../../assets/accessoriesIcon.png";
import sneakersIcon from "../../assets/sneakersIcon.png";
import bagIcon from "../../assets/bagIcon.png";
import fireIcon from "../../assets/fireIcon.png";
import BrandContainer from "../components/BrandContainer";
import LVBackground from "../../assets/brands/louisvuitton/LVBackgorund.png"
import LVLogo from "../../assets/brands/louisvuitton/lvlogo.png"
import DiorLogo from "../../assets/brands/dior/diorlogo.png"
import DiorBackground from "../../assets/brands/dior/DiorBackground.png"

const brands = [{logo: LVLogo, backgroundImage: LVBackground, name: "LouisVuitton"}, {logo: DiorLogo, backgroundImage: DiorBackground, name: "Dior"}, {logo: LVLogo, backgroundImage: LVBackground, name: "LouisVuitton"}, {logo: DiorLogo, backgroundImage: DiorBackground, name: "Dior"}]
const categories = [{title: "Clothes", icon: clothesIcon}, {title: "Accessories", icon: accessoriesIcon}, {title: "Bags", icon: bagIcon}, {title: "Sneakers", icon: sneakersIcon}, {title: "Latest drops", icon: fireIcon}]

const MainPage = () => {
    return (
        <>
            <View>
                <TopRightNavbar />
                <View style={styles.pageNameContainer}>
                    <PageName name="SNIP IT"/>
                </View>
                <SearchBar />
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={styles.categoriesContainer} 
                    keyExtractor={category => category.title} 
                    data={categories} 
                    renderItem={({item}) => (
                        <CategoryIcon title={item.title} icon={item.icon}/>
                    )} 
                />
            </View>
            <FlatList 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.itemsContainer} 
                keyExtractor={item => item.name} 
                data={brands} 
                renderItem={({item}) => (
                    <BrandContainer logo={item.logo} background={item.backgroundImage}/>
                )} 
            />
        </>
    )
} 

const styles = StyleSheet.create({
    categoriesContainer: {
        paddingVertical: 20,
        paddingHorizontal: 13,
    },
    itemsContainer: {
        marginTop: 20,
    },
    pageNameContainer: {
        marginHorizontal: 20
    }
})

export default MainPage;