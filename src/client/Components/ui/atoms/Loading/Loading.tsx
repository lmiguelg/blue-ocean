import React, { FC, useContext } from 'react'
import Backdrop from '@mui/material/Backdrop/Backdrop'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'
import LoadingContext from '../../../../context/LoadingContext'

const Loading: FC = () => (
  <Backdrop open={useContext(LoadingContext)}>
    <CircularProgress color='inherit' />
  </Backdrop>
)
export default Loading
