import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const neighborhoods = [
    {
        value: 'Ballard',
        label: 'Ballard',
    },
    {
        value: 'Beacon Hill',
        label: 'Beacon Hill',
    },
    {
        value: 'Capital Hill',
        label: 'Captial Hill',
    },
    {
        value: 'Cascade',
        label: 'Cascade',
    },
    {
        value: 'Central Area',
        label: 'BallCentral Areaard',
    },
    {
        value: 'Delridge',
        label: 'Delridge',
    },
    {
        value: 'Downtown',
        label: 'Downtown',
    },
    {
        value: 'Interbay',
        label: 'Interbay',
    },
    {
        value: 'Lake City',
        label: 'Lake City',
    },
    {
        value: 'Magnolia',
        label: 'Magnolia',
    },
    {
        value: 'Northgate',
        label: 'Northgate',
    },
    {
        value: 'Queen Anne',
        label: 'Queen Anne',
    },
    {
        value: 'Rainier Valley',
        label: 'Rainier Valley',
    },
    {
        value: 'Seward Park',
        label: 'Seward Park',
    },
    {
        value: 'University District',
        label: 'University District',
    },
    {
        value: 'West Seattle',
        label: 'West Seattle',
    },
    {
        value: 'Other neighborhoods',
        label: 'Other',
    }
];

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            neighborhood: ''
        }
    }

    onSubmit() {
        Object.values(this.state).map(value => {
            console.log('submitted', value);
        });
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
                <div>
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
                        id="outlined-select-neighborhood"
                        select
                        label="Select"
                        className={classes.textField}
                        value={this.state.neighborhood}
                        onChange={this.handleChange('neighborhood')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your neighborhood"
                        margin="normal"
                        variant="outlined"
                    >
                        {neighborhoods.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.onSubmit()}
                >Submit</Button>
            </form>
        );
    }
}

export default withStyles(styles)(InputForm)