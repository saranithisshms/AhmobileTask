import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Share,
    ScrollView,
    FlatList
} from 'react-native';

const ProductDetails = ({ route }) => {
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
        console.log('Add to cart button pressed');
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

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <View style={styles.productInfoContainer}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>
                    <Text style={styles.productPrice}>
                        Price: ${product.price.toFixed(2)}
                    </Text>
                    {/* Add more product details as needed */}

                    <View style={styles.recentContainer}>
                        <Text style={styles.recentTitle}>Recently Viewed</Text>
                        <FlatList
                            data={recentProducts}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.recentItemContainer}
                                    onPress={() => console.log('Navigate to recent product details')}
                                >
                                    <Image source={{ uri: item.image }} style={styles.recentItemImage} />
                                    <Text style={styles.recentItemName}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View style={styles.cartContainer}>
                    <Text style={styles.totalText}>
                        Total: ${product.price.toFixed(2)}
                    </Text>
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
        padding: 0,
    },
    productImage: {
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
    },
    productInfoContainer: {
        marginTop: 16,
        paddingLeft: 10,
        paddingRight: 10,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 16,
        marginTop: 8,
    },
    productPrice: {
        fontSize: 18,
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addToCartButton: {
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    recentContainer: {
        marginTop: 16,
    },
    recentTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
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
});

export default ProductDetails;