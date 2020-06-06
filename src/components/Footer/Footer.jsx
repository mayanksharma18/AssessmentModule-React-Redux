import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          <span>
            Made with
            <FavoriteIcon
              style={{ color: blue[500], marginBottom: '-6px' }}
            />{' '}
            by{' '}
            <a
              style={{ textDecoration: 'none' }}
              href="https://www.linkedin.com/in/mayank-vikesh-kumar-sharma-73978270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mayank Vikesh Kumar Sharma
            </a>
          </span>
        </Grid>
        <Box mt={5} />
      </Container>
      {/* End footer */}
      );
    </div>
  );
};

export default Footer;
