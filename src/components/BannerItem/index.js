
import React from 'react';

import { Dimensions } from 'react-native'

import { BannerView, BannerFoto } from './style';

const BannerItem = ({ foto, key }) => {
    return (
        <BannerView key={key}>
            <BannerFoto source={{
                uri: foto.trim(),
                width: (Dimensions.get('window').width) - 50,
                height: 180,
                resizeMode: 'contain',
            }} />
        </BannerView>
    );
}

export default BannerItem;