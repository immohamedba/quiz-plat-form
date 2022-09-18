import React from 'react'
import { Stack, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Stack
            sx={{
                height: '100px',
                width: '100%',
                bgcolor: '#C23838',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
            <Typography color="white">Copyright© 2022, ILEF info service, All Rights reserved. </Typography>
            <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                <Stack color="white" m={2}>Follow us</Stack>
               <Button href='https://www.facebook.com/'> <FacebookIcon mr={10} sx={{ color: '#5277F3' }}/></Button>
               <Button href='https://www.linkedin.com/'> <LinkedInIcon mr={10} sx={{  color: '#5277F3' }} /></Button>
            </Stack>
        </Stack>
    )
}
export default Footer;
