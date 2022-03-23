import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
let cnt =0;
function Weather() {
  
  const [city, setcity] = useState("city");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("tem");

  if(cnt===0){
      navigator.geolocation.getCurrentPosition(aaa);
      function aaa (pos) {
        // console.log(pos.coords.longitude);
        let url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
        url = url + pos.coords.latitude+'&lon='+pos.coords.longitude+'&appid=15525bfaad597c7c04d48a441d0f3145'
        async function apiload() {
          const response = await axios.get(url);
          return response;
        } 
            apiload().then((value) => 
            {
            const fcity = () => setcity(value.data.name)
            const ficon = () => setIcon("http://openweathermap.org/img/w/" + value.data.weather[0].icon + ".png")
            const ftemp = () => setTemp(parseFloat(parseFloat(value.data.main.temp) - parseFloat("273.15")).toFixed(1)+"℃");
            fcity()
            ficon()
            ftemp()
          
          }
            )
      }
    // console.log("test")

    cnt =1;
  }

  return (
    <>
      {/* <Container> */}
      <Te id={"clockcon"}hidden={true}>&nbsp;&nbsp;{city}/{temp}<img src={icon}/></Te>
    {/* </Container> */}
    </>
  );
}
// const Container = styled.div`
//   position: absolute;
//   transform: translate(-50%, -50%);
//   left: 80%;
//   top: 22.5%;
//   color: black;
//   margin-top: 40px;
//   font-size: 40px;
//   text-align: center;
//   background-color: 
//   rgba(255, 255, 255, 0.5); 
// `;
const Te = styled.div`
  position: relative;
  transform: translate(-50%, 0%);
  left: 50%;
  width: 60%;
  background-color: 
  rgba(255, 255, 255, 0.5); 
  font-size: 22px;
  font-weight: 600;
`;
// const Image = styled.image`
//   position: relative;
//   transform: translate(-50%, 0%);
//   left: 50%;
//   width: 60%;
//   background-color: 
//   rgba(255, 255, 255, 0.5),; 
// `;
export default Weather;