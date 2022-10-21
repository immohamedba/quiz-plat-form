import React, { useState, useRef } from 'react'
import { Grid, Stack, Typography, TextField, Box, TextareaAutosize, Button, MenuItem, InputAdornment } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import BoldVariant from '../../../UI/Button/CustomVariantButton';
import { CustomTheme } from '../../../UI/Themes/customButtonTheme';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import classes from './TestForm.module.css'
import { DownloadFile} from '../ManageFile';
import { useAddTest } from '../../../../hooks/TestTrainerCustomHooks/useAddTest';
const TestForm = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [duration, setDuration] = useState(60);
    const [nbQuestion, setNbQuestion] = useState(60);
    const [scoreReq, setScoreReq] = useState(75);
    const [_id, setID] = useState('');
    const [access, setAccess] = useState('private');
    const [disponibility, setDisponibility] = useState(true);
    const [subdomains, setSubdomains] = useState([]);
    const [description, setDescription] = useState('');
    const { AddTest, error, addedStatus, setAddedStatus } = useAddTest();
    const [fiealError, setFieldError] = useState('');
    const [questions, setQuestions] = useState([]);
    const hiddenFileInput = useRef(null);
    const TextFiItems = [
        { label: 'Name * ', type: 'text', val: name, setVal: setName, adornment: '', helperText: '' },
        { label: 'Category *', type: 'text', val: category, setVal: setCategory, adornment: '', helperText: '' },
        { label: 'Duration *', type: 'number', val: duration, setVal: setDuration, adornment: 'min', helperText: '' },
        { label: 'Number of question *', type: 'number', val: nbQuestion, setVal: setNbQuestion, adornment: '', helperText: '' },
        { label: 'Score required *', type: 'number', val: scoreReq, setVal: setScoreReq, adornment: '%', helperText: '' },
        { label: 'Test iD *', type: 'text', val: _id, setVal: setID, helperText: fiealError }

    ];
    const selectFieldItems = [
        { label: 'Access *', menuItem: ['public', 'private'], val: access, setVal: setAccess },
        { label: 'Disponibility * ', menuItem: ['true', 'false'], val: disponibility, setVal: setDisponibility }
    ];

    const download = (e) => {
        e.preventDefault();
        DownloadFile(e);
    }

    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    // reading file and setting questtion into a vraibale
    const handleChange = event => {
        const reader = new FileReader();
        reader.onload = (event) => {
            setQuestions(event.target.result);
        };
        reader.readAsText(event.target.files[0]);
    };

    const checkValidId = (id) => {
        if (id.trim() && id.length > 8 && /^[a-z0-9]+$/i.test(id)) {
            setFieldError('');
            return true;
        } else {
            setFieldError('Incorrect ID *');
            return false;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (checkValidId(_id)) {
            AddTest(name, category, duration, description, nbQuestion, scoreReq, _id, access, disponibility, questions);
            if (addedStatus) {
                console.log("status added");
                setName(''); setCategory(''); setDuration(60);
                setNbQuestion(60); setScoreReq(75); setID('');
                setAccess('private'); setDisponibility(true);
                setAddedStatus(true);
            }
        } else console.log(false);

    }
    return (
        <Stack sx={{
            width: '100%',
            height: 'auto',
            marginTop: 8,
            bgcolor: '#DFE2DB',

        }}>
            <Grid sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                /*gridTemplateRows:'minmax(200px, auto)',*/
                width: '100%',
                marginLeft: '20px',
                marginRight: '20px',
                marginTop: '5px',
                height: 'auto',
                marginBottom: '30px'
            }}>
                {TextFiItems.map(item =>
                    <Stack key={item.label}>
                        <Typography variant='h8' paddingBottom={2} sx={{ color: "black" }}> {item.label}</Typography>
                        <TextField sx={{ bgcolor: '#F9F7F7', borderRadius: '5px', width: '80%', height: '35px', alignItems: 'center' }}
                            type={item.type}
                            variant="standard"
                            InputProps={{
                                disableUnderline: true, style: { textAlign: 'center' },
                                endAdornment: <InputAdornment position='end'>{item.adornment}</InputAdornment>
                            }}
                            onChange={(e) => { item.setVal(e.target.value) }}
                            value={item.val}
                            required
                            helperText={item.helperText}
                        />
                    </Stack>
                )}
                {selectFieldItems.map(selectItem =>
                    <Stack key={selectItem.label}>
                        <Typography variant='h8' paddingBottom={2} sx={{ color: "black" }}> {selectItem.label}</Typography>
                        <TextField className={classes.texfield}
                            variant="standard"
                            InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                            select
                            value={selectItem.val}
                            required
                            onChange={(e) => selectItem.setVal(e.target.value)}
                        >
                            {selectItem.menuItem.map(menu =>
                                <MenuItem key={menu} value={menu}> {menu} </MenuItem>
                            )}
                        </TextField>
                    </Stack>
                )}
                <Stack>
                    <Typography variant='h8' paddingBottom={2} sx={{ color: "black" }}> Sub domaines</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField sx={{ bgcolor: '#F9F7F7', marginBottom: '20px', borderRadius: '5px', width: '80%', height: '40px', alignItems: 'center' }}
                            type='text'
                            variant="standard"
                            InputProps={{ disableUnderline: true }}
                            onChange={(e) => { setSubdomains(...e.target.value); console.log(subdomains) }}
                            value={subdomains}
                            required
                        />
                        <ThemeProvider theme={CustomTheme}>
                            <BoldVariant variant={'small'} action='add' />
                        </ThemeProvider>
                    </Box>
                </Stack>
                <Stack>{/*sub domaines added here */} </Stack>

                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h8' paddingBottom={2} sx={{ color: "black" }}> Get test file or templates </Typography>
                    <Button sx={{ color: 'white', bgcolor: '#C23838' }} size='small' onClick={(e) => download(e)}>
                        <FileDownloadOutlinedIcon fontSize='medium' />
                    </Button>
                </Stack>

                <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h8' paddingBottom={2} sx={{ color: "black" }}> upload questions </Typography>
                    <Button sx={{ color: 'white', bgcolor: '#C23838' }} size='small'
                        onClick={handleClick}
                    >
                        <FileUploadOutlinedIcon fontSize='medium' />
                        <input type="file" accept=".json" ref={hiddenFileInput} onChange={handleChange} hidden />
                    </Button>
                </Stack>

                <Stack sx={{ gridColumn: '4/6', '@media (max-width: 1300px)': { gridColumn: '3/5', width: '500px' }, }} >
                    <Typography variant='h8' paddingBottom={2} sx={{ color: "black" }}> Description</Typography>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={4}
                        placeholder="description"
                        style={{ width: 500 }}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Stack>
                <Stack sx={{ gridColumn: '3/4', mt: 8, mb: 4 }} /*sx={{ width: '100%', mt: 8, mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }} */>
                    <ThemeProvider theme={CustomTheme}>
                        <BoldVariant variant={'braun'} action='Add new Test' onClick={handleSubmit} />
                    </ThemeProvider>
                </Stack>
                {error && <span> {error}</span>}
            </Grid>
        </Stack>
    )
}

export default TestForm;
