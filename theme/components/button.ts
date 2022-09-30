import { StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Button = {
  baseStyles: {},
  backgroundColor: 'black',
  variants: {
    solid: (props: StyleFunctionProps) => ({
      textTransform: 'uppercase',
      borderRadius: '10rem',
      backgroundColor: '#EEEEEE',
      padding: '8px 18px',
      fontWeight: '400',
      transition: 'all 0.6s',
      _hover: {
        transform: 'scale(1.05)',
        transition: 'all 0.4s',
        backgroundColor: '#EEEEEf',
      },
      _active: {
        scale: '1.02',
        borderRadius: '0.3rem',
        transition: 'all 0.6s',
        backgroundColor: '#EEEEEE',
      },
    }),
    outline: (props: StyleFunctionProps) => ({
      _hover: {},
      _active: {},
    }),
  },
  sizes: {
    md: {
      fontSize: '14px',
      //height: '3rem',
    },
    sm: {
      fontSize: '12px',
      height: '2.5rem',
      padding: '0.5rem 1rem',
    },
  },
};
