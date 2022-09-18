import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#F7F7F7', '#212121')(props),
      color: mode('#212121', '#FDFDFF')(props),
    },
    text: {
      marginTop: '0',
    },
  }),
};
