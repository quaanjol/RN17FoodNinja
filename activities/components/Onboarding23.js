import React from 'react';
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const mainBannerWitdh = 408.5;
const mainBannerHeight = 434.22;

const styles = StyleSheet.create({

})

const Onboarding23 = ({banerImg, headerText, smallText}) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            
            <View style={{
                paddingTop: 34,
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{
                        width: mainBannerWitdh * 0.7,
                        height: mainBannerHeight * 0.7,
                    }} source={banerImg}
                    ></Image>

                    <Text style={{
                        fontSize: 22,
                        lineHeight: 29,
                        fontWeight: '700',
                        color: '#09051C',
                        textAlign: 'center',
                        width: 348,
                        marginTop: 30,
                    }}>
                        {headerText}
                    </Text>

                    <Text style={{
                        fontSize: 12,
                        lineHeight: 22,
                        color: '#000000',
                        textAlign: 'center',
                        width: 244,
                        marginTop: 20,
                    }}>
                        {smallText}
                    </Text>
                </View>

                {/* search button */}
                <View style={{
                    flex: 1,
                    marginTop: 30,
                    alignItems: 'center',
                }}>
                    <LinearGradient colors={['#53E88B', '#15BE77']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}} style={{
                        paddingLeft: 15,
                        paddingRight: 15,
                        borderRadius: 5,
                        height: 57,
                        width: 157,
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
                        }} onPress={ () => {
                            alert('search something?');
                        } }>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                color: '#FFFFFF',
                            }}>
                                Search
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

        </View>
    )
}

export default Onboarding23;