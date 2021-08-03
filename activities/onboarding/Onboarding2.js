import React from 'react';
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import asset from '../../config/asset';

import Onboarding23 from '../components/Onboarding23';

const banerImg = asset.img_illus_1;
const headerText = 'Find your comfort Food here';
const smallText = 'Here you can find a chef or dish for every taste and color. Enjoy!';

const styles = StyleSheet.create({

})

const Onboarding2 = () => {
    return (
        <Onboarding23 banerImg={banerImg} 
        headerText={headerText} smallText={smallText} />
    )
}

export default Onboarding2;