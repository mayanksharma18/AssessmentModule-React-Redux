import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import images from '../../utils/imageStore';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundImage:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(4,26,236,1) 66%)',
    color: 'white',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    paddingBottom: '50px',
  },
}));

const languages = [
  {
    title: 'React',
    buttonText: 'Take React Quiz',
    buttonVariant: 'outlined',
    image: `${images.react}`,
  },
  {
    title: 'JavaScript',
    subheader: 'Most popular',
    buttonText: 'Start the quiz',
    buttonVariant: 'contained',
    image: `${images.javascript}`,
  },
  {
    title: 'Node.Js',
    buttonText: 'Take Node Quiz',
    buttonVariant: 'outlined',
    image: `${images.node}`,
  },
];
const paths = [
  {
    title: 'React',
    path: '/quiz/react',
  },
  {
    title: 'JavaScript',
    path: '/quiz/javascript',
  },
  {
    title: 'Node.Js',
    path: '/quiz/nodejs',
  },
];

export default function Main(props) {
  const changeUrl = (lang) => {
    const pathName = paths.filter((i) => i.title === lang.title);
    props.history.push(`${pathName[0].path}`);
  };
  const classes = useStyles();
  return (
    <>
      {/* Main Title */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Want to be the Master!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Take the challenges now
        </Typography>
      </Container>
      {/* End */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {languages.map((lang) => (
            <Grid
              item
              key={lang.title}
              xs={12}
              sm={lang.title === 'JavaScript' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={lang.title}
                  subheader={lang.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={lang.title === 'JavaScript' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardMedia
                  className={classes.media}
                  image={lang.image}
                  title={lang.title}
                />
                <CardActions>
                  <Button
                    fullWidth
                    variant={lang.buttonVariant}
                    color="primary"
                    onClick={() => changeUrl(lang)}
                  >
                    {lang.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
}
