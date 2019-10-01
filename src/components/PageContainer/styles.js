import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    background-color:${({theme}) => theme.white}
`;

export const SafeAreaTop = styled.SafeAreaView`
     background-color:${({theme}) => theme.white}
`;

export const SafeAreaBottom = styled.SafeAreaView`
     background-color:${({theme}) => theme.dark}
`;
