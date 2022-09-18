import React from 'react'
import { Stack, Box, Typography, Grid } from '@mui/material';
import TrianerProfile from './TrianerProfile';
import { useEffect, useState } from 'react';
const AboutUs = (props) => {
    const [trainers, setTrainers] = useState(null);

    useEffect(() => { 
        // fetch data here !
        const fetchTrainers = async () => {
            const response = await fetch('/api/IlefTrainers')
            const json = await response.json()

            if (response.ok) {
                setTrainers(json);
            }
        }
        fetchTrainers();
    }, [])

    return (
        <Stack id="aboutus"
            sx={{
                width: '100%',
                height: 'auto',
                bgcolor: '#DFE2DB',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography fontWeight='bold' mt={1.5}>Ilef Info Service</Typography>
            <Box
                sx={{
                    width: '80%',
                    height: '130px',
                    bgcolor: '#F9F7F7',
                    margin: '20px'
                }}>
                    {props.ilefInfos[0].ilefDescription }
            </Box>
            <Typography fontWeight='bold' mt={3} mb={7}>Our Team</Typography>
            <Grid
                sx={{
                    width: '70%',
                    height: 'auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, 15rem )',
                    justifyContent: 'space-around'
                }}>
                {trainers && trainers.map((trainer) => (
                    <TrianerProfile trainer={trainer} key={trainer._id} />
                ))}
            </Grid>
        </Stack>
    )
}

export default AboutUs;