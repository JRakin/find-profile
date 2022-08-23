import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Field, useField, useFormikContext } from 'formik';

export default function AddressForm() {
    const [gender, setgender] = React.useState('');
    const { setFieldValue } = useFormikContext();

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Field
                        required
                        id='firstName'
                        name='firstName'
                        label='First name'
                        fullWidth
                        component={TextField}
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id='lastName'
                        name='lastName'
                        label='Last name'
                        fullWidth
                        autoComplete='family-name'
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id='email'
                        name='email'
                        label='Email address'
                        fullWidth
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id='demo-simple-select-helper-label'>Gender</InputLabel>
                        <Select
                            labelId='demo-simple-select-helper-label'
                            id='demo-simple-select-helper'
                            value={gender}
                            label='Gender'
                            onChange={(e) => setFieldValue('gender', e.target.value)}
                        >
                            <MenuItem value=''>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'other'}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

AddressForm.validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    gender: Yup.string().required('Required'),
});

AddressForm.initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
};

AddressForm.label = 'Basic information';
