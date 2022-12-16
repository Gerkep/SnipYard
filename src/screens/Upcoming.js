import {Text, StyleSheet, View, ScrollView} from "react-native";
import DropContainer from "../components/DropContainer";
import DropDay from "../components/DropDay";
import PageName from "../components/PageName";
import shoe from "../../assets/shoe.png";
import jacket from "../../assets/diorjacket.png";
import handbag from "../../assets/lvhandbag.png";
import diorlogo from "../../assets/brands/dior/diorlogoblack.png"
import lvlogo from "../../assets/brands/louisvuitton/lvlogoblack.png"

const Upcoming = () => {

    return (
        <View style={styles.page}>
            <View style={styles.headerContainer}>
                <PageName name="UPCOMING"/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
            <DropDay day="Today"/>
            <DropContainer name="B23 High-Top Sneaker" date="Today 9:00 AM" image={shoe} logo={diorlogo}/>
            <DropDay day="17 Dec"/>
            <DropContainer name="Dior Winter Jacket" date="17 Dec 5:00 PM" image={jacket} logo={diorlogo}/>
            <DropContainer name="Graceful Handbag Mono" date="17 Dec 8:00 PM" image={handbag} logo={lvlogo}/>
            </ScrollView>
        </View>
    )
}

export default Upcoming;

const styles = StyleSheet.create({
    headerContainer: {
        marginLeft: 20
    },
    page: {
        paddingTop: 60,
        flex: 1
    }
})

