import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  Card,
  CardContent,
  Button,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';
import ReactCountdownClock from 'react-countdown-clock';
import { fetchData } from '../../actions/action';
import Modal from './Modal';
import Results from '../Results';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    minWidth: 250,
    margin: 80,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 28,
  },
  pos: {
    marginBottom: 12,
  },
});

class Quiz extends React.Component {
  state = {
    currentSelection: '',
    result: null,
    count: 0,
    completed: 0,
    right: 5,
    noOptionSelected: false,
  };

  componentDidMount() {
    // this.props.fetchData();
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      currentSelection: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { currentSelection, count, completed, right } = this.state;
    if (!currentSelection) {
      this.setState({ noOptionSelected: true });
      return;
    }
    if (currentSelection === this.props.questions[count].right) {
      this.setState({
        result: true,
        completed: completed + 20,
        noOptionSelected: false,
      });
    } else {
      this.setState({
        result: false,
        right: right - 1,
        completed: completed + 20,
        noOptionSelected: false,
      });
    }
  };

  nextQuestion = () => {
    this.setState((prevState) => ({
      currentSelection: '',
      result: null,
      count: prevState.count + 1,
    }));
  };

  retake = () => {
    this.setState({
      count: 0,
      right: 5,
      completed: 0,
    });
  };

  renderModal = () => {
    const { count, result } = this.state;
    const { questions } = this.props;
    if (result === null) {
      return null;
    }
    return result ? (
      <Modal
        desc={questions[count].description}
        data={result}
        next={this.nextQuestion}
      />
    ) : (
      <Modal
        desc={questions[count].description}
        data={result}
        next={this.nextQuestion}
      />
    );
  };

  handleOnCompelte = () => {
    if (this.state.right === 5) {
      this.setState({
        right: 0,
      });
    }
    this.setState({
      count: 5,
    });
  };

  render() {
    document.body.style.background =
      'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)';
    const { count, right, completed, noOptionSelected } = this.state;
    const { classes, questions } = this.props;
    return (
      <div>
        {count === 5 ? (
          <Results retake={this.retake} score={right} />
        ) : (
          <Card className={classes.card}>
            <div>
              <LinearProgress variant="determinate" value={completed} />
              <br />
            </div>
            <CardContent>
              <div>
                <Paper className={classes.root} elevation={1}>
                  <Typography
                    style={{ fontFamily: 'Montserrat', fontSize: '30px' }}
                    variant="h5"
                    component="h3"
                    className={classes.title}
                    color="primary"
                    gutterBottom
                  >
                    {questions[count].question}
                  </Typography>
                </Paper>
                <Paper className={classes.root} elevation={1}>
                  <form onSubmit={this.handleSubmit}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <RadioGroup onChange={this.handleChange}>
                        {questions[count].answer.map((e) => (
                          <FormControlLabel
                            value={e}
                            control={<Radio />}
                            label={e}
                          />
                        ))}
                      </RadioGroup>
                      <Button
                        style={{ fontFamily: 'Montserrat' }}
                        type="submit"
                        variant="contained"
                        className={classes.button}
                      >
                        Submit
                      </Button>
                      {noOptionSelected && (
                        <div style={{ marginTop: '12px' }}>
                          <Alert severity="error">No option selected.</Alert>
                        </div>
                      )}
                    </FormControl>
                  </form>
                  <div style={{ marginRight: '100px', marginTop: '25px' }}>
                    <ReactCountdownClock
                      seconds={60}
                      color="#32CCBC"
                      alpha={0.9}
                      size={100}
                      onComplete={() => this.handleOnCompelte()}
                    />
                  </div>
                </Paper>
              </div>
              {this.renderModal()}
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchData,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(withStyles(styles)(Quiz));
