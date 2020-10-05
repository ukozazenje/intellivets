/* eslint-disable no-unused-vars */
import { createMuiTheme } from '@material-ui/core/styles';
const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const intelliVetDarkBlue = '#0E1D4A';
const intelliVetLightBlue = '#5386D9';

const theme = createMuiTheme({
  body: {
    backgroundColor: '#f5f5f5',
  },
  tablePaper: {
    boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.15)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius: '6px',
    overflowX: 'scroll',
  },
  palette: {
    common: {
      intelliVetDarkBlue: `${intelliVetDarkBlue}`,
      intelliVetLightBlue: `${intelliVetLightBlue}`,
    },
    primary: {
      main: `${intelliVetDarkBlue}`,
    },
    secondary: {
      main: `${intelliVetLightBlue}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontFamily: 'Open Sans',
      fontWeight: 300,
      textTransform: 'none',
      fontSize: '2rem',
      color: `#444`,
    },
    tab: {
      fontFamily: 'Open Sans',
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1.125rem',
      color: `#000`,
    },
    estimate: {
      color: `${intelliVetLightBlue}`,
      fontFamily: 'Open Sans',
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
});

export default theme;
