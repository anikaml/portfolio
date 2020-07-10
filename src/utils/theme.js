import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    // spacing: 4,
    palette: {  
      type: "light",  
      primary: {
        light: '#FF9F79', 
        main: '#ff6060',
        dark: '#4bc0c0', //#ff607b
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#b9e4ea',
        main: '#000', 
        dark: '#ff6060', //#3D444F
        contrastText: '#000000',
      },
      error: {
        main: '#ff0033',
      },
      background: {
        //paper: '#3D444F',
        default: '#FFF',
      }
    },
    mixins: {
      toolbar: { 
        minHeight: 64, 
        '@media (min-width:0px) and (orientation: landscape)': { 
          minHeight: 64, 
        }, 
        '@media (min-width:600px)': { 
          minHeight: 64, 
        }, 
      }, 
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
              html: {
                height: "100%",
                margin: 0,
                padding: 0,
              },
              body: {
                //backgroundColor: '#f7faff',
                height: "100%",
              },
            }
        },
        MuiInput: {
          underline: {
            "&&&&:hover:before": {
              borderBottom: "none",
            }
          }
        }
      },
  });

  theme.typography.body1 = {
    fontSize: '1rem',
    '@media (max-width:360px)': {
      fontSize: '0.85rem',
    }
  };

  theme.typography.body2 = {
    fontSize: '0.875rem',
    '@media (max-width:350px)': {
      fontSize: '0.7rem',
    }
  };

  theme.typography.h6 = {
    fontSize: '1.25rem',
    fontWeight: '500',
    '@media (max-width:360px)': {
      fontSize: '0.9rem',
      fontWeight: '500',
    }
  };

  theme.typography.caption = {
    fontSize: '0.75rem',
    '@media (max-width:600px)': {
      fontSize: '0.8rem',
    }
  };

export default theme;