import React from 'react';

import { TouchableOpacity, Text } from './style.js';

const Button = ({ theme, text, ...rest }) => {
    return (
        <TouchableOpacity theme={theme || ''} {...rest}>
            <Text theme={theme || ''}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;