import React from 'react'
//import Navbar from './NavBar';
import { Navbar } from './nav/Navbar';
import { HomeTests } from './HomeTests';
import { Stack, Grid } from '@mui/material';
import AboutUs from './AboutUs';
import Services from './Services';
import Footer from '../UI/Footer';
import { useEffect, useState } from 'react';

const Home = () => {
    const [ilefInfos, setIlefInfos] = useState(null);

    useEffect(() => {

        const fetchWebInfo = async () => {
            const infos = await fetch('/api/webinfo')
            const json = await infos.json()
            if (infos.ok) {
                setIlefInfos(json);
            }
        }
        fetchWebInfo();

    }, []);

    const items = [
        { label: 'Home', href: '#home' },
        { label: 'About us', href: '#aboutus' },
        { label: 'our service', href: '#ourservice' }
    ];
    return (
        <Stack >
            <Navbar items={items} />
            <Grid id="home" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <HomeTests />
            </Grid>
            { ilefInfos &&< AboutUs ilefInfos={ilefInfos}/>}
            { ilefInfos && <Services ilefInfos={ilefInfos} />}
            <Footer />
        </Stack>
    )
}

export default Home;