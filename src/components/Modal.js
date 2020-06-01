import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  root: {
    background: 'linear-gradient(to right, #333333, #dd1818)',
    margin: 0,
    padding: '20px'
  },
  root1: {
    background: 'linear-gradient(to right, #11998e, #38ef7d)',
    margin: 0,
    padding: '20px'
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, bool } = props;
  if (bool) {
    return (
      <MuiDialogTitle disableTypography className={classes.root1}>
        <Typography variant='h6' style={{ color: 'white', fontSize: '1.7rem' }}>
          {children}
        </Typography>
      </MuiDialogTitle>
    );
  } else {
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant='h6' style={{ color: 'white', fontSize: '1.7rem' }}>
          {children}
        </Typography>
      </MuiDialogTitle>
    );
  }
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: '20px'
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    alignSelf: 'center',
    margin: 0,
    padding: '20px'
  }
}))(MuiDialogActions);
class Modal extends React.Component {
  state = {
    open: this.props.data
  };
  render() {
    return (
      <div>
        {this.state.open ? (
          <Dialog open={this.state.open}>
            <DialogTitle bool={this.state.open}>Right Answer</DialogTitle>
            <CssBaseline />
            <DialogContent dividers>
              <Typography variant='h5' gutterBottom>
                Explanation
              </Typography>
              <Typography gutterBottom>{this.props.desc}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.next} color='primary'>
                Next Question
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          <Dialog open={!this.state.open}>
            <DialogTitle
              style={{
                background: 'linear-gradient(to right, #333333, #dd1818)'
              }}
            >
              Wrong Answer
            </DialogTitle>
            <CssBaseline />
            <DialogContent dividers>
              <Typography variant='h5' gutterBottom>
                Explanation
              </Typography>
              <Typography gutterBottom>{this.props.desc}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.next} color='primary'>
                Next Question
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    );
  }
}

export default Modal;
