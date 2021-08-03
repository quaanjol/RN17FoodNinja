import React from 'react';
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import asset from '../../config/asset';

import Onboarding23 from '../components/Onboarding23';

const banerImg = asset.img_illus_2;
const headerText = 'Food Ninja is where your comfort food lives';
const smallText = 'Enjoy a fast and smooth food delivery at your doorstep';

const styles = StyleSheet.create({

})

const Onboarding3 = () => {
    return (
        <Onboarding23 banerImg={banerImg} 
        headerText={headerText} smallText={smallText} />
    )
}

export default Onboarding3;