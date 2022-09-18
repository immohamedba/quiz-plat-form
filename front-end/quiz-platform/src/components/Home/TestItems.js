import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTheme } from '../UI/Themes/customButtonTheme';
import BoldVariant from '../UI/Button/CustomVariantButton';
export const TestItems = (props) => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 1,
            width: '225px',
            height: '290px',
            bgcolor: '#DFE2DB',
            borderRadius: '10px'
        }}
        >
            <Typography variant="subtitle1" fontWeight='bold' gutterBottom>{props.test.name}</Typography>
            <Typography variant="subtitle2" mt={1} gutterBottom>Category :{props.test.category}</Typography>
            <Typography variant="subtitle2" mt={0.5} gutterBottom>Number of question : {props.test.nbQuestion} </Typography>
            <Typography variant="subtitle2" mt={0.5} gutterBottom>Time limit : 00:{props.test.duration}:00</Typography>
            <Typography variant="subtitle2" mt={0.5} gutterBottom>Pass Mark : {props.test.scoreReq}%</Typography>
            <Typography variant="subtitle1" mt={0.5} fontWeight='bold' gutterBottom>Access : {props.test.access}</Typography>
            <Typography variant="subtitle1" fontWeight='bold' gutterBottom>Trainer : {props.test.trainerName}</Typography>
            <Stack sx={{ width: '35%', fontSize: 'small' }}>
                <ThemeProvider theme={CustomTheme} >
                    <BoldVariant variant={'braun'} action='Start'/>
                </ThemeProvider>
            </Stack>

        </Box>
    )
}