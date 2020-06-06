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
import images from '../utils/imageStore';

const styles = {
  card: {
    margin: 'auto',
    marginTop: '200px',
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  header: {
    display: 'none',
  },
};
const useComponentDidMount = (onMountHandler) => {
  React.useEffect(() => {
    onMountHandler();
  });
};

const useComponentWillUnmount = (onUnmountHandler) => {
  React.useEffect(() => () => {
    onUnmountHandler();
  });
};

function Results(props) {
  function hideHeader() {
    document.getElementsByTagName('header')[0].style.display = 'none';
  }
  useComponentDidMount(hideHeader);

  useComponentWillUnmount(() =>
    document.getElementsByTagName('header')[0].style.removeProperty('display')
  );

  if (props.score >= 3) {
    document.body.style.background =
      'linear-gradient(to right, #11998e, #38ef7d)';
  } else {
    document.body.style.background =
      'linear-gradient(to right, #ee0979, #ff6a00)';
  }
  const { score } = props;
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Score card"
            className={classes.media}
            height="140"
            image={images.score}
            title="Score card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {score >= 3
                ? 'Awesome! You Passed'
                : 'Bad Luck! Please Try Again'}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              You answered {score} questions correctly out of 5
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={props.retake} size="medium" color="primary">
            Retake
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
