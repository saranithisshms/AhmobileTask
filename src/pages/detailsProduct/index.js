
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Share,
    ScrollView,
    FlatList,
    TextInput
} from 'react-native';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import{ DimensionUtils } from '../../styles/dimension'


const ProductDetails = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');

    const route = useRoute();
    const ProductId = route.params?.ProductId ?? null;
    const [products, setProducts] = useState([]);

    const product = {
        id: '1',
        name: 'Smartphone XYZ',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 499.99,
        image:
            'https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202304/342084443_915459969573602_7545109043687809979_n.jpg?VersionId=Mk7CwOrAnXUG0Xtj8tneLWwV9DgSQpgx&size=686:*',
        category: 'Electronics',
        brand: 'XYZ',
        rating: 4.5,
        reviews: 120,
    };

    const recentProducts = [
        {
            id: '1',
            name: 'Smartphone XYZ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 499.99,
            image:
                'https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202304/342084443_915459969573602_7545109043687809979_n.jpg?VersionId=Mk7CwOrAnXUG0Xtj8tneLWwV9DgSQpgx&size=686:*',
            category: 'Electronics',
            brand: 'XYZ',
            rating: 4.5,
            reviews: 120,
        },
        {
            id: '2',
            name: 'Smartphone XYZ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 499.99,
            image:
                'https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202304/342084443_915459969573602_7545109043687809979_n.jpg?VersionId=Mk7CwOrAnXUG0Xtj8tneLWwV9DgSQpgx&size=686:*',
            category: 'Electronics',
            brand: 'XYZ',
            rating: 4.5,
            reviews: 120,
        },
        {
            id: '3',
            name: 'Smartphone XYZ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 499.99,
            image:
                'https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202304/342084443_915459969573602_7545109043687809979_n.jpg?VersionId=Mk7CwOrAnXUG0Xtj8tneLWwV9DgSQpgx&size=686:*',
            category: 'Electronics',
            brand: 'XYZ',
            rating: 4.5,
            reviews: 120,
        },
        {
            id: '4',
            name: 'Smartphone XYZ',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: 499.99,
            image:
                'https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202304/342084443_915459969573602_7545109043687809979_n.jpg?VersionId=Mk7CwOrAnXUG0Xtj8tneLWwV9DgSQpgx&size=686:*',
            category: 'Electronics',
            brand: 'XYZ',
            rating: 4.5,
            reviews: 120,
        },
    ];

    const handleShare = async () => {
        try {
            const shareMessage = `Check out this awesome product: ${product.name}\nPrice: $${product.price}`;
            const result = await Share.share({
                message: shareMessage,
                url: product.image,
                title: 'Share Product',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Shared with activity type of result.activityType
                    console.log(`Shared with activity type: ${result.activityType}`);
                } else {
                    // Shared
                    console.log('Shared successfully');
                }
            } else if (result.action === Share.dismissedAction) {
                // Dismissed
                console.log('Share dismissed');
            }
        } catch (error) {
            console.error('Error sharing:', error.message);
        }
    };

    const handleAddToWishlist = () => {
        console.log('Add to wishlist button pressed');
        // Implement add to wishlist functionality
    };

    const handleAddToCart = () => {
        navigation.navigate('CartPage');

       // console.log('Add to cart button pressed');
        // Implement add to cart functionality
    };

    // <View style={styles.actionsContainer}>
    //   <TouchableOpacity onPress={handleShare} style={styles.iconButton}>
    //     <Text>Share</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity
    //     onPress={handleAddToWishlist}
    //     style={styles.iconButton}>
    //     <Text>Wishlist</Text>
    //   </TouchableOpacity>
    // </View>

    useEffect(() => {

        if (ProductId != null && ProductId != undefined) {
            fetchProductsID(ProductId)
        }
    }, []);

    const fetchProductsID = async (id) => {
        try {
            // Replace 'your_api_endpoint' with the actual endpoint of your API
            const response = await axios.get(`https://www.testuatah.com/rest/V1/products/${id}`);

            // Assuming your API response has a data property containing the product array
            console.log(response.data)
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.addIcon} onPress={() => {
                    navigation.goBack();
                }}>
                    <Ionicons name="arrow-back-sharp" size={24} color={'#fff'} />
                </TouchableOpacity>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Market Search products"
                    placeholderTextColor="#fff"
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}

                />
            </View>
            <ScrollView>
                <Text style={styles.productName}>{products.name}</Text>
                <View style={{ paddingTop: 8 }}>
                    <Image source={{ uri: product.image }} style={styles.productImage} />
                </View>
                <View style={styles.productInfoContainer}>
              <Text> QRA  <Text style={styles.productPrice}>
                       {products.price}
                    </Text> </Text>
                    <Text style={styles.recentTitle}>Details:</Text>

                    <Text style={styles.productDescription}>{products.sku}</Text>
                  
                    {/* Add more product details as needed */}

                    <View style={styles.recentContainer}>
                        <Text style={styles.youeTitle}>You may also like this</Text>
                        <FlatList
                            data={recentProducts}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.itemContainer}>
                                <View>
                                  <Image source={{ uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/photo_gallery/202304/342084443_915459969573602_7545109043687809979_n.jpg?VersionId=Mk7CwOrAnXUG0Xtj8tneLWwV9DgSQpgx&size=686' }} style={styles.itemImage} />
                                  <View style={{ flexDirection: 'row' }}>
                                    <View>
                                      <Text style={styles.itemText} numberOfLines={1}>{item.name}</Text>
                                      <Text style={styles.itemText}>{'QRA'}  <Text style={styles.itemTextPrice}>{item.price}</Text></Text>
                                    </View>
                                    
                                  </View>
                                </View>
                              </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View style={styles.cartContainer}>
                    <View style={{ borderWidth:1,padding:4 }}>
                        <Text  style={styles.qtyText}> QTY  </Text>
                        <Text style={styles.totalText}>
                            1
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={handleAddToCart}
                        style={styles.addToCartButton}>
                        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
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
    itemTextPrice: {
        color: 'red',
        marginLeft: 5,
        fontSize: 12
      },
    productImage: {
        height:500,
        width:'100%',
        resizeMode: 'cover',
    },
    productInfoContainer: {
       
        paddingLeft: 12,
        paddingRight: 10,
    },
    productName: {
        fontSize: 18,
        paddingLeft: 10,
        color: '#000'

    },
    productDescription: {
        paddingTop:2,
        fontSize: 16,
       
    },
    productPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
    },
    bottomContainer: {

        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconButton: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        width: '48%',
        alignItems: 'center',
    },
    cartContainer: {
        marginTop: 16,
        flexDirection: 'row',

        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
    },
    addToCartButton: {
        backgroundColor: '#B7D635',
        padding: 18,
        borderRadius: 8,
         width:'80%',
        alignItems: 'center',
        marginLeft:12
    },
    addToCartButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    recentContainer: {
        marginTop: 16,
    },
    recentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#000'
    },
    recentItemContainer: {
        marginRight: 12,
    },
    recentItemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    recentItemName: {
        marginTop: 8,
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        paddingTop: 10,
        backgroundColor: '#B7D635'
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 5,
        color: '#fff'
    },
    qtyText:{
        fontSize: 18,
        color:'#B7D635',
        textAlign:'center'
    },
    youeTitle:{
        fontSize: 18,
        marginBottom: 8,
        fontWeight:'300',
        color:'#000'
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        borderColor: '#ddd',
        padding: 0,
    
      },
      itemImage: {
        width: DimensionUtils(140),
        height: 200,
        resizeMode: 'cover',
        marginBottom: 8,
      },
});

export default ProductDetails;