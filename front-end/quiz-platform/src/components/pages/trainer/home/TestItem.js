import React from 'react'
import { Box, Typography, Grid } from '@mui/material';

const TestItem = ({test}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 1,
            width: '225px',
            height: '290px',
            bgcolor: '#C23838',
            borderRadius: '10px'
        }}>
            <Grid sx={{ width: '95%', height: '30px',mt:0.5 ,mb: 2, bgcolor: 'white', borderRadius: '2px' }}>
                <Typography variant="subtitle1" fontWeight='bold' gutterBottom>{test.name}</Typography>
            </Grid>
            <Typography variant="subtitle2" mt={1} color="white" gutterBottom>Category : {test.category}</Typography>
            <Typography variant="subtitle2" mt={0.5} color="white" gutterBottom>Number of question :{test.nbQuestion} </Typography>
            <Typography variant="subtitle2" mt={0.5} color="white" gutterBottom>Time limit : 00:{test.duration}:00</Typography>
            <Typography variant="subtitle2" mt={0.5} color="white" gutterBottom>Pass Mark : {test.scoreReq}%</Typography>
            <Typography variant="subtitle1" mt={0.5} color="white" fontWeight='bold' gutterBottom>Access : {test.access}</Typography>
            <Typography variant="subtitle1" color="white" fontWeight='bold' gutterBottom>Trainer : {test.trainerName}</Typography>
        </Box>
    )
}

export default TestItem;
