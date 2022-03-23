import React from "react";
import styled from "styled-components";
import mark from './image/mark.png';
import setup from './image/setup.png'
import $ from "jquery";
import axios from 'axios';
class Wallpaper extends React.Component {
  state = {
    query: "",
    cnt:0     //  0로그인전 1로그인후 
  };
  render() {
    if(this.state.cnt==0){
       if(this.props.name!==""){
        this.setState({
        query:this.props.name,
        cnt:this.state.cnt+1
        });
      }
    }
    return (
      <Container query={this.state.query}>
        <img src= {mark} alt="Logo" width={90.8*1.5} height={51.1*1.5} onClick={this.onlogoclick}/>
        <Input
          placeholder="테마를 입력하세요"
          onKeyPress={this.handleInputKeyPress}
        ></Input>
        {/* <Button onClick={this.handlesetup}/> */}
        <img src= {setup} alt="Logo" align={"right"} width={40} height={40} onClick={this.handlesetup}/>
      </Container>
    );
  }
  handlesetup=event=>{
      $('#mccon').show();
  }
    handleInputKeyPress = event => {
        if (event.key === "Enter") {
            this.setState({
                query: event.target.value
            });
            const data = {
                id: "",
                content: ""
            }
            data.id= this.props.id;
            data.content= event.target.value;
            let sendata = JSON.stringify(data)
            axios.post('http://localhost:8080/api/v1/theme',sendata, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            event.target.value = "";
        }
    };
  
  onlogoclick = event => {
    // alert("Dd");
     let url = 'http://localhost:3000/';
    // let url = 'http://www.naver.com';
      window.location.href=(url);
     };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      rgba(20, 20, 20, 0.5)100%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  right: 40px;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;
/* const Button = styled.button`
  position: absolute;
  top: 0;
  right: 50%;
  width: 190px;
  height: 33px;
  padding: 3px;
`; */
/* const Image = styled.image`
  top: 0;
  left: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
`; */

export default Wallpaper;