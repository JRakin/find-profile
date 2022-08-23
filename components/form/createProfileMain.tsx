import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Form, Formik } from 'formik';
import * as React from 'react';
import BasicInfoForm from './basicInfoForm';
import ProfilesForm from './profilesForm';

const steps = [BasicInfoForm, ProfilesForm];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <BasicInfoForm />;
        case 1:
            return <ProfilesForm />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

export default function PreateProfileMain() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const initialValues = steps.reduce(
        (values, { initialValues }) => ({
            ...values,
            ...initialValues,
        }),
        {}
    );

    console.log(initialValues);

    const ActiveStep = steps[activeStep];
    const validationSchema = ActiveStep?.validationSchema;

    const isLastStep = () => {
        return activeStep === steps.length - 1;
    };

    const onSubmit = (values: any) => {
        console.log('hello');
        if (!isLastStep()) {
            handleNext();
            return;
        }

        console.log(values);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: any) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting, touched, values }) => (
                        <Form>
                            <Paper
                                variant='outlined'
                                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                            >
                                <Typography component='h1' variant='h4' align='center'>
                                    Create profile
                                </Typography>
                                <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                                    {steps.map((item) => (
                                        <Step key={item.label}>
                                            <StepLabel>{item.label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                                <React.Fragment>
                                    {activeStep === steps.length ? (
                                        <React.Fragment>
                                            <Typography variant='h5' gutterBottom>
                                                Thank you for registering with us.
                                            </Typography>
                                            <Typography variant='subtitle1'>
                                                To cook your profile we have sent you an email for
                                                confirmation, and your profile will be served as
                                                soon as the verification is complete.
                                            </Typography>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            {getStepContent(activeStep)}
                                            <Box
                                                sx={{ display: 'flex', justifyContent: 'flex-end' }}
                                            >
                                                {activeStep !== 0 && (
                                                    <Button
                                                        onClick={handleBack}
                                                        sx={{ mt: 3, ml: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                )}

                                                <Button type='submit' sx={{ mt: 3, ml: 1 }}>
                                                    {isLastStep() ? 'Submit' : 'Next'}
                                                </Button>
                                            </Box>
                                        </React.Fragment>
                                    )}
                                </React.Fragment>
                            </Paper>
                        </Form>
                    )}
                </Formik>
            </Container>
        </ThemeProvider>
    );
}
