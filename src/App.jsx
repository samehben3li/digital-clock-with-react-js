import { useState,useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, rgb(1, 159, 233),rgb(2, 238, 147));
  display: flex;
  align-items: center;
  justify-content: center;
`

const Clock = styled.div`
  width: 450px;
  height: 450px;
  background-color: rgba(255,255,255,0.6);
  border-radius: 50%;
  border: 2px solid black;
  position: relative;

  &::after{
    content:"";
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 15px;
    height: 15px;
    background-color: black;
    border-radius: 50%;
  }
`

const Value = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  transform: rotate( ${props => props.r *30 }deg);
`

const Hour = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    height: 35%;
    width: 10px;
    background-color: black;
    transform-origin: bottom;
    transform: translateX(-50%) rotate(${props=>props.h * 360}deg);
    border: 1px solid white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 2;
`

const Minute = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    height: 40%;
    width: 7px;
    background-color: black;
    transform-origin: bottom;
    transform: translateX(-50%) rotate(${props=>props.m * 360}deg);
    border: 1px solid white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 2;
`

const Seconde = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    height: 45%;
    width: 3px;
    background-color: red;
    transform-origin: bottom;
    transform: translateX(-50%) rotate(${props=>props.s * 360}deg);
    border: 1px solid white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 2;
`

function App() {

  const [currentDate,setCurrentDate] = useState({})
  const [hour,setHour] = useState(12)
  const [minute,setMinute] = useState(12)
  const [seconde,setSeconde] = useState(12)
  const value = [1,2,3,4,5,6,7,8,9,10,11,12]

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentDate(new Date())
      return ()=>clearInterval(interval)
    },1000)
    
  },[])

  useEffect(()=>{
    setSeconde(new Date().getSeconds()/60)
    setMinute((seconde+ new Date().getMinutes())/60)
    setHour((minute + new Date().getHours())/12)
  },[currentDate])

  return (
    <Container>
      <Clock>
        <Hour h={ hour } />
        <Minute m={ minute } />
        <Seconde s={ seconde } />
        { value.map(i=>{
          return <Value key={i} r ={i}>{i}</Value>
        })}
      </Clock>
    </Container>
  );
}

export default App;
