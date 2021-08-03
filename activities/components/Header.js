// / * eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import asset from '../../config/asset';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginLeft: 31,
        marginRight: 29,
        // backgroundColor: '#fff',
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
});

const Header = () => {
    return (
        // {/* view header */}
        <View style={styles.header}>
            <Text style={styles.textFindFavoriteFood}>
                Find Four{'\n'}Favorite Food
            </Text>
            <TouchableOpacity style={styles.notiIcon}
            onPress={() => {
                alert('notification button pressed!');
            }}>
                <Image source={asset.icon_notification}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;