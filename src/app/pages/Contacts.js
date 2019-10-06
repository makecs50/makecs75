import React from 'react'
import addressImage from '../assets/img/contacts.png'
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#e4405f',
      dark: '#e4405f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#f44336',
      contrastText: '#fff',
    },
  },
});

const secondTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#0088cc',
      dark: '#0088cc',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Contacts() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>

      <section className="contacts">
        <div className="container">
          <div className="content">

            <div className="content-header">
              <h2 className="content-header__title">
                Как связаться с нами?
							</h2>
            </div>
            <div className="text-center">

              <Button
                variant="contained"
                color="primary"
                startIcon={<InstagramIcon />}
                className={classes.button}
              >
                <a target="_blank" href="https://instagram.com/makecsx">Instagram</a>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<YouTubeIcon />}
                className={classes.button}
              >
                <a target="_blank" href="https://www.youtube.com/channel/UC1EwTvZR9urb02af_xt28Kw">YouTube</a>
              </Button>
              <ThemeProvider theme={secondTheme}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<TelegramIcon />}
                  className={classes.button}
                >
                  <a target="_blank" href="https://t.me/makecsx">Telegram</a>
                </Button>

              </ThemeProvider>
            </div>

            <address className="content__text text-center">Адрес: ул. Киевская, 45 A, Грозный</address>

            <div className="content__img">
              <a className="content__img-link"
                href="https://goo.gl/maps/8tT7348kw5HNK8JXA"
                target="_blank">
                Открыть карту
            </a>
              <img src={addressImage} alt="" />
            </div>

          </div >
        </div >
      </section >
    </ThemeProvider>
  )
}
