import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    sm: '35em', // changed
    md: '60em',
    lg: '65em', // changed
    xl: '80em',
    '2xl': '96em',
}

const colors = {
    // primary: {
    //     100: "#E5FCF1",
    //     200: "#27EF96",
    //     300: "#10DE82",
    //     400: "#0EBE6F",
    //     500: "#0CA25F",
    //     600: "#0A864F",
    //     700: "#086F42",
    //     800: "#075C37",
    //     900: "#064C2E",
    // }
};

const fonts = {
    body: "montserrat",
    heading: "montserrat",
};

const theme = extendTheme({
    breakpoints,
    colors,
    fonts,
});

export default theme;