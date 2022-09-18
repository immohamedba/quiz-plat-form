import React from 'react'
import { AppBar, Toolbar, Box, Stack, Link } from '@mui/material'
import logo from '../../../assets/logoIlef.png';
import BraunVariant from '../../UI/Button/CustomVariantButton';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTheme } from '../../UI/Themes/customButtonTheme';
import classses from './navbar.module.css';

export const Navbar = (props) => {

    const navItems = props.items.map(item =>
        <Link underline="none" color='#151515' className={classses.link} href ={item.href} key ={item.label}>{item.label} </Link>
    )
    return (
        <AppBar position="static" sx={{}}>
            <Toolbar sx={{ bgcolor: '#F9F7F7' }}>
                <Box
                    component="img"
                    sx={{
                        height: 90,
                        width: 110,
                        bgcolor: '#F9F7F7',
                        position: 'realtif',
                        marginLeft: 0,
                        /*['@media (max-height:700px)']: { // eslint-disable-line no-useless-computed-key
                            height: 70,
                            width: 90,
                        }*/
                    }}
                    alt="logo ilef info service."
                    src={logo}
                />
                <Stack direction='row' justifyContent='center' width='80%' spacing={5}>
                    {navItems}
                </Stack>
                <Stack sx={{ bgcolor: '#F9F7F7', display:'flex', flexDirection:'row', justifyContent:'space-around' }}>
                    <ThemeProvider theme={CustomTheme}>
                        <BraunVariant variant={'braun'} action='Login' href="/login" />
                    </ThemeProvider>
                </Stack>
            </Toolbar>

        </AppBar>
    )
}