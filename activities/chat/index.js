import React from 'react';
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Home, ArrowLeft } from 'react-native-iconly';

import asset from '../../config/asset';

const styles = StyleSheet.create({

})

const index = () => {

    // popular menu
    const messages = [
        {
            id: 1,
            name: 'John Doe',
            preview: 'Lorem ipsum...',
            img: asset.img_person_1,
        },
        {
            id: 2,
            name: 'Jackie Chan',
            preview: 'Lorem ipsum...',
            img: asset.img_person_2,
        },
        {
            id: 3,
            name: 'Stephen Curry',
            preview: 'Lorem ipsum...',
            img: asset.img_person_3,
        },
    ];

    return (
        <View style={{
            
            flex: 1,
        }}>
            
            <View style={{
                backgroundColor: 'rgba(255, 182, 105, 0.5)',
                padding: 8,
                flexWrap: "wrap",
                borderRadius: 10,
                marginTop: 38,
                marginLeft: 25,
                marginBottom: 20,
                width: 45,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Pressable style={{

                }} onPress={() => {
                    alert("text")
                }}>
                    <ArrowLeft color="#DA6317" />
                </Pressable>
            </View>

            <View style={{
                marginHorizontal: 25,
            }}>
                <Text style={{
                    fontSize: 25,
                    lineHeight: 33,
                    color: '#09051C'
                }}>
                    Chat
                </Text>
            </View>

            <View style={{}}>
                {messages.map((item, index) => {
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
                                        lineHeight: 20,
                                        fontWeight: '600',
                                    }}>
                                        {item.name}
                                    </Text>
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: '#3B3B3B',
                                    }}>
                                        {item.preview}
                                    </Text>
                                </View>
                            </View>
                            
                        </View>
                    );
                })}
            </View>

        </View>
    )
}

export default index;