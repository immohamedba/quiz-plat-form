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
                        ":hover": {
                            backgroundColor: '#ECEBEB',
                        }
                    }
                },
                {
                    props: { variant: "braun" },
                    style: {
                        fontWeight: "bold",
                        color:'#F9F7F7',
                        backgroundColor: '#C23838',
                        fontSize: 'medium',
                        '@media (max-width: 768px)': {
                            fontSize :'small',
                          },
                        ":hover": {
                            backgroundColor: '#DC2222',
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