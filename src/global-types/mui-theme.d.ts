import { PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      drawer: {
        width: number;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      drawer?: {
        width?: number;
      };
    };
  }

  interface Palette {
    gray: PaletteColor;
    metalicBlue: PaletteColor;
    spanishGray: PaletteColor;
    independence: PalleteColor;
    deepPurple: PalleteColor;
    indigo: PalleteColor;
    blue: PalleteColor;
    green: PalleteColor;
    lightGreen: PalleteColor;
    lime: PalleteColor;
    deepOrange: PalleteColor;
    brown: PalleteColor;
    yellow: PalleteColor;
    white: PaletteColor;
    lavenderIndigo: PalleteColor;
    telemagenta: PaletteColor;
  }

  interface PaletteOptions {
    gray: PaletteColorOptions;
    metalicBlue: PaletteColorOptions;
    spanishGray: PaletteColorOptions;
    independence: PalleteColorOptions;
    deepPurple: PalleteColorOptions;
    indigo: PalleteColorOptions;
    blue: PalleteColorOptions;
    green: PalleteColorOptions;
    lightGreen: PalleteColorOptions;
    lime: PalleteColorOptions;
    deepOrange: PalleteColorOptions;
    brown: PalleteColorOptions;
    yellow: PalleteColorOptions;
    white: PalleteColorOptions;
    lavenderIndigo: PalleteColorOptions;
    telemagenta: PalleteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
    metalicBlue: true;
    spanishGray: true;
    independence: true;
    white: true;
    lavenderIndigo: true;
    telemagenta: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    gray: true;
    metalicBlue: true;
    spanishGray: true;
    independence: true;
    lavenderIndigo: true;
    telemagenta: true;
  }
}
declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    gray: true;
    metalicBlue: true;
    spanishGray: true;
    independence: true;
    lavenderIndigo: true;
    telemagenta: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    deepPurple: true;
    indigo: true;
    blue: true;
    green: true;
    lightGreen: true;
    lime: true;
    deepOrange: true;
    brown: true;
    yellow: true;
  }
}
