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
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
      case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
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
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div>

                <div className={classes.root}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                            <h3>{getStepContent(index)}</h3>
                            <div className={classes.actionsContainer}>
                                <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={() => this.handleBack}
                                    className={classes.button}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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
            </div>
        );
    }
}

export default withStyles(styles)(InputForm)