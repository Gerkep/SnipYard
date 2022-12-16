import {View, Text, StyleSheet} from "react-native";
import { useState } from "react";
import { useFonts } from 'expo-font';

const PageName = ({name}) => {
    const [loaded] = useFonts({
        'beau': require('../../assets/fonts/beau.ttf'),
      });

      if (!loaded) {
        return null;
      }
      
    return (
        <View>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontSize: 40,
        paddingBottom: 10,
        fontFamily: 'beau',

    },
})

export default PageName;
