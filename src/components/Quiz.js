import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {fetchData} from '../actions/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LinearProgress from "@material-ui/core/LinearProgress";
import {questions} from './Data'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper
} from "@material-ui/core/";
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 15
  },
  card: {
    minWidth: 250,
    margin: 80
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 28
  },
  pos: {
    marginBottom: 12
  }
});



class Quiz extends React.Component {
  state = {
    currentSelection: "",
    result: "",
    count: 0,
    completed: 0
  };
  componentDidMount(){
    
    this.props.fetchData()
  }
 
  handleChange = e => {
    let value = e.target.value;
    this.setState({
      currentSelection: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.currentSelection === questions[this.state.count].right) {
      this.setState({
        result: true,
        completed: this.state.completed + 20
      });
    } else {
      this.setState({
        result: false
      });
    }
  };
  nextQuestion = () => {
    console.log("Hi");
    this.setState({
      currentSelection: "",
      result: false,
      count: this.state.count + 1
    });
  };

  render() {

    console.log(this.props)
    const index = this.state.count;
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <div>
            <LinearProgress
              variant="determinate"
              value={this.state.completed}
            />
            <br />
          </div>
          <CardContent>
            {/* {questions.map(i => {
              return ( */}
            <div>
              <Paper className={classes.root} elevation={1}>
                <Typography
                  variant="h5"
                  component="h3"
                  className={classes.title}
                  color="primary"
                  gutterBottom
                >
                  {questions[index].question}
                </Typography>
              </Paper>
              <Paper className={classes.root} elevation={1}>
                <form onSubmit={this.handleSubmit}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      onChange={this.handleChange}
                    >
                      {questions[index].answer.map(e => (
                        <FormControlLabel
                          value={e}
                          control={<Radio />}
                          label={e}
                        />
                      ))}
                    </RadioGroup>
                    <Button
                      type="submit"
                      variant="contained"
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  </FormControl>
                </form>
              </Paper>
            </div>
            {/* );
            }) */}
            {this.state.result && (
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h3">
                  Right Answer!
                </Typography>
                <Button
                  onClick={this.nextQuestion}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Next Question
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                </Button>
              </Paper>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch=> bindActionCreators({
  fetchData
},dispatch)

export default connect(null,mapDispatchToProps)(withStyles((styles))(Quiz));
