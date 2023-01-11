import React from 'react'
import { Box, Typography } from '@mui/material'
import Termstyle from './Termstyle'

function Term() {
    return (
        <>
            <Termstyle>
                <Box className='mterm'>
                    <Box className='maint'>
                        <Box className='policy'>
                            <h1 className='heading'>TERMS AND CONDITIONS</h1>
                            <p className='heading'>This Agreement was last revised on September 06th, 2022.</p>
                        </Box>
                    </Box>
                </Box>
            </Termstyle>
        </>
    )
}

export default Term