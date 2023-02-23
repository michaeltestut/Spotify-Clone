import React, { useEffect } from 'react'
import styled from 'styled-components'
import {AiFillClockCircle} from "react-icons/ai"
import { useStateProvider } from '../utils/StateProvider'

export default function Body() {
  const[{token},dispatch] = useStateProvider();
  useEffect(()=>{
    const getInitialPlaylist = async ()=>{
      try{
        
      }catch(err){
        console.log(err)
      }
    }
  },[token,dispatch])

  return (
    <Container>
      Body
    </Container>
  )
}

const Container = styled.div`
  
`