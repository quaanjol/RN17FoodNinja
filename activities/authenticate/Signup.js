import React from 'react';
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IconlyProvider, Home, Notification, TickSquare } from 'react-native-iconly';

import LogoSlogan from '../components/LogoSlogan';

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({

})

const Signup = () => {
    return (
        <ScrollView >
            <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            paddingBottom: 30,
            }}>
                <LogoSlogan/>

                {/* header */}
                <View>
                    <Text style={{
                        fontSize: 20,
                        lineHeight: 26,
                        color: '#09051C',
                        fontWeight: '700',
                        marginTop: 50,
                        marginBottom: 30,
                    }}>
                        Sign up for free
                    </Text>
                </View>

                {/* form */}
                <View style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#F4F4F4',
                    borderWidth: 1,
                    width: width - 50,
                    marginHorizontal: 25,
                    borderRadius: 10,
                    marginBottom: 20,
                    paddingLeft: 20,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                }}>
                    <Image source={require('../../images/Profile.png')} style={{
                        marginRight: 8,
                    }} />
                    <TextInput style={{
                        
                    }}
                    placeholder="Username" 
                    placeholderTextColor="rgba(59, 59, 59, 0.3)"/>
                </View>

                <View style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#F4F4F4',
                    borderWidth: 1,
                    width: width - 50,
                    marginHorizontal: 25,
                    borderRadius: 10,
                    marginBottom: 20,
                    paddingLeft: 20,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                }}>
                    <Image source={require('../../images/Message.png')} style={{
                        marginRight: 8,
                    }} />
                    <TextInput style={{
                        
                    }}
                    placeholder="Email" 
                    placeholderTextColor="rgba(59, 59, 59, 0.3)"/>
                </View>

                <View style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#F4F4F4',
                    borderWidth: 1,
                    width: width - 50,
                    marginHorizontal: 25,
                    borderRadius: 10,
                    marginBottom: 20,
                    paddingLeft: 20,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                }}>
                    <Image source={require('../../images/Lock.png')} style={{
                        marginRight: 8,
                    }} />
                    <TextInput style={{
                        
                    }}
                    placeholder="Password" 
                    placeholderTextColor="rgba(59, 59, 59, 0.3)"/>
                </View>

                {/* small text */}

                <View style={{
                    width: width - 50,
                    marginHorizontal: 25,
                    borderRadius: 10,
                    marginBottom: 20,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                }}>
                    <TickSquare color="#15BE77" style={{
                        marginRight: 10,
                    }}/>
                    <Text style={{
                        color: 'rgba(0,0,0,0.5)',
                        fontSize: 12,
                        lineHeight: 20,
                    }}>
                        Keep Me Signed In
                    </Text>
                </View>

                <View style={{
                    width: width - 50,
                    marginHorizontal: 25,
                    borderRadius: 10,
                    marginBottom: 20,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',

                }}>
                    <TickSquare color="#15BE77" style={{
                        marginRight: 10,
                    }}/>
                    <Text style={{
                        color: 'rgba(0,0,0,0.5)',
                        fontSize: 12,
                        lineHeight: 20,
                    }}>
                        Email Me About Special Pricing
                    </Text>
                </View>


                {/* submit button */}
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    marginBottom: 20,
                }}>
                    <LinearGradient colors={['#53E88B', '#15BE77']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}} style={{
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
                        }} onPress={ () => {
                            alert('search something?');
                        } }>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 21,
                                color: '#FFFFFF',
                            }}>
                                Create An Account
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                {/* already have an account? */}
                <View style={{
                    
                }}>
                    <Text style={{
                        fontSize: 12,
                        lineHeight: 20,
                        letterSpacing: 0.5,
                        color: '#53E88B',
                    }}>
                        Already have an account?
                    </Text>
                </View>

            </View>
        </ScrollView>
    )
}

export default Signup;