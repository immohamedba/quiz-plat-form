import { Button } from '@mui/material'
export default function BoldVariant(props) {
    return (
        <Button
            variant='auth'
            disableElevation
            disabled ={props.isDisabled}
            type ={props.type}
            onClick ={props.onClick}
            >
            {props.action}
        </Button>
    )
}
//{props.action} 