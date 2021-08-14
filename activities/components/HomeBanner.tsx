import React from 'react';
import {View, 
    Image, 
    StyleSheet, 
    Dimensions, 
    ImageSourcePropType} from 'react-native';
import Swiper from 'react-native-swiper';

//
const screenWidth = Dimensions.get('window').width;
const bannerWidth = screenWidth - 50;
const scaleBannerImg = 325 / 150;
const bannerHeight = bannerWidth / scaleBannerImg;

const styles = StyleSheet.create({
    bannerContainer: {
        marginHorizontal: 25,
        marginTop: 25,
    },
})

interface IDataBanner {
    id: string;
    img: ImageSourcePropType;
}

interface Props {
    banners: IDataBanner[];
    autoplay: boolean;
}

const HomeBanner = ({autoplay = true, banners}:Props) => {

    return (
        <Swiper showsHorizontalScrollIndicator={false} paginationStyle={{
            bottom: 4
        }} autoplay={autoplay} loop style={{
            height: bannerHeight + 25,
        }}>
            {banners.map(item => {
                return (
                    <View style={styles.bannerContainer} key={item.id}>
                        <Image source={item.img}
                        style={{
                            height: bannerHeight,
                            width: bannerWidth,
                            borderRadius: 22,
                        }} />
                    </View>
                )
            })}
        </Swiper>
    )
}

export default HomeBanner