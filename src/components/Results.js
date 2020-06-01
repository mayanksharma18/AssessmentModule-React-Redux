import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    margin: 'auto',
    marginTop: '20px',
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  },
  header: {
    display: 'none',
  }
};
const useComponentDidMount = onMountHandler => {
  React.useEffect(() => {
    onMountHandler()
  },[]);
}

const useComponentWillUnmount = onUnmountHandler => {
  React.useEffect(() => () => {
    onUnmountHandler()
  }, []);
}

function ImgMediaCard(props) {

  useComponentDidMount(hideHeader);
  function hideHeader() {
    document.getElementsByClassName('header')[0].style.display= 'none'
  }

  useComponentWillUnmount(() => document.getElementsByClassName('header')[0].style.removeProperty('display'))
  
  if (props.score >= 3) {
    document.body.style.background =
      'linear-gradient(to right, #11998e, #38ef7d)';
  } else {
    document.body.style.background =
      'linear-gradient(to right, #ee0979, #ff6a00)';
  }
  let results = props.score;
  let Right = results;
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Score card'
            className={classes.media}
            height='140'
            image='https://www.practicalcredit.com/wp-content/uploads/2018/10/whats-your-credit-score.jpg'
            title='Score card'
          />
          <CardContent>
            {Right >= 3 ? (
              <Typography gutterBottom variant='h5' component='h3'>
                Awesome! You Passed
              </Typography>
            ) : (
              <Typography gutterBottom variant='h5' component='h3'>
                Sorry ! You Failed
              </Typography>
            )}
            <Typography gutterBottom variant='h5' component='h3'>
              You answered {Right} questions correctly out of 5
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={props.retake} size='medium' color='primary'>
            Retake
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
