import { createMuiTheme } from '@material-ui/core/styles'
const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const intelliVetDarkBlue = "#0E1D4A"
const intelliVetLightBlue = "#5386D9"

const theme = createMuiTheme({
  palette: {
    common: {
      intelliVetDarkBlue: `${intelliVetDarkBlue}`,
      intelliVetLightBlue: `${intelliVetLightBlue}`
    },
    primary: {
      main: `${intelliVetDarkBlue}`
    },
    secondary: {
      main: `${intelliVetLightBlue}`
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    },
    tab: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '1.125rem',
      color: `#000`
    },
    estimate: {
      color: `${intelliVetLightBlue}`,
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 500,
    }
  }
});

export default theme
