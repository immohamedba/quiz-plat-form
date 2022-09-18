import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import profile from '../../assets/profile.jpg'

const TrianerProfile = (props) => {
    return (
        <Stack
            sx={{
                width: '225px',
                height: '290px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#F9F7F7',
                borderRadius: '10px',
                marginBottom: 6,
                padding: 1
            }}>
            <Box
                component="img"
                sx={{
                    height: 90,
                    width: 110,
                    borderRadius: '50%',
                    bgcolor: '#F9F7F7',
                    position: 'relative',
                    bottom: '35px',
                    ['@media (max-height:700px)']: { // eslint-disable-line no-useless-computed-key
                        height: 70,
                        width: 90,
                    }
                }}
                alt="logo ilef info service."
                src={profile}
            />
            <Typography variant='substitle2' m={0.5}> {props.trainer.firstName} {props.trainer.lastName}</Typography>
            <Typography variant='substitle2' m={0.5}>{props.trainer.speciality}</Typography>
            <Typography variant='substitle2' m={0.5}>{props.trainer.skills} | {props.trainer.company} </Typography>
            <Typography variant='substitle2' m={0.5}>{props.trainer.moreInf} </Typography>
            <Typography variant='substitle2' m={0.5}>{props.trainer.phone}</Typography>
        </Stack>
    )
}

export default TrianerProfile;