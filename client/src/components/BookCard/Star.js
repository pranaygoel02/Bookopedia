import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';
import { yellow } from '@mui/material/colors';


export default function Star({rating}) {
  return (
    <div style={{"display":"flex"}}>
        <h3 style={{"margin": "0", paddingLeft: "1em"}}>{rating}</h3>
        {<GradeIcon style={{ color: yellow[500] }}/>}
    </div>
  )
}
