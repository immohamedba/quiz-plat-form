import React, { useEffect } from 'react'
import { Stack } from '@mui/material';
import Navbar from './Navbar';
import { Home } from './home/Home';
import Footer from '../../UI/Footer';
import { useTestContext } from '../../../hooks/TestTrainerCustomHooks/useTestContext';

const Trainer = () => {
  const { tests, dispatch } = useTestContext()

  useEffect(() => {
    const fetchTests = async () => {
      const response = await fetch('/api/tests')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_TESTS', payload: json })
      }
    }
    fetchTests()
  }, [])

  return (
    <Stack>
      <Navbar />
      <Home/>
      <Footer />
    </Stack>
  )
}

export default Trainer;