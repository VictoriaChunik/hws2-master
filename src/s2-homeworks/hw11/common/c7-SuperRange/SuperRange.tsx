import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '174px',
                height: '4px',
                color:'#00CC22',
                //
                // '& .MuiSlider-thumb': {
                //     width: 18,
                //     height: 18,
                //     backgroundColor: '#fff',
                //     border: '1px solid #00CC22',
                //     '&:hover': {
                //         boxShadow: '0 0 0 6px rgba(0, 204, 34, 0.2)',
                //     },
                // },
                // '& .MuiSlider-track': {
                //     height: 4,
                //     backgroundColor: '#00CC22',
                // },
                // '& .MuiSlider-rail': {
                //     height: 4,
                //     backgroundColor: '##8B8B8B',
                //     opacity: 1,
                // },


            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)

        />
    )
}

export default SuperRange
