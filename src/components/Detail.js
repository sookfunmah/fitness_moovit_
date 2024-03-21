import React from 'react'
import {typograpgh, Stack, Button} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
  
  const {bodyPart, gifUrl, name, target, quipment} = exerciseDetail

  return (
    <stack>
        <img src = {gifUrl} alt={name} Loading = "lazy" className="detail-image" />
    </stack>
  )
}

export default Detail