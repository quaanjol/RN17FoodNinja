import React from 'react';
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import asset from '../../config/asset';

const styles = StyleSheet.create({

})

const LogoSlogan = () => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image style={{
                width: 180,
                height: 180,
            }} source={asset.img_logo}
            ></Image>

            <Text style={{
                fontSize: 40,
                lineHeight: 54,
                letterSpacing: 0.5,
                fontWeight: '700',
                color: '#53E88B',
            }}>
                Food Ninja
            </Text>

            <Text style={{
                fontSize: 13,
                lineHeight: 16,
                color: '#09051C',
                letterSpacing: 1,
            }}>
                Deliver Favorite Food
            </Text>
        </View>
    )
}

export default LogoSlogan;