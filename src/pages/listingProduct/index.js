import React, { useState,useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TextInput, TouchableOpacity,StatusBar, Alert  } from 'react-native';
import axios from 'axios';


const ProductGrid = () => {
  const [searchText, setSearchText] = useState('');
//  StatusBar.setBackgroundColor('#60C100');

const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Replace 'your_api_endpoint' with the actual endpoint of your API
      const response = await axios.get('https://www.testuatah.com/rest/V1/products?searchCriteria[pageSize]=50&searchCriteria[currentPage]=1&searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=287&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][1][filters][0][field]=status&searchCriteria[filter_groups][1][filters][0][value]=1&searchCriteria[filter_groups][1][filters][0][condition_type]=eq&searchCriteria[filter_groups][2][filters][0][field]=visibility&searchCriteria[filter_groups][2][filters][0][value]=4&searchCriteria[filter_groups][2][filters][0][condition_type]=eq&searchCriteria[sortOrders][0][field]=position&searchCriteria[sortOrders][0][direction]=DESC');

      // Assuming your API response has a data property containing the product array
      setProducts(response.data.items);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

//    console.log('>>>>>>>>>>>>>>>>>>>>>>',products)
//    Alert.alert(JSON.stringify(products))

  const renderProductItem = ({ item }) => {
  
  return  (

    <View style={styles.itemContainer}>
      <Image source={{ uri:'https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202304/342084443_915459969573602_7545109043687809979_n.jpg?VersionId=Mk7CwOrAnXUG0Xtj8tneLWwV9DgSQpgx&size=686' }} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.price}</Text>
      
    </View>
  ) }

  useEffect(() => {
    // Set the background color of the status bar when the component mounts
    StatusBar.setBackgroundColor('#60C100');
    StatusBar.setHidden(false);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back icon pressed')}>
          {/* Add your back icon here */}
          <Text>{'Back'}</Text>
        </TouchableOpacity>
        
        <TextInput
          style={styles.searchInput}
          placeholder="Search products"
          placeholderTextColor="#fff"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}

        />
       
        <TouchableOpacity onPress={() => console.log('Filter icon pressed')}>
          {/* Add your filter icon here */}
          <Text>{'Filter'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    backgroundColor:'#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop:30,
    backgroundColor:'#60C100'
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin:5,
    color:'#fff'
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 4,
   
    borderColor: '#ddd',
    padding: 0,
    alignItems: 'center',
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  itemText: {
    textAlign: 'left',
    fontSize:12
  },
});

export default ProductGrid;