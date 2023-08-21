import { ThemeProvider, createTheme } from '@rneui/themed';

export default theme = createTheme({
  lightColors: {
    // primary: '#e7e7e8',
    primary: '#D6594F',
    secondary: '#666',
    background: '#fff',
    text: '#333',
  },
  darkColors: {
    primary: '#252525',
    secondary: '#999',
    // background: '#121212',
    background: '#000',
    text: '#fff',
  },
  fonts: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  },
  mode: 'light',
});
