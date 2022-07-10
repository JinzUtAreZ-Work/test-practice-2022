import type { Shadows } from '@mui/material/styles/shadows';

import { createTheme } from '@mui/material/styles';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { accordionClasses } from '@mui/material/Accordion';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';

const theme = createTheme({
  spacing: (factor: number) => `${0.5 * factor}rem`,
  shadows: Array(25).fill('none') as Shadows,
  custom: {
    drawer: {
      width: 270,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
  palette: {
    primary: {
      main: '#EF841F',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2D9FC3',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F06363',
      light: '#F6354A',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#2FCC71',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F5F5 ',
    },
    gray: {
      main: '#BCBCBC',
    },
    metalicBlue: {
      main: '#3D4F76',
    },
    spanishGray: {
      main: '#9D9D9D',
    },
    independence: {
      main: '#42526E',
    },
    lavenderIndigo: {
      main: '#9D4DE1',
    },
    telemagenta: {
      main: '#CC2E75',
      contrastText: '#FFFFFF',
    },
    deepPurple: {
      main: '#673ab7',
      contrastText: '#FFFFFF',
    },
    indigo: {
      main: '#3f51b5',
      contrastText: '#FFFFFF',
    },
    blue: {
      main: '#2196f3',
      contrastText: '#FFFFFF',
    },
    green: {
      main: '#43a047',
      contrastText: '#FFFFFF',
    },
    lightGreen: {
      main: '#33691e',
      contrastText: '#FFFFFF',
    },
    lime: {
      main: '#827717',
      contrastText: '#FFFFFF',
    },
    deepOrange: {
      main: '#ff5722',
      contrastText: '#FFFFFF',
    },
    brown: {
      main: '#795548',
      contrastText: '#FFFFFF',
    },
    yellow: {
      main: '#ffeb3b',
      contrastText: '#0d47a1',
    },
    white: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontWeightMedium: 600,
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
        },
      },
      defaultProps: {
        color: 'inherit',
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          borderRight: 0,
          boxShadow: '0px 3px 6px #00000029',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: 0,
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
          '&:before': {
            display: 'none',
          },
          [`&.${accordionClasses.expanded}`]: {
            margin: 0,
            borderRadius: 10,
          },
          [`& .${accordionSummaryClasses.expandIconWrapper} > svg`]: {
            fontSize: '2rem',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: '#BCBCBC',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          flexDirection: 'row-reverse',
          padding: '0 !important',
          gap: 10,
        },
        selectLabel: {
          display: 'none',
        },
        select: {
          display: 'none',
        },
        input: {
          display: 'none',
        },
        spacer: {
          display: 'none',
        },
        displayedRows: {
          fontSize: '1rem',
          lineHeight: 1,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          flexWrap: 'nowrap',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          margin: theme.spacing(1, 0),
          '&:hover': {
            background: theme.palette.warning.main,
            color: theme.palette.common.white,
            [`& .${listItemIconClasses.root}`]: {
              color: 'inherit',
            },
            [`& .${listItemTextClasses.primary}`]: {
              color: 'inherit',
            },
            '&:not(.Mui-selected) *': {
              color: theme.palette.common.white,
            },
          },
          '&.Mui-selected': {
            backgroundColor: 'inherit',
            color: theme.palette.warning.main,
            [`& .${listItemIconClasses.root}`]: {
              color: 'inherit',
            },
            [`& .${listItemTextClasses.primary}`]: {
              color: 'inherit',
            },
          },
          '&:last-of-type': {
            marginBottom: 0,
          },
        },
      },
      defaultProps: {
        dense: true,
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.palette.grey[600],
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          minWidth: 45,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: 2,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
          borderRadius: 10,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingBottom: 0,
        },
        title: {
          fontWeight: theme.typography.fontWeightMedium,
        },
        action: {
          margin: 0,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: theme.spacing(1.5),
        },
        shrink: {
          transform: 'translate(0, 1.5px) scale(1)',
        },
      },
      defaultProps: {
        shrink: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            fontStyle: 'italic',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        margin: 'none',
        fullWidth: true,
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50rem',
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
          fontWeight: theme.typography.fontWeightBold,
          textTransform: 'none',
        },
        textPrimary: {
          backgroundColor: '#ffffff',
        },
        contained: {
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'warning',
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'warning',
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorSecondary: {
          backgroundColor: '#676766',
        },
      },
    },
  },
});
