import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(4,26,236,1) 66%)',
        color:'white'
    },
    toolbar: {
      flexWrap: 'wrap',
    },
  }))

const Header = () => {
  const classes= useStyles();
  return (
    <AppBar position='static' color='default' elevation={0} className={classes.header}>
    <Toolbar className={classes.toolbar}>
      <Typography variant='h6' color='inherit' noWrap className={classes.toolbarTitle}>
        LearnFast
      </Typography>
    </Toolbar>
  </AppBar>
  );
};

export default Header;
