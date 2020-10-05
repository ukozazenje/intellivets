import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { TextField, RadioGroup } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Autocomplete,
  ToggleButtonGroup,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import { DatePicker } from 'formik-material-ui-pickers';
import MuiTextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { breeds } from '../../data/breeds';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  textField: {
    margin: theme.spacing(2),
    // minWidth: '280px',
  },
  ageUnitField: {
    // margin: theme.spacing(2),
    minWidth: '120px',
    maxWidth: '30%',
  },
  paperField: {
    marginTop: theme.spacing(4),
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
    padding: theme.spacing(4),
  },
  boxField: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  labelTypography: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    textTransform: 'none',
    fontSize: '1.125rem',
    color: `rgba(0, 0, 0, 0.87)`,
    // width: `50%`,
    // margin: theme.spacing(2),
  },
  ageFieldWrapper: {
    width: '40%',
    display: 'flex',
  },
  radioGroupWrapper: {
    flexDirection: 'row',
  },
  sectionHeading: {
    marginBottom: theme.spacing(4),
  },
}));

const validate = (values, props /* only available when using withFormik */) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
const Pet = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Formik
        initialValues={{
          name: '',
          breed: '',
          dateOfBirth: null,
          dog_age_unit: 'weeks',
          dogs_age: '',
          gender: '',
          acquire_dog: '',
          age_acquired: '',
          acquired_age_unit: 'weeks',
          neutered: 'no',
          neutered_age: '',
          neutered_age_unit: 'weeks',
          neutered_reason: '',
          health_problems: 'no',
          health_problem_info: '',
          concerned: '',
          roles: '',
          first_owned: '',
          number_of_owned: '',
          dog_as_child: '',
          other_dogs: '',
          other_dogs_age: '',
          invited_by_vet: '',
        }}
        // validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            console.log(JSON.stringify(values, null, 2));
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({
          submitForm,
          isSubmitting,
          touched,
          errors,
          values,
          setFieldValue,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <Paper className={classes.paperField} elevation={2}>
              <Typography
                className={classes.sectionHeading}
                variant="h4"
                gutterBottom
                align="center"
              >
                General information
              </Typography>

              <Grid container spacing={2}>
                {/* First dog general column */}
                <Grid item container xs={12} md={6} spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Field
                      // className={classes.textField}
                      fullWidth
                      component={TextField}
                      variant="outlined"
                      name="name"
                      label="Name"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Field
                      // className={classes.textField}
                      fullWidth
                      name="breed"
                      component={Autocomplete}
                      options={breeds}
                      getOptionLabel={(option) => option}
                      renderInput={(params) => (
                        <MuiTextField
                          {...params}
                          error={touched['breed'] && !!errors['breed']}
                          helperText={touched['breed'] && errors['breed']}
                          label="Select Breed"
                          variant="outlined"
                          margin="normal"
                        />
                      )}
                    />
                  </Grid>
                </Grid>

                {/* second dog general column */}
                <Grid item container xs={12} md={6} spacing={2}>
                  <Grid item container xs={12} md={7}>
                    <Field
                      // className={classes.textField}
                      component={TextField}
                      variant="outlined"
                      name="dogs_age"
                      label="Dogs Age"
                      margin="normal"
                      fullWidth
                      // helperText="NOTE: Please use whole numbers only."
                    />
                  </Grid>
                  <Grid item container xs={12} md={5}>
                    <Field
                      // className={classes.ageUnitField}
                      component={TextField}
                      fullWidth
                      type="text"
                      name="dog_age_unit"
                      label="Unit"
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="weeks" value="weeks">
                        weeks
                      </MenuItem>
                      <MenuItem key="months" value="months">
                        months
                      </MenuItem>
                      <MenuItem key="years" value="years">
                        years
                      </MenuItem>
                    </Field>
                  </Grid>
                  <Grid item container xs={12} md={7}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Field
                        // className={classes.textField}
                        fullWidth
                        margin="normal"
                        disableToolbar
                        component={DatePicker}
                        name="dateOfBirth"
                        label="Date of Birth"
                        variant="inline"
                        inputVariant="outlined"
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item container xs={12} md={5}>
                    <Field
                      fullWidth
                      component={TextField}
                      type="text"
                      name="gender"
                      label="Select gender"
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="m" value="male">
                        male
                      </MenuItem>
                      <MenuItem key="f" value="female">
                        female
                      </MenuItem>
                    </Field>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            {/* Dog questions section */}

            <Paper className={classes.paperField} elevation={2}>
              <Typography
                className={classes.sectionHeading}
                variant="h4"
                gutterBottom
                align="center"
              >
                Health information
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  {/* Acquire dog Container */}
                  <Grid spacing={2} alignItems="center" item container xs={12}>
                    <Grid item xs={12} sm={8}>
                      <Typography
                        className={classes.labelTypography}
                        variant="body2"
                        gutterBottom
                      >
                        Where did you acquire this dog?{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Field
                        fullWidth
                        component={TextField}
                        type="text"
                        name="acquire_dog"
                        label="Select an Option"
                        select
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      >
                        <MenuItem
                          key="breed him/her myself"
                          value="breed him/her myself"
                        >
                          breed him/her myself
                        </MenuItem>
                        <MenuItem key="from a breeder" value=" from a breeder">
                          from a breeder
                        </MenuItem>
                        <MenuItem
                          key="from a shelter or rescue group"
                          value="from a shelter or rescue group"
                        >
                          from a shelter or rescue group
                        </MenuItem>
                        <MenuItem
                          key="from a neighbour, friend, or relative"
                          value="from a neighbour, friend, or relative"
                        >
                          from a neighbour, friend, or relative
                        </MenuItem>
                        <MenuItem
                          key="adopted him/her as stray"
                          value="adopted him/her as stray"
                        >
                          adopted him/her as stray
                        </MenuItem>
                      </Field>
                    </Grid>
                  </Grid>
                  {/* End of Acquire dog Container */}
                  <Grid alignItems="center" item container xs={12}>
                    <Grid item xs={12} sm={8}>
                      <Typography
                        className={classes.labelTypography}
                        variant="body2"
                        gutterBottom
                      >
                        At what age did you acquire this dog?
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                      xs={12}
                      sm={4}
                    >
                      <Grid item xs={12} sm={7}>
                        <Field
                          // className={classes.textField}
                          component={TextField}
                          variant="outlined"
                          name="age_acquired"
                          label="Dogs Age"
                          margin="normal"
                          fullWidth
                          // helperText="NOTE: Please use whole numbers only."
                        />
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <Field
                          // className={classes.ageUnitField}
                          component={TextField}
                          fullWidth
                          type="text"
                          name="acquired_age_unit"
                          label="Unit"
                          select
                          variant="outlined"
                          // helperText="Please select date unit"
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        >
                          <MenuItem key="weeks" value="weeks">
                            weeks
                          </MenuItem>
                          <MenuItem key="months" value="months">
                            months
                          </MenuItem>
                          <MenuItem key="years" value="years">
                            years
                          </MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid alignItems="center" item container xs={12}>
                    {/* <Grid item xs={12} sm={6}> */}
                    <Grid item xs={9}>
                      <Typography
                        className={classes.labelTypography}
                        variant="body2"
                        gutterBottom
                      >
                        Has this dog been spayed or neutered?
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Field
                        className={classes.radioGroupWrapper}
                        component={RadioGroup}
                        name="neutered"
                      >
                        <FormControlLabel
                          labelPlacement="start"
                          value="yes"
                          control={<Radio disabled={isSubmitting} />}
                          label="Yes"
                          disabled={isSubmitting}
                        />
                        <FormControlLabel
                          labelPlacement="start"
                          value="no"
                          control={<Radio disabled={isSubmitting} />}
                          label="No"
                          disabled={isSubmitting}
                        />
                      </Field>
                    </Grid>

                    {/* </Grid> */}
                  </Grid>

                  <Grid
                    style={
                      values.neutered === 'no'
                        ? { display: 'none' }
                        : { display: 'flex' }
                    }
                    alignItems="center"
                    item
                    container
                    xs={12}
                  >
                    <Grid item xs={12} sm={8}>
                      <Typography
                        className={classes.labelTypography}
                        variant="body2"
                        gutterBottom
                      >
                        At what age was this dog neutered?
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="flex-start"
                      alignItems="center"
                      spacing={2}
                      xs={12}
                      sm={4}
                    >
                      <Grid item xs={12} sm={7}>
                        <Field
                          // className={classes.textField}
                          component={TextField}
                          variant="outlined"
                          name="neutered_age"
                          label="Dogs Age"
                          margin="normal"
                          fullWidth
                          // helperText="NOTE: Please use whole numbers only."
                        />
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <Field
                          // className={classes.ageUnitField}
                          component={TextField}
                          fullWidth
                          type="text"
                          name="neutered_age_unit"
                          label="Unit"
                          select
                          variant="outlined"
                          // helperText="Please select date unit"
                          margin="normal"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        >
                          <MenuItem key="weeks" value="weeks">
                            weeks
                          </MenuItem>
                          <MenuItem key="months" value="months">
                            months
                          </MenuItem>
                          <MenuItem key="years" value="years">
                            years
                          </MenuItem>
                        </Field>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    style={
                      values.neutered === 'no'
                        ? { display: 'none' }
                        : { display: 'flex' }
                    }
                    alignItems="center"
                    item
                    container
                    spacing={2}
                    xs={12}
                  >
                    <Grid item xs={12} sm={8}>
                      <Typography
                        className={classes.labelTypography}
                        variant="body2"
                        gutterBottom
                      >
                        What was the primary reason for neutering this dog?
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Field
                        component={TextField}
                        type="text"
                        name="neutered_reason"
                        label="Select reason for neutering"
                        select
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      >
                        {/* <MenuItem key="yes" value="yes"></MenuItem> */}
                        <MenuItem key="birth control" value="birth control">
                          birth control
                        </MenuItem>
                        <MenuItem
                          key="required by breeder, shelter, or rescue group"
                          value="required by breeder, shelter, or rescue group"
                        >
                          required by breeder, shelter, or rescue group
                        </MenuItem>
                        <MenuItem
                          key="to correct or reduce an existing behavior"
                          value="to correct or reduce an existing behavior"
                        >
                          to correct or reduce an existing behavior
                        </MenuItem>
                        <MenuItem
                          key="to correct or reduce an existing health problem"
                          value="to correct or reduce an existing health problem"
                        >
                          to correct or reduce an existing health problem
                        </MenuItem>
                        <MenuItem
                          key="to prevent future behavior problems"
                          value="to prevent future behavior problems"
                        >
                          to prevent future behavior problems
                        </MenuItem>
                        <MenuItem
                          key="recommended by veterinarian"
                          value="recommended by veterinarian"
                        >
                          recommended by veterinarian
                        </MenuItem>
                        <MenuItem
                          key="none of the above / don't know"
                          value="none of the above / don't know"
                        >
                          none of the above / don't know
                        </MenuItem>
                      </Field>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid spacing={2} alignItems="center" item container xs={12}>
                    <Grid item xs={12} sm={9}>
                      <Typography
                        className={classes.labelTypography}
                        variant="body2"
                        gutterBottom
                      >
                        Is this dog currently suffering from any significant
                        health problems?
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Field
                        className={classes.radioGroupWrapper}
                        component={RadioGroup}
                        name="health_problems"
                      >
                        <FormControlLabel
                          labelPlacement="start"
                          value="yes"
                          control={<Radio disabled={isSubmitting} />}
                          label="Yes"
                          disabled={isSubmitting}
                        />
                        <FormControlLabel
                          labelPlacement="start"
                          value="no"
                          control={<Radio disabled={isSubmitting} />}
                          label="No"
                          disabled={isSubmitting}
                        />
                      </Field>
                    </Grid>
                  </Grid>
                  <Grid
                    style={
                      values.health_problems === 'no'
                        ? { display: 'none' }
                        : { display: 'flex' }
                    }
                    alignItems="center"
                    item
                    container
                    xs={12}
                  >
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        label="Please describe briefly:"
                        name="health_problem_info"
                        fullWidth
                        multiline
                        rows="5"
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <Paper className={classes.paperField} elevation={2}>
              <Grid container spacing={4}>
                {/* <Grid item xs={12}> */}
                <Grid item xs={12} alignItems="center" container spacing={2}>
                  <Grid item xs={12} lg={9}>
                    <Typography
                      className={classes.labelTypography}
                      variant="body2"
                      gutterBottom
                    >
                      Are you currently experiencing any problems with this
                      dog’s behavior or temperament?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Field
                      // className={classes.textField}
                      fullWidth
                      component={TextField}
                      type="text"
                      name="concerned"
                      label="Select an Option"
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="no problems" value="no problems">
                        no problems
                      </MenuItem>
                      <MenuItem
                        key="only minor problems"
                        value="only minor problems"
                      >
                        only minor problems
                      </MenuItem>
                      <MenuItem
                        key="moderate problems"
                        value="moderate problems"
                      >
                        moderate problems
                      </MenuItem>
                      <MenuItem key="serious problems" value="serious problems">
                        serious problems
                      </MenuItem>
                    </Field>
                  </Grid>
                </Grid>
                <Grid item xs={12} alignItems="center" container spacing={2}>
                  <Grid item xs={12} lg={9}>
                    <Typography
                      className={classes.labelTypography}
                      variant="body2"
                      gutterBottom
                    >
                      Is (or was) this dog employed in any of the following
                      activities or roles?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Field
                      // className={classes.textField}
                      component={TextField}
                      type="text"
                      name="roles"
                      label="Select an activity or role"
                      fullWidth
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="breeding/showing" value="breeding/showing">
                        breeding/showing
                      </MenuItem>
                      <MenuItem key="no" value="field trials/hunting">
                        field trials/hunting
                      </MenuItem>
                      <MenuItem
                        key="other sports (agility, racing, sledding, etc.)"
                        value="other sports (agility, racing, sledding, etc.)"
                      >
                        other sports (agility, racing, sledding, etc.)
                      </MenuItem>
                      <MenuItem
                        key="working roles (search & rescue, service dog, sheepdog,
                            etc.)"
                        value="working roles (search & rescue, service dog, sheepdog,
                          etc.)"
                      >
                        working roles (search & rescue, service dog, sheepdog,
                        etc.)
                      </MenuItem>
                      <MenuItem
                        key="none of the above"
                        value="none of the above"
                      >
                        none of the above
                      </MenuItem>
                    </Field>
                  </Grid>
                </Grid>
                <Grid item xs={12} alignItems="center" container spacing={2}>
                  <Grid item xs={12} lg={9}>
                    <Typography
                      className={classes.labelTypography}
                      variant="body2"
                      gutterBottom
                    >
                      Is this the first dog you have ever owned?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Field
                      fullWidth
                      component={TextField}
                      type="text"
                      name="first_owned"
                      label="Please choose"
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="yes" value="yes">
                        Yes
                      </MenuItem>
                      <MenuItem key="no" value="no">
                        No
                      </MenuItem>
                    </Field>
                  </Grid>
                </Grid>
                <Grid item xs={12} alignItems="center" container spacing={2}>
                  <Grid item xs={12} lg={9}>
                    <Typography
                      className={classes.labelTypography}
                      variant="body2"
                      gutterBottom
                    >
                      If NO, how many have you owned before?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Field
                      fullWidth
                      component={TextField}
                      type="text"
                      name="number_of_owned"
                      label="Please choose"
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="1 or 2" value="1 or 2">
                        1 or 2
                      </MenuItem>
                      <MenuItem key="3 to 5" value="3 to 5">
                        3 to 5
                      </MenuItem>
                      <MenuItem key="6 to 10" value="6 to 10">
                        6 to 10
                      </MenuItem>
                      <MenuItem key="more than 10" value="more than 10">
                        more than 10
                      </MenuItem>
                    </Field>
                  </Grid>
                </Grid>

                <Grid item xs={12} alignItems="center" container spacing={2}>
                  <Grid item xs={12} lg={9}>
                    <Typography
                      className={classes.labelTypography}
                      variant="body2"
                      gutterBottom
                    >
                      Did you grow up with dogs as a child (0-16 years)?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Field
                      fullWidth
                      component={TextField}
                      type="text"
                      name="dog_as_child"
                      label="Please choose"
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="yes" value="yes">
                        Yes
                      </MenuItem>
                      <MenuItem key="no" value="no">
                        No
                      </MenuItem>
                    </Field>
                  </Grid>
                </Grid>

                <Grid item xs={12} alignItems="center" container spacing={2}>
                  <Grid item xs={12} lg={9}>
                    <Typography
                      className={classes.labelTypography}
                      variant="body2"
                      gutterBottom
                    >
                      Are there other dogs in your household?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Field
                      fullWidth
                      component={TextField}
                      type="text"
                      name="other_dogs"
                      label="Please choose"
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="yes" value="yes">
                        Yes
                      </MenuItem>
                      <MenuItem key="no" value="no">
                        No
                      </MenuItem>
                    </Field>
                  </Grid>
                </Grid>

                <Grid item xs={12} alignItems="center" container spacing={2}>
                  <Grid item xs={12} lg={9}>
                    <Typography
                      className={classes.labelTypography}
                      variant="body2"
                      gutterBottom
                    >
                      If YES, are these other dogs:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={3}>
                    <Field
                      fullWidth
                      component={TextField}
                      type="text"
                      name="other_dogs_age"
                      label="Please choose"
                      select
                      variant="outlined"
                      // helperText="Please select date unit"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key="older" value="older">
                        older
                      </MenuItem>
                      <MenuItem key="younger" value="younger">
                        younger
                      </MenuItem>
                      <MenuItem key="same age" value="same age">
                        same age
                      </MenuItem>
                      <MenuItem key="older & younger" value="older & younger">
                        older & younger
                      </MenuItem>
                      <MenuItem key="older & same" value="older & same">
                        older & same
                      </MenuItem>
                      <MenuItem key="younger & same" value="younger & same">
                        younger & same
                      </MenuItem>
                      <MenuItem
                        key="older, younger, & same"
                        value="older, younger, & same"
                      >
                        older, younger, & same
                      </MenuItem>
                    </Field>
                  </Grid>
                </Grid>
                {/* </Grid> */}
              </Grid>
            </Paper>
            <Paper className={classes.paperField} elevation={2}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Grid alignItems="center" container spacing={2}>
                    <Grid item xs={12} lg={9}>
                      <Typography
                        className={classes.labelTypography}
                        variant="body2"
                        gutterBottom
                      >
                        Have you been invited by your primary care veterinarian
                        to add this dog to Penn App?
                      </Typography>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                      <Field
                        fullWidth
                        component={TextField}
                        type="text"
                        name="invited_by_vet"
                        label="Please choose"
                        select
                        variant="outlined"
                        // helperText="Please select date unit"
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      >
                        <MenuItem key="yes" value="yes">
                          Yes
                        </MenuItem>
                        <MenuItem key="no" value="no">
                          No
                        </MenuItem>
                      </Field>
                    </Grid>
                  </Grid>
                  <Grid alignItems="center" container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      {isSubmitting && <LinearProgress />}
                      <br />
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isSubmitting}
                        // onClick={submitForm}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Pet;
