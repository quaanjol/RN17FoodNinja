/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import HomeBanner from '../components/HomeBanner';
import Header from '../components/Header';
import Filter from './Filter';
import asset from '../../config/asset';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    searchContainer: {
        marginHorizontal: 25,
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
    },
    searchInput: {
        flex: 1,
        marginRight: 9,
        backgroundColor: 'rgba(249, 168, 77, 0.1)',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    searchInuptText: {
        fontSize: 12,
        color: 'rgba(249, 168, 77, 0.4)',
        lineHeight: 14,
        marginLeft: 19,
    },
    filterContainer: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'rgba(249, 168, 77, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nearestContainer: {
        flexDirection: 'row',
        marginHorizontal: 31,
        marginTop: 31,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nearestText: {
        color: '#09051C',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
    },
    viewMoreText: {
        color: 'rgb(249, 168, 77)',
        fontSize: 12,
        lineHeight: 16,
    },
    restaurantContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 30,
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    restaurantBoxHorizontal: {
        width: (screenWidth - 80) / 2,
        marginBottom: 20,
        marginRight: 15,
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 26,
        borderRadius: 22,
        elevation: 3,
        backgroundColor: '#fff',
    },
    restaurantBox: {
        width: (screenWidth - 80) / 2,
        marginBottom: 20,
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 26,
        borderRadius: 22,
        elevation: 3,
        backgroundColor: '#fff',
    },
    restaurantItemImg: {
        width: 100,
        height: 100,
    },
    restaurantItemNameText: {
        fontSize: 15,
        lineHeight: 21,
        color: '#000000',
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 4,
    },
    restaurantItemTimeText: {
        fontSize: 13,
        lineHeight: 17,
        color: 'rgba(0, 0, 0, 0.5)',
    },
});


const Home = ({ navigation }) => {
    // nearest restaurants
    const nearestRestaurants = [
        {
            id: 1,
            name: 'Vegan Restro',
            img: asset.img_vegan,
            time: '8 mins',
        },
        {
            id: 2,
            name: 'Healthy',
            img: asset.img_healthy,
            time: '12 mins',
        },
        {
            id: 3,
            name: 'Good Food',
            img: asset.img_goodFood,
            time: '10 mins',
        },
        {
            id: 4,
            name: 'Smart Restro',
            img: asset.img_smartRestro,
            time: '15 mins',
        },
    ];

    // popular menu
    const popularMenu = [
        {
            id: 1,
            name: 'Herbal Pancake',
            price: 7,
            restaurant: 'Warung Herbal',
            img: asset.img_herbalPancake,
        },
        {
            id: 2,
            name: 'Fruit Salad',
            price: 5,
            restaurant: 'Wijie Restro',
            img: asset.img_fruitSalad,
        },
        {
            id: 3,
            name: 'Green Noodle',
            price: 15,
            restaurant: 'Noddle Home',
            img: asset.img_greenNoodle,
        },
    ];

    // banner
    const banners = [
        {
            id: 1,
            img: asset.img_banner
        },
        {
            id: 2,
            img: asset.img_banner_2
        },
        {
            id: 1,
            img: asset.img_banner
        },
        {
            id: 4,
            img: asset.img_banner_2
        }
    ];

    return (
    // container
    <ScrollView>
    <View style={styles.container, {paddingBottom: 20}} showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>

        {/* header view */}
        <Header/>

        {/* search view */}
        <View style={styles.searchContainer}>
            <Pressable style={styles.searchInput} onPress={() => {
                navigation.navigate('Filter')
            }}>
                <Image source={asset.icon_search}/>
                <Text style={styles.searchInuptText}>What do you want to order?</Text>
            </Pressable>
        </View>

        {/* banner view */}
        <HomeBanner autoplay={true} banners={banners} />

        <View style={styles.nearestContainer}>
            <Text style={styles.nearestText}>
                Nearest Restaurants
            </Text>
            <Text style={styles.vieMoreText}>
                View more
            </Text>
        </View>

        {/* view nearest restaurants */}
        <View style={styles.restaurantContainer}>
            {nearestRestaurants.map((item, index) => {
                return (
                    <View key={index} style={styles.restaurantBox}>
                        <Image source={item.img}
                        style={styles.restaurantItemImg}/>
                        {/* name */}
                        <Text style={styles.restaurantItemNameText}>
                            {item.name}
                        </Text>
                        {/* time */}
                        <Text style={styles.restaurantItemTimeText}>
                            {item.time}
                        </Text>
                    </View>
                );
            })}
        </View>

        {/* view nearest restaurants horizontal */}
        <View style={styles.nearestContainer}>
            <Text style={styles.nearestText}>
                Nearest restaurants horizontal scroll
            </Text>
            <Text style={styles.vieMoreText}>
                View more
            </Text>
        </View>
        <ScrollView horizontal  showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.restaurantContainer}>
            {nearestRestaurants.map((item, index) => {
                return (
                    <View key={index} style={styles.restaurantBoxHorizontal}>
                        <Image source={item.img}
                        style={styles.restaurantItemImg}/>
                        {/* name */}
                        <Text style={styles.restaurantItemNameText}>
                            {item.name}
                        </Text>
                        {/* time */}
                        <Text style={styles.restaurantItemTimeText}>
                            {item.time}
                        </Text>
                    </View>
                );
            })}
        </View>
        </ScrollView>

        {/* Menu list */}
        <View style={styles.nearestContainer}>
            <Text style={styles.nearestText}>
                Popular menu
            </Text>
            <Text style={styles.vieMoreText}>
                View more
            </Text>
        </View>

        <View style={{}}>
            {popularMenu.map((item, index) => {
                return (
                    <View key={index} style={{
                        marginHorizontal: 30,
                        marginTop: 15,
                        padding: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderRadius: 22,
                        elevation: 3,
                        backgroundColor: '#fff',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',

                        }}>
                            <Image source={item.img}
                            style={{
                                width: 80,
                                height: 80,
                                marginRight: 15
                            }}/>
                            {/* name */}
                            <View style={{
                                flexDirection: 'column',
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '600',
                                }}>
                                    {item.name}
                                </Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#3B3B3B',
                                }}>
                                    {item.restaurant}
                                </Text>
                            </View>
                        </View>
                        
                        <Text style={{
                            fontSize: 22,
                            color: '#FEAD1D',
                            fontWeight: '700',
                        }}>
                            ${item.price}
                        </Text>
                    </View>
                );
            })}
        </View>

    </View>
    </ScrollView>
  );
};

export default Home;
