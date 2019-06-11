import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { fetchData } from "../actions/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import { questions } from "./Data";
import Modal from "./Modal";
import ImgMediaCard from "./Results";
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
    result: null,
    count: 0,
    completed: 0,
    right: 5
  };
  componentDidMount() {
    this.props.fetchData();
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
        result: false,
        right: this.state.right - 1,
        completed: this.state.completed + 20
      });
    }
  };
  nextQuestion = () => {
    console.log("Hi");
    this.setState({
      currentSelection: "",
      result: null,
      count: this.state.count + 1
    });
  };
 
  retake=()=>{
    this.setState({
    count:0,
    completed: 0,
    });

  }
  render() {
    document.body.style.background =
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(4,26,236,1) 66%)";

    console.log(this.props);
    const index = this.state.count;
    const { classes } = this.props;
    return (
      <div>
        {this.state.count == 5 ? (
          <ImgMediaCard retake={this.retake}score={this.state.right} />
        ) : (
          <Card className={classes.card}>
            <div>
              <LinearProgress
                variant="determinate"
                value={this.state.completed}
              />
              <br />
            </div>
            <CardContent>
              <div>
                <Paper className={classes.root} elevation={1}>
                  <Typography
                    style={{ fontFamily: "Montserrat", fontSize: "30px" }}
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
                      <RadioGroup onChange={this.handleChange}>
                        {questions[index].answer.map(e => (
                          <FormControlLabel
                            value={e}
                            control={<Radio />}
                            label={e}
                          />
                        ))}
                      </RadioGroup>
                      <Button
                        style={{ fontFamily: "Montserrat" }}
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
              {this.state.result == null ? (
                false
              ) : this.state.result ? (
                <Modal
                  desc={questions[index].description}
                  data={this.state.result}
                  next={this.nextQuestion}
                />
              ) : (
                <Modal
                  desc={questions[index].description}
                  data={this.state.result}
                  next={this.nextQuestion}
                />
              )}
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchData
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Quiz));
