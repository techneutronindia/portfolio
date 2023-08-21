import React from 'react';
import { ThemeProvider } from '@rneui/themed'
import theme from './src/theme/theme'
import Navigation from './src/routing/Navigation';

const App = () => {
    return (
            <ThemeProvider theme={theme}>
                <Navigation />
            </ThemeProvider>
    ); 
}

export default App;