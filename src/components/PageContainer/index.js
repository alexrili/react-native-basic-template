import React, {useContext} from 'react';

import {Container, SafeAreaBottom, SafeAreaTop} from './styles';


export default (props) => {
    return (
        <>
            <SafeAreaTop/>
            <Container {...props} />
            <SafeAreaBottom/>
        </>
    );
}
