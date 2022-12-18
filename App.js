import { StyleSheet, StatusBar, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather , Octicons, Foundation} from '@expo/vector-icons';
import MainPage from './src/screens/MainPage';
import Profile from './src/screens/Profile';
import Upcoming from './src/screens/Upcoming';
import Marketplace from './src/screens/Marketplace';
import Product from './src/screens/Product';
import PurchaseSuccess from './src/screens/PurchaseSuccess';
import ShippingInfo from './src/screens/ShippingInfo';
import Sell from './src/screens/Sell';
import ProductListed from './src/screens/ProductListed';
import ScanRequest from './src/screens/ScanRequest';
import { useFonts } from 'expo-font';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./src/firebase/config";
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="MainPage"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarShowLabel: false,
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" color={color} size={30} />
          ),
          headerShown: false,
          tabBarStyle: { display: "none" }
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PurchaseSuccess"
        component={PurchaseSuccess}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ShippingInfo"
        component={ShippingInfo}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProductListed"
        component={ProductListed}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ScanRequest"
        component={ScanRequest}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
})

export default function App() {

    //firebase always log in
    useEffect(() => {
      signInWithEmailAndPassword(auth, "gerke.contact@gmail.com", "password")
      .then((userCredential) => {
          console.log(userCredential)
      })
      .catch((error) => {
          console.log("sign in error")
      });
    }, [])
    
  const [loaded] = useFonts({
    'beau': require('./assets/fonts/beau.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });
  if(!loaded) {
    return;
  }

  return (
    <View style={{flex: 1}}>
    <StatusBar animated={true} barStyle="dark-content"/>
    <NavigationContainer theme={MyTheme}>
      <Tabs />
    </NavigationContainer>
    </View>
  );
}