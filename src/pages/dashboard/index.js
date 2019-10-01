import React from 'react';
import {useSelector} from 'react-redux';
import {Button, PageContainer} from 'components';
import {Container, Title, Text} from './styles';

import Auth from 'services/auth';

export default ({navigation}) => {
    const auth = useSelector(state => state.auth);
    const profile = useSelector(state => state.profile);

    function logout() {
        Auth.logout();
        navigation.navigate('Loading');
    }

    return (
        <PageContainer>
            <Container>
                <Title>Auth: {(auth.isAuth).toString()}</Title>
                <Text>name: {profile.name}</Text>
                <Button onPress={logout}>logout</Button>
            </Container>
        </PageContainer>
    );
}
