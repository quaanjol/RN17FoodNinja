import React from 'react';
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import LogoSlogan from '../components/LogoSlogan';

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({

})

const Signin = () => {
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
                        Login To Your Account
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

                }}>
                    <TextInput style={{
                        paddingLeft: 20,
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
                }}>
                    <TextInput style={{
                        paddingLeft: 20,
                    }}
                    placeholder="Password" 
                    placeholderTextColor="rgba(59, 59, 59, 0.3)"/>
                </View>

                <View>
                    <Text style={{
                        fontSize: 12,
                        lineHeight: 20,
                        color: '#09051C',
                        fontWeight: '700',
                        marginBottom: 30,
                    }}>
                        Or continue with
                    </Text>
                </View>

                {/* fb and google login */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: width - 50,
                    marginHorizontal: 25,
                }}>

                    <View style={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#F4F4F4',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginBottom: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 30,
                        paddingVertical: 16,
                        alignItems: 'center',
                    }}>
                        <Image source={require('../../images/facebook.png')} style={{
                            marginRight: 8,
                        }} />
                        <Text style={{
                            color: '#09051C',
                            fontSize: 14,
                            lineHeight: 14,
                            letterSpacing: 0.5
                        }}>
                            Facebook
                        </Text>
                    </View>

                    <View style={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#F4F4F4',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginBottom: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 30,
                        paddingVertical: 16,
                        alignItems: 'center',
                    }}>
                        <Image source={require('../../images/google_icon.png')} style={{
                            marginRight: 8,
                        }} />
                        <Text style={{
                            color: '#09051C',
                            fontSize: 14,
                            lineHeight: 14,
                            letterSpacing: 0.5
                        }}>
                            Facebook
                        </Text>
                    </View>
                    
                </View>

                {/* forgot password */}
                <View style={{
                    
                }}>
                    <Text style={{
                        fontSize: 12,
                        lineHeight: 20,
                        letterSpacing: 0.5,
                        color: '#53E88B',
                    }}>
                        Forgot Your Password?
                    </Text>
                </View>

                {/* login button */}
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
                                Login
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </View>
        </ScrollView>
    )
}

export default Signin;