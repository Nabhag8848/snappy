import { StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Button = {
  baseStyles: {},
  backgroundColor: 'black',
  variants: {
    solid: (props: StyleFunctionProps) => ({
      border: '2.8px solid black',
      textTransform: 'uppercase',
      borderRadius: '10rem',
      backgroundColor: 'transparent',
      padding: '8px 18px',
      fontWeight: '800',
      transition: 'all 0.6s',
      _hover: {
        borderRadius: '0.3rem',
        transition: 'all 0.6s',
        backgroundColor: 'transparent',
      },
      _active: {
        borderRadius: '0.3rem',
        transition: 'all 0.6s',
        backgroundColor: 'transparent',
      },
    }),
    outline: (props: StyleFunctionProps) => ({
      _hover: {},
      _active: {},
    }),
  },
  sizes: {
    md: {
      border: '2.8px solid black',
      fontSize: '14px',
    },
    sm: {
      border: '2px solid black',
      fontSize: '12px',
    },
  },
};
