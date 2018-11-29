import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            currency: ''
        }
    }

    handleChange(name) {
        return event => {
            this.setState({
                [name]: event.target.value,
            });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <form>
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    className={classes.textField}
                    value={this.state.currency}
                    onChange={this.handleChange('currency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </form>
        );
    }
}

export default withStyles(styles)(InputForm)