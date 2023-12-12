import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Product 1', quantity: 1, price: 10 },
    { id: '2', name: 'Product 2', quantity: 1, price: 20 },
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
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      )}>
      <View style={styles.cartItem}>
        <View>
          <Text>{item.name}</Text>

          <Text>Total: ${item.quantity * item.price}</Text>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => handleDecrement(item.id)}
            style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleIncrement(item.id)}
            style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
  );

  const { totalCount, totalCost } = calculateTotal();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}> Cart </Text>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Count: {totalCount}</Text>
        <Text style={styles.totalText}>Total Cost: ${totalCost}</Text>
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
    flex: 1,
    marginVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
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
  quantityContainer: {},
  quantityButton: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  quantityButtonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  totalContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginTop: 8,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#60C100',
  },
});

export default Cart;