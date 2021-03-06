import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    selector: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <Button className={classes.button} onClick={this.handleOpen}>
          Select Precision
        </Button>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Precision</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.selector}
            onChange={this.handleChange}
            inputProps={{
              name: 'selector',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={95}>Very accurate</MenuItem>
            <MenuItem value={90}>Accurate</MenuItem>
            <MenuItem value={80}>vague</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
