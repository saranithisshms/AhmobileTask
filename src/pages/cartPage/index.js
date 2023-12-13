import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import{ DimensionUtils } from '../../styles/dimension'

const Cart = () => {

  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Product 1',
      quantity: 1,
      price: 18.25,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: '2',
      name: 'Product 2',
      quantity: 1,
      price: 20.5,
      image:
        'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg',
    },
    // Add more cart items as needed
  ]);

  const calculateTotal = () => {
    const totalCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalCost = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    return { totalCount, totalCost };
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleSwipeDelete = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const renderCartItem = ({ item }) => (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity
          onPress={() => handleSwipeDelete(item.id)}
          style={styles.deleteButton}>
          <AntDesign name="delete" size={30} color={'#fff'} />
        </TouchableOpacity>
      )}>
      <View style={styles.cartItem}>

        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <View>
            <Image source={{ uri: item.image }} style={styles.recentItemImage} />
          </View>
          <View style={{ marginLeft: 20, paddingTop: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
            <View >
              <View>
                <Text> QRA  <Text style={{ color: 'red' }}>{item.quantity * item.price} </Text> </Text>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => handleIncrement(item.id)}
            style={styles.quantityButton}>
            <Text
              style={[
                styles.quantityButtonText,
                { color: '#60C100', paddingBottom: 0 },
              ]}>
              +
            </Text>
          </TouchableOpacity>

          <View style={{ borderWidth: 0.5 }}>
            <Text style={styles.quantityText}>{item.quantity}</Text>
          </View>
          <TouchableOpacity
            onPress={() => handleDecrement(item.id)}
            style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );

  const { totalCount, totalCost } = calculateTotal();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addIcon} onPress={() => {
          navigation.goBack();
        }}>
          <Ionicons name="arrow-back-sharp" size={24} color={'#fff'} />
        </TouchableOpacity>
        <View style={{ alignSelf:'center' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', paddingLeft:DimensionUtils(120) }}>
            {' '}
            Cart{' '}
          </Text>
        </View>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.totalContainer}>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}>
          <Text style={styles.totalsText}>Items Total</Text>
          <Text style={styles.totalsText}>{totalCost}</Text>
        </View>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',

        }}>
          <Text style={styles.totalsText}>Items Discount</Text>
          <Text style={styles.totalsText}>{'0'}</Text>
        </View>

        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingTop: 10
        }}>
          <Text style={styles.totalText}>Total QRA {totalCost}1.00</Text>
          <TouchableOpacity style={styles.checkCartButton}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Ionicons name="cart-outline" size={24} color={'#fff'} />
              </View>
              <View >
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}> Check Out</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  cartItem: {

    marginVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingTop: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderRadius: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  quantityContainer: {

  },
  quantityButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 40,
    borderRadius: 15,
    //marginHorizontal: 8,
  },

  quantityButtonText: {
    fontSize: 24,
  },
  quantityText: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  totalContainer: {


    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginTop: 8,
    padding: 20,

  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: 10
  },
  totalsText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#000',

  },
  header: {
   
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#B7D635',
    flexDirection: 'row',
    justifyContent:'flex-start'
  },
  recentItemImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    resizeMode: 'cover',

  },
  checkCartButton: {
    backgroundColor: '#B7D635',
    padding: 16,
    borderRadius: 25,
    width: '60%',
    alignItems: 'center',
    marginLeft: 12,

  },
});

export default Cart;