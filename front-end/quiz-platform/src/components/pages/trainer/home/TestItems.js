import React from 'react'
import { Stack } from '@mui/material';
import TestItem from './TestItem';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTheme } from '../../../UI/Themes/customButtonTheme';
import BoldVariant from '../../../UI/Button/CustomVariantButton';
import { useTestContext } from '../../../../hooks/TestTrainerCustomHooks/useTestContext';
const TestItems = () => {
  const { tests, dispatch } = useTestContext();
  return (
    <Stack sx={{
      width: '100%',
      height: 'auto',
    }}>
      <Stack sx={{
        width: '100%',
        height: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 17rem )',
        justifyContent: 'center',
      }}>
        {tests && tests.map(test =>
          <TestItem test={test} key ={test._id}/>
        )}
      </Stack>
      <Stack sx={{ width: '100%', mt: 8, mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ThemeProvider theme={CustomTheme}>
          <BoldVariant variant={'braun'} action='Modify' />
        </ThemeProvider>
      </Stack>
    </Stack>
  )
}
export default TestItems;
