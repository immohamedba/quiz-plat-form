import React from 'react'
import  { Button } from '@mui/material'
export default function BoldVariant(props) {
    const {action, ...rest} =props
    return ( 
        <Button
        {...rest}
            >
            {props.action}
        </Button>
    )
};

/* 
            variant={props.variant}
            disableElevation
            disabled ={props.isDisabled}
            type ={props.type}
            onClick ={props.onClick}
            href={props.href}
*/