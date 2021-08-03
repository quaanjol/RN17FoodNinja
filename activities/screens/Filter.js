/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import asset from '../../config/asset';
import Header from '../components/Header';

//
const screenWidth = Dimensions.get('window').width;
const bannerWidth = screenWidth - 50;
const scaleBannerImg = 325 / 150;
const bannerHeight = bannerWidth / scaleBannerImg;


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        marginLeft: 31,
        marginRight: 29,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        marginTop: 24,
    },
    textFindFavoriteFood: {
        color: '#09051C',
        fontSize: 31,
        lineHeight: 41,
    },
    notiIcon: {
        width: 45,
        height: 45,
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 11,
        elevation: 3,
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
    filterSectionBox: {
        marginHorizontal: 25,
    },
    filterSectionTitle: {
        fontSize: 15,
        lineHeight: 20,
        color: '#09051C',
        marginVertical: 20,
        fontWeight: '700',
    },
    filterSectionItemBox: {
        flexDirection: 'row',
        marginHorizontal: 25,
        flexWrap: 'wrap'
    }
});

const FilterSection = ({title, data}) => {
    return (
        <View>
            <View style={styles.filterSectionBox}>
                <Text style={styles.filterSectionTitle}>
                    {title}
                </Text>
            </View>


            <View style={styles.filterSectionItemBox}>
                {data.map((item, index) => {
                    return (
                        <View style={{
                            backgroundColor: 'rgba(249, 168, 77, 0.1)',
                            padding: 20,
                            borderRadius: 15,
                            marginRight: 15,
                            marginBottom: 15
                        }} key={index}>
                            <Text style={{
                                color: 'rgba(249, 168, 77, 0.8)',
                                fontSize: 12,
                                fontWeight: '700'
                            }}>
                                {item}
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
};


const Filter = () => {
    return (
    // container
    <ScrollView>
    <View style={styles.container, {paddingBottom: 20}} showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
        {/* view header */}
        <Header/>

        {/* search view */}
        <View style={styles.searchContainer}>
            <View style={styles.searchInput}>
                <Image source={asset.icon_search}/>
                <TextInput style={styles.searchInuptText}
                placeholder="What to you want to order?" 
                placeholderTextColo="rgba(249, 168, 77, 0.4)"/>
            </View>
        </View>

        {/* filters */}
        <FilterSection title={'Type'} data={['Restaurant', 'Menu']}/>

        <FilterSection title={'Location'} data={['1km', '>10km', '<10km']}/>

        <FilterSection title={'Food'} data={['Cake', 'Soup', 'Main Course', 'Appetizer', 'Dessert']}/>

        {/* search button */}
        <View style={{
            flex: 1
        }}>
            <LinearGradient colors={['#53E88B', '#15BE77']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}} style={{
                flex: 1,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 5,
                height: 57,
                borderRadius: 15,
                marginHorizontal: 25,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 14,
                        color: '#FEFEFF',
                    }}>
                        Search
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>

    </View>
    </ScrollView>
  );
};

export default Filter;
