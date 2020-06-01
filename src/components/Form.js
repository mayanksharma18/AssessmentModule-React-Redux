import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/action';
import { connect } from 'react-redux';
import axios from 'axios';
import Allquestions from './Allquestions';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/Input';

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  fab: {
    margin: theme.spacing.unit
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});
class Form extends React.Component {
  state = {
    category: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correct: '',
    addToggle: false
  };

  componentDidMount() {
    this.props.fetchData();
  }

  showForm = () =>
    this.setState({
      addToggle: !this.state.addToggle
    });

  handleChange = e => {
    let key = e.target.id;
    this.setState({
      [key]: e.target.value
    });
  };

  handleReset = () => {
    this.setState({
      category: '',
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correct: '',
      addToggle: false
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = {
      category: this.state.category,
      question: this.state.question,
      answers: [
        this.state.option1,
        this.state.option2,
        this.state.option3,
        this.state.option4
      ],
      correct: this.state.correct
    };
    
    await axios
      .post('http://localhost:3001/create', { data })
      .then(function(response) {
        this.props.history.push('/');
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.handleReset();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <main className={classes.main}>
          <Paper className={classes.paper}>
            <Button
              onClick={this.showForm}
              variant='contained'
              color='secondary'
            >
              <Typography component='h1' variant='h5'>
                Add MCQ
              </Typography>
            </Button>
            {this.state.addToggle && (
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <Card className={classes.card}>
                  <CardContent>
                    <Paper className={classes.root} elevation={1}>
                      <Input
                        id='question'
                        onChange={this.handleChange}
                        fullWidth
                        placeholder='Placeholder'
                        className={classes.input}
                        inputProps={{
                          'aria-label': 'Description'
                        }}
                      />
                    </Paper>

                    <Grid container spacing={24}>
                      <Grid item xs={6}>
                        <TextField
                          onChange={this.handleChange}
                          multiline
                          id='option1'
                          label='Option1'
                          className={classes.textField}
                          type='text'
                          autoComplete='option1'
                          margin='normal'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          onChange={this.handleChange}
                          multiline
                          id='option2'
                          label='Option2'
                          className={classes.textField}
                          type='text'
                          autoComplete='option2'
                          margin='normal'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          onChange={this.handleChange}
                          multiline
                          id='option3'
                          label='Option3'
                          className={classes.textField}
                          type='text'
                          autoComplete='option3'
                          margin='normal'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          onChange={this.handleChange}
                          multiline
                          id='option4'
                          label='Option4'
                          className={classes.textField}
                          type='text'
                          autoComplete='option4'
                          margin='normal'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          onChange={this.handleChange}
                          multiline
                          id='category'
                          label='Category'
                          className={classes.textField}
                          type='text'
                          autoComplete='category'
                          margin='normal'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          onChange={this.handleChange}
                          multiline
                          id='correct'
                          label='Correct'
                          className={classes.textField}
                          type='text'
                          autoComplete='correct'
                          margin='normal'
                          variant='outlined'
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type='submit'
                          variant='contained'
                          color='primary'
                          className={classes.button}
                        >
                          Save
                          <Icon className={classes.rightIcon}>save</Icon>
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </form>
            )}
          </Paper>
        </main>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    questions: state.reducer.questions
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(withStyles(styles)(Form));
