import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const Services = (props) => {
    return (
        <Stack id="ourservice"
            sx={{
                height: 'auto',
                width: '100%',
                bgcolor: '#F9F7F7',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom:'20px'
            }}>
            <Typography variant='h7' fontWeight='bold' m={2.5}>Our Services</Typography>
            <Stack sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <Box sx={{
                    height: 'auto',
                    width: '30%',
                    bgcolor: '#DFE2DB',
                    display: 'flex',
                    flexDirection: 'column',
                    padding:2
                }}>
                    <Typography variant='subtitle1' m={1}  fontWeight='bold'>Learner</Typography>
                    {props.ilefInfos[0].service.learners}
                    {/*<Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                    <Typography variant='body2'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    <Typography variant='body2'> when an unknown printer took a galley of type and scrambled it </Typography>
                    <Typography variant='body2'> to make a type specimen book. It has survived not only five centuries</Typography>
                    <Typography variant='body2'> but also the leap into electronic typesetting, remaining essentially unchanged. </Typography>*/}
                </Box>
                <Box sx={{
                    height: 'auto',
                    width: '30%',
                    bgcolor: '#DFE2DB',
                    display: 'flex',
                    flexDirection: 'column',
                    padding:2
                }}>
                    {props.ilefInfos[0].service.trainers}
                    {/*<Typography variant='subtitle1' m={1} fontWeight='bold'>Trainer</Typography>
                    <Typography variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
                    <Typography variant='body2'> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                    <Typography variant='body2'> when an unknown printer took a galley of type and scrambled it </Typography>
                    <Typography variant='body2'> to make a type specimen book. It has survived not only five centuries</Typography>
            <Typography variant='body2'> but also the leap into electronic typesetting, remaining essentially unchanged. </Typography> */}
            </Box>
        </Stack>
        </Stack >
    )
}

export default Services;