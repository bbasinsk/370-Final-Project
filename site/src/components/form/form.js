import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import neighborhoods from './neighborhoods';
import roomtypes from './room-types';
import bedtypes from './bed-types';
import zipcodes from './zip-codes';
import fetchPrediction from '../../actions/fetch/predict';

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


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prediction: '',
            neighborhood: '',
            roomtype: '',
            bedtype: '',
            zipcode: '',
            accommodates: '',
            bathrooms: '',
            bedrooms: '',
            beds: '',
            guestsincluded: '',
            extrapeople: '',
            minimumnights: '',
            maximumnights: '',
            heat_lamps: false,
            sound_system: false,
            shared_gym: false,
            pack_n_play_travel_crib: false,
            balcony: false,
            waterfront: false,
            fire_pit: false,
            wine_cooler: false,
            shared_hot_tub: false,
            doorman: false,
            printer: false,
            shared_pool: false,
            ski_in_Ski_out: false,
            private_gym: false,
            heated_towel_rack: false,
            mountain_view: false,
            formal_dining_area: false,
            bidet: false,
            standing_valet: false,
            sun_loungers: false
        }
    }

    onSubmit() {
        fetchPrediction(this.state).then(pred => {
            this.setState({'prediction': pred});
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
                        id="outlined-select-neighborhood"
                        select
                        label="Neighborhood"
                        fullWidth
                        className={classes.textField}
                        value={this.state.neighborhood}
                        onChange={this.handleChange('neighborhood')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        // helperText="Please select your neighborhood"
                        margin="normal"
                        variant="outlined"
                    >
                        {neighborhoods.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-roomtype"
                        select
                        label="Room Type"
                        fullWidth
                        className={classes.textField}
                        value={this.state.roomtype}
                        onChange={this.handleChange('roomtype')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        // helperText="Please select type of room"
                        margin="normal"
                        variant="outlined"
                    >
                        {roomtypes.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-bedtype"
                        select
                        label="Bed Type"
                        className={classes.textField}
                        value={this.state.bedtype}
                        fullWidth
                        onChange={this.handleChange('bedtype')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        // helperText="Please select type of bed"
                        margin="normal"
                        variant="outlined"
                    >
                        {bedtypes.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-zipcode"
                        select
                        label="Zip Code"
                        fullWidth
                        className={classes.textField}
                        value={this.state.zipcode}
                        onChange={this.handleChange('zipcode')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        // helperText="Please select type of bed"
                        margin="normal"
                        variant="outlined"
                    >
                        {zipcodes.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-name"
                        label="Accommodates"
                        className={classes.textField}
                        value={this.state.accommodates}
                        onChange={this.handleChange('accommodates')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Bathrooms"
                        className={classes.textField}
                        value={this.state.bathrooms}
                        onChange={this.handleChange('bathrooms')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Bedrooms"
                        className={classes.textField}
                        value={this.state.bedrooms}
                        onChange={this.handleChange('bedrooms')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Beds"
                        className={classes.textField}
                        value={this.state.beds}
                        onChange={this.handleChange('beds')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Guests Included"
                        className={classes.textField}
                        value={this.state.guestsincluded}
                        onChange={this.handleChange('guestsincluded')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Charge for Extra People"
                        className={classes.textField}
                        value={this.state.extrapeople}
                        onChange={this.handleChange('extrapeople')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Minimum Nights"
                        className={classes.textField}
                        value={this.state.minimumnights}
                        onChange={this.handleChange('minimumnights')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Maximum Nights"
                        className={classes.textField}
                        value={this.state.maximumnights}
                        onChange={this.handleChange('maximumnights')}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.onSubmit()}
                >Submit</Button>
                <p>{this.state.prediction}</p>
            </form>
        );
    }
}

export default withStyles(styles)(InputForm)