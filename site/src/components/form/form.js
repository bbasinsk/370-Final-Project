import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});

function getSteps() {
    return ['Location', 'Property Details', 'Amenities', 'Guest Details', 'Accommodation Details', 'Extras'];
}


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
            "Doorman": false,
            "Printer": false,
            "Shared pool": false,
            "Ski-in/Ski-out": false,
            "Private gym": false,
            "Heated towel rack": false,
            "Mountain view": false,
            "Formal dining area": false,
            "Bidet": false,
            "Standing valet": false,
            "Sun loungers": false,
            activeStep: 0
        }
    }

    handleNext() {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack() {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset() {
        this.setState({
            activeStep: 0,
        });
    };


    handleSubmit() {
        fetchPrediction(this.state).then(pred => {
            this.setState({ 'prediction': pred, formError: false });
        }).catch(err => {
            this.setState({ formError: true});
        });
    }

    handleChange(name) {
        return event => {
            this.setState({
                [name]: event.target.value,
            });
        }
    }

    handleCheck(name) {
        return event => {
            this.setState({
                [name]: event.target.checked,
            });
        }
    }

    getStepContent(step, classes) {
        switch (step) {
            case 0:
                return (
                    <div>
                        <p>Enter details about the location of your property.</p>
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
                            margin="normal"
                            variant="outlined"
                        >
                            {zipcodes.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <p>Enter details about the property.</p>
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
                    </div>
                );
            case 2:
                return (
                    <div>
                        <p>Enter details about the property amenities.</p>
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
                            label="Bathrooms"
                            className={classes.textField}
                            value={this.state.bathrooms}
                            onChange={this.handleChange('bathrooms')}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                );
            case 3:
                return (
                    <div>
                        <p>Enter details about guests.</p>
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
                    </div>
                );
            case 4:
                return (
                    <div>
                        <p>Enter details the accommodation.</p>

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
                );
            case 5:
                return (
                    <div>
                        <p>Enter any extras included.</p>

                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Heat lamps']}
                                    onChange={this.handleCheck('Heat lamps')}
                                    value="Heat lamps"
                                    color="primary"
                                />
                            }
                            label="Heat lamps"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Sound system']}
                                    onChange={this.handleCheck('Sound system')}
                                    value="Sound system"
                                    color="primary"
                                />
                            }
                            label="Sound system"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Shared gym']}
                                    onChange={this.handleCheck('Shared gym')}
                                    value="Shared gym"
                                    color="primary"
                                />
                            }
                            label="Shared gym"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Pack n Play/travel crib']}
                                    onChange={this.handleCheck('Pack n Play/travel crib')}
                                    value="Pack n Play/travel crib"
                                    color="primary"
                                />
                            }
                            label="Pack n Play/travel crib"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Balcony']}
                                    onChange={this.handleCheck('Balcony')}
                                    value="Balcony"
                                    color="primary"
                                />
                            }
                            label="Balcony"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Waterfront']}
                                    onChange={this.handleCheck('Waterfront')}
                                    value="Waterfront"
                                    color="primary"
                                />
                            }
                            label="Waterfront"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Fire pit']}
                                    onChange={this.handleCheck('Fire pit')}
                                    value="Fire pit"
                                    color="primary"
                                />
                            }
                            label="Fire pit"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Wine cooler']}
                                    onChange={this.handleCheck('Wine cooler')}
                                    value="Wine cooler"
                                    color="primary"
                                />
                            }
                            label="Wine cooler"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Shared hot tub']}
                                    onChange={this.handleCheck('Shared hot tub')}
                                    value="Shared hot tub"
                                    color="primary"
                                />
                            }
                            label="Shared hot tub"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Doorman']}
                                    onChange={this.handleCheck('Doorman')}
                                    value="Doorman"
                                    color="primary"
                                />
                            }
                            label="Doorman"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Printer']}
                                    onChange={this.handleCheck('Printer')}
                                    value="Printer"
                                    color="primary"
                                />
                            }
                            label="Printer"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Shared pool']}
                                    onChange={this.handleCheck('Shared pool')}
                                    value="Shared pool"
                                    color="primary"
                                />
                            }
                            label="Shared pool"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Ski-in/Ski-out']}
                                    onChange={this.handleCheck('Ski-in/Ski-out')}
                                    value="Ski-in/Ski-out"
                                    color="primary"
                                />
                            }
                            label="Ski-in/Ski-out"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Private gym']}
                                    onChange={this.handleCheck('Private gym')}
                                    value="Private gym"
                                    color="primary"
                                />
                            }
                            label="Private gym"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Heated towel rack']}
                                    onChange={this.handleCheck('Heated towel rack')}
                                    value="Heated towel rack"
                                    color="primary"
                                />
                            }
                            label="Heated towel rack"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Mountain view']}
                                    onChange={this.handleCheck('Mountain view')}
                                    value="Mountain view"
                                    color="primary"
                                />
                            }
                            label="Mountain view"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Formal dining area']}
                                    onChange={this.handleCheck('Formal dining area')}
                                    value="Formal dining area"
                                    color="primary"
                                />
                            }
                            label="Formal dining area"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Bidet']}
                                    onChange={this.handleCheck('Bidet')}
                                    value="Bidet"
                                    color="primary"
                                />
                            }
                            label="Bidet"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Standing valet']}
                                    onChange={this.handleCheck('Standing valet')}
                                    value="Standing valet"
                                    color="primary"
                                />
                            }
                            label="Standing valet"
                        />
                        <FormControlLabel
                            style={{marginBottom: 0}}
                            control={
                                <Checkbox
                                    checked={this.state['Sun loungers']}
                                    onChange={this.handleCheck('Sun loungers')}
                                    value="Sun loungers"
                                    color="primary"
                                />
                            }
                            label="Sun loungers"
                        />
                    </div>
                );
            default:
                return 'Unknown step';
        }
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div>
                <p>{this.state.formError && "There is error in the form. Please fix it and try again."}</p>
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        {this.getStepContent(index, classes)}
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={() => this.handleBack()}
                                                    className={classes.button}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={activeStep === steps.length - 1 ? () => this.handleSubmit() : () => this.handleNext()}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={this.handleReset} className={classes.button}>
                                Reset
                        </Button>
                        </Paper>
                    )}
                </div>
                <h2 className="text-center">{this.state.prediction && `Predicted Income: $${this.state.prediction.toFixed(2)} per month`}</h2>
            </div>
        );
    }
}

export default withStyles(styles)(InputForm)