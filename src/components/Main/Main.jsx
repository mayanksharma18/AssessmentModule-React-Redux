import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardActions
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import images from "../../utils/imageStore";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundImage:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(4,26,236,1) 66%)",
    color: "white"
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700]
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    paddingBottom: "50px"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

const languages = [
  {
    title: "React",
    buttonText: "Take React Quiz",
    buttonVariant: "outlined",
    image: `${images.react}`
  },
  {
    title: "JavaScript",
    subheader: "Most popular",
    buttonText: "Start the quiz",
    buttonVariant: "contained",
    image: `${images.javascript}`
  },
  {
    title: "Node.Js",
    buttonText: "Take Node Quiz",
    buttonVariant: "outlined",
    image: `${images.node}`
  }
];
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"]
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one"
    ]
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource"
    ]
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"]
  }
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Hero unit */}
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
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {languages.map(lang => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={lang.title}
              xs={12}
              sm={lang.title === "JavaScript" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={lang.title}
                  subheader={lang.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={lang.title === "JavaScript" ? <StarIcon /> : null}
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
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}></Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
