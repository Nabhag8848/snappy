import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { Button } from 'theme/components/button';
import { fonts } from 'theme/fonts';
import { styles } from 'theme/styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    snappy: {
      yellow: '#FFFF1E',
      black: '#000000',
      dark_gray: '#777777',
      light_gray: '#F7F7F7',
      white: '#FFFFFF', 
    },
  },
  config,
  styles,
  fonts,
  components: {
    Button,
  },
});

export default theme;
