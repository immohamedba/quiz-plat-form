import { createTheme } from '@mui/material/styles';
const CustomTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "auth" },
                    style: {
                        fontWeight: "bold",
                        color: "#C23838",
                        backgroundColor: '#F9F7F7',
                        fontSize: 'medium',
                        ":hover" :{
                            backgroundColor: '#ECEBEB',
                        }
                    }
                }
            ],
            defaultProps: {
                disableElevation: true,
                disableFocusRipple: true,
                
            }
        }
    }
});

export { CustomTheme }