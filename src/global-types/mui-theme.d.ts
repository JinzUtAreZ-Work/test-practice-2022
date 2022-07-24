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
    independence: PaletteColor;
    sonicSilver: PaletteColor;
    halloweenOrange: PaletteColor;
    marigold: PaletteColor;
    middleYellow: PaletteColor;
    deepPurple: PaletteColor;
    indigo: PaletteColor;
    blue: PaletteColor;
    green: PaletteColor;
    lightGreen: PaletteColor;
    lime: PaletteColor;
    deepOrange: PaletteColor;
    brown: PaletteColor;
    yellow: PaletteColor;
    white: PaletteColor;
    lavenderIndigo: PaletteColor;
    telemagenta: PaletteColor;
  }

  interface PaletteOptions {
    gray: PaletteColorOptions;
    metalicBlue: PaletteColorOptions;
    spanishGray: PaletteColorOptions;
    independence: PaletteColorOptions;
    sonicSilver: PaletteColorOptions;
    halloweenOrange: PaletteColorOptions;
    marigold: PaletteColorOptions;
    middleYellow: PaletteColorOptions;
    deepPurple: PaletteColorOptions;
    indigo: PaletteColorOptions;
    blue: PaletteColorOptions;
    green: PaletteColorOptions;
    lightGreen: PaletteColorOptions;
    lime: PaletteColorOptions;
    deepOrange: PaletteColorOptions;
    brown: PaletteColorOptions;
    yellow: PaletteColorOptions;
    white: PaletteColorOptions;
    lavenderIndigo: PaletteColorOptions;
    telemagenta: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true;
    metalicBlue: true;
    spanishGray: true;
    independence: true;
    sonicSilver: true;
    halloweenOrange: true;
    marigold: true;
    middleYellow: true;
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
    sonicSilver: true;
    halloweenOrange: true;
    marigold: true;
    middleYellow: true;
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
    sonicSilver: true;
    halloweenOrange: true;
    marigold: true;
    middleYellow: true;
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
    independence: true;
    sonicSilver: true;
    halloweenOrange: true;
    marigold: true;
    middleYellow: true;
  }
}
