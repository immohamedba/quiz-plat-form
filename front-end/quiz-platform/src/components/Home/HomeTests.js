import React from 'react'
import { Stack } from '@mui/material'
import { TestItems } from './TestItems'
import { useEffect } from 'react'
import { useState } from 'react';
export const HomeTests = () => {
    const [tests, setTests] = useState(null);

    useEffect(() => {
        // fetch data here !
        const fetchTests = async () => {
            const response = await fetch('/api/tests')
            const json = await response.json()

            if (response.ok) {
            //    console.log("Hey", json);
                setTests(json);
            }

        }
        fetchTests();
    }, [])

    return ( 
        <Stack
            sx={{ 
                marginTop: 5,
                width: '85%',
                height: 'auto',
                borderRadius: '10px',
                bgcolor: '#C23838',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, 15rem )',
                justifyContent: 'center',
            }}
        >
           {tests && tests.map((test)=>(
            <TestItems test={test}  key ={test._id}/>
           )) }
        </Stack>
    )
}
