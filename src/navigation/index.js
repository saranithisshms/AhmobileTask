import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ListingProduct from '../pages/listingProduct';
import DetailsProduct from '../pages/detailsProduct';
import CartPage from '../pages/cartPage';



const Stack = createStackNavigator();

// TimeTable

const NavigationPages = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName="ListingProduct" screenOptions={{ headerShown: false, }}   >
        <Stack.Screen name="ListingProduct" component={ListingProduct} />
        <Stack.Screen name="DetailsProduct" component={DetailsProduct} />
        <Stack.Screen name="CartPage" component={CartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationPages;