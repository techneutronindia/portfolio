import { ThemeProvider, createTheme } from '@rneui/themed';

export default theme = createTheme({
  lightColors: {
    primary: '#dd4b3f',
    secondary: '#222325',
    background: '#ecf0ee',
    text: '#1c1b21',
  },
  darkColors: {
    primary: '#1c1b21',
    secondary: '#999',
    background: '#121212',
    background: '#23232d',
    text: '#fff',
  },
  fonts: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  },
  mode: 'light',
});
