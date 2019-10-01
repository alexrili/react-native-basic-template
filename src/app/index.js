import React from 'react';
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components/native'
import theme from 'styles/colors';
import Routes from "routes";
import { PageContainer } from 'components'

import store from "store"

export default () => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <PageContainer>
                <Routes />
            </PageContainer>
        </Provider>
    </ThemeProvider>
)
