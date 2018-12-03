import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import neighborhoods from './neighborhoods';
import roomtypes from './room-types';
import bedtypes from './bed-types';
import zipcodes from './zip-codes';
import propertytypes from './property-types'
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
            property_type: '',
            room_type: '',
            bed_type: '',
            zipcode: '',
            accommodates: '',
            bathrooms: '',
            bedrooms: '',
            beds: '',
            guests_included: '',
            extra_people: '',
            minimum_nights: '',
            maximum_nights: '',
            "Heat lamps": false,
            "Sound system": false,
            "Shared gym": false,
            "Pack n Play/travel crib": false,
            "Balcony": false,
            "Waterfront": false,
            "Fire pit": false,
            "Wine cooler": false,
            "Shared hot tub": false,
            "Doorman":  false,
            "Printer": false,
            "Shared pool": false,
            "Ski-in/Ski-out": false,
            "Private gym": false,
            "Heated towel rack": false,
            "Mountain view": false,
            "Formal dining area": false,
            "Bidet": false,
            "Standing valet": false,
            "Sun loungers": false
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
                        id="outlined-select-property_type"
                        select
                        label="Property Type"
                        fullWidth
                        className={classes.textField}
                        value={this.state.property_type}
                        onChange={this.handleChange('property_type')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        // helperText="Please select type of room"
                        margin="normal"
                        variant="outlined"
                    >
                        {propertytypes.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-room_type"
                        select
                        label="Room Type"
                        fullWidth
                        className={classes.textField}
                        value={this.state.room_type}
                        onChange={this.handleChange('room_type')}
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
                        id="outlined-select-bed_type"
                        select
                        label="Bed Type"
                        className={classes.textField}
                        value={this.state.bed_type}
                        fullWidth
                        onChange={this.handleChange('bed_type')}
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
                        value={this.state.guests_included}
                        onChange={this.handleChange('guests_included')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Charge for Extra People"
                        className={classes.textField}
                        value={this.state.extra_people}
                        onChange={this.handleChange('extra_people')}
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    <TextField
                        id="outlined-name"
                        label="Minimum Nights"
                        className={classes.textField}
                        value={this.state.minimum_nights}
                        onChange={this.handleChange('minimum_nights')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Maximum Nights"
                        className={classes.textField}
                        value={this.state.maximum_nights}
                        onChange={this.handleChange('maximum_nights')}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => this.onSubmit()}
                >Submit</Button>
                <h2 className="text-center">{this.state.prediction && `$${this.state.prediction}`}</h2>
            </form>
        );
    }
}

export default withStyles(styles)(InputForm)