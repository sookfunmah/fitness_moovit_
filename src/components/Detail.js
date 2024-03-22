import React from 'react'
import {typograpgh, Stack, Button, Typography} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

//Display the exercise details from the API under the gif exercise.
const Detail = ({exerciseDetail}) => {

  //Dislay the 3 icons
  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail
  const extraDetail = [{
    icon : BodyPartImage,
    name : bodyPart,
  },
  {
    icon : TargetImage,
    name : target,
  },
  {
    icon : EquipmentImage,
    name : equipment,
  }
]
    
  
  console.log(gifUrl)
  return (
    <Stack>
        <img src = {gifUrl} alt={name} Loading = "lazy" className="detail-image" />
    <Stack>
      <Typography variant="h5">
        {name}
      </Typography>
      <Typography>
        Exercised keeps you healthy. {name}{` `}
        is the best exercise to target your {target}.
        It will help you improve your mood and gain energy.
      </Typography>

  {extraDetail.map((item)=>(
    <Stack key={item.name} direction =" row" gap ="24px" alignItems = "center">
        <Button sx={{background : '#ffffff', borderRadius:"50%", width:"100px", height : "100px"}}>
          <img src = {item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}}/>
        </Button>
        <Typography textTransform="capitalize" variant = "h5">
          {item.name}
        </Typography>
    </Stack>
))}

    </Stack>
    </Stack>
  )
}

export default Detail