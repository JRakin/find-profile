import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import * as Yup from 'yup';

export default function ProfileForm() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id='linkedin-url'
                        name='linkedin_url'
                        label='Linkedin profile url'
                        fullWidth
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='github'
                        name='github'
                        label='Github profile link'
                        fullWidth
                        variant='standard'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='leetcode-url'
                        name='leetcode_url'
                        label='Leetcode profile link'
                        fullWidth
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='hackerrank-url'
                        name='hackerrank_url'
                        label='Hackerrank profile link'
                        fullWidth
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='codepen-url'
                        name='codepen_url'
                        label='Codepen profile link'
                        fullWidth
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='medium-url'
                        name='medium_url'
                        label='Medium profile link'
                        fullWidth
                        variant='standard'
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

ProfileForm.validationSchema = Yup.object().shape({
    linkedin_url: Yup.string().url('Invalid url').required('Required'),
    github: Yup.string().url('Invalid url').required('Required'),
    leetcode_url: Yup.string().url('Invalid url'),
    hackerrank_url: Yup.string().url(),
    codepen_url: Yup.string().url(),
    medium_url: Yup.string().url(),
    codeforces_url: Yup.string().url(),
});

ProfileForm.initialValues = {
    linkedin_url: '',
    github: '',
    leetcode_url: '',
    hackerrank_url: '',
    codepen_url: '',
    medium_url: '',
    codeforces_url: '',
};

ProfileForm.label = 'Profiles';
