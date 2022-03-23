import Toggle from 'react-styled-toggle'
import React from "react";
import styled from "styled-components";
import $ from "jquery";
import axios from 'axios';
class MC extends React.Component {
  
  state = {
    value1 : 0,   //0 none 1 choose
    value2 : 0,
    value3 : 0,
    value4 : 0,
    value5 : 0,
    cnt :0 ,   //0nomal 1 login 
    cnt2 :0
  }; 
  
  render() {
   if(this.state.cnt==0){
     if(this.props.mi.check==1){
      if(this.state.value1===1){
        $(document).ready(function(){
        $('#1').trigger('click');
        });
      }
      if(this.state.value2===1){
        $(document).ready(function(){
        $('#2').trigger('click');
        });
      }
      if(this.state.value3===1){
        $(document).ready(function(){
        $('#3').trigger('click');
        });
      }
      if(this.state.value4===1){
        $(document).ready(function(){
        $('#4').trigger('click');
        });
      }
      if(this.state.value5===1){
        $(document).ready(function(){
        $('#5').trigger('click');
        });
      }
      if(this.props.mi.value1===1){
        $(document).ready(function(){
        $('#1').trigger('click');
        });
      }
      if(this.props.mi.value2===1){
        $(document).ready(function(){
        $('#2').trigger('click');
        });
      }
      if(this.props.mi.value3===1){
        $(document).ready(function(){
        $('#3').trigger('click');
        });
      }
      if(this.props.mi.value4===1){
        $(document).ready(function(){
        $('#4').trigger('click');
        });
      }
      if(this.props.mi.value5===1){
        $(document).ready(function(){
        $('#5').trigger('click');
        });
      }
       this.setState({
          // value1:this.props.mi.value1,
          // value2:this.props.mi.value2,
          // value3:this.props.mi.value3,
          // value4:this.props.mi.value4,
          // value5:this.props.mi.value5,
          cnt:1
    }); 
  }
}
// if(this.state.cnt2==1){
//     if(this.state.cnt==1){
//         if(this.state.value1===1){
//           $(document).ready(function(){
//           $('#1').trigger('click');
//           });
//         }
//         if(this.state.value2===1){
//           $(document).ready(function(){
//           $('#2').trigger('click');
//           });
//         }
//         if(this.state.value3===1){
//           $(document).ready(function(){
//           $('#3').trigger('click');
//           });
//         }
//         if(this.state.value4===1){
//           $(document).ready(function(){
//           $('#4').trigger('click');
//           });
//         }
//         if(this.state.value5===1){
//           $(document).ready(function(){
//           $('#5').trigger('click');
//           });
//         }
//         this.setState({cnt:2})
//       }
//     }
        
   
  
  // console.log(document.getElementsByClassName("wea")[0])
  let formData = [
    { id: 1, name: "날씨" },
    { id: 2, name: "검색창" },
    { id: 3, name: "유튜브" },
    { id: 4, name: "메모" },
    // { id: 5, name: "사이트" },
  ];
  // if(this.state.value1===1){
    console.log(this.state)
    return (
      <Container>
        <Button onClick={this.handlesetup}>X</Button>
         {formData.map((item) => (
        <label id={item.id} key={item.id} className="innerBox"value={item.name}>
             <Toggle
                labelLeft={item.name}
                value={item.id}
                name={item.name}
                type="checkbox"
                onChange={(e) => this.handler1(e)}
              />
           {/* <div>{item.name}</div> */}
        </label>
      ))}
        {/* <Toggle checked name='wea'onChange={this.handler1}labelLeft='날씨'/><Toggle/><Toggle/> */}
        {/* <input type="checkbox" class="qwe" value=""/> */}
      </Container>
    );
  
  }
  
  handlesetup=event=>{
    $('#mccon').hide();
  }
  handler1 = event => { 
    let sid = this.props.id
      function posting(pid,pvalue){
          const data = {
              id: sid,
              moduleId: pid,
              on: pvalue}
          let sendata = JSON.stringify(data)
          console.log(sendata)
          if (sid !== "") {
              axios.post('http://localhost:8080/api/v1/user_module', sendata, {
                  headers: {
                      'Content-Type': 'application/json'
                  }
              })
          }
      }
    let tmp = (event.target.value);
    if(tmp ==='1'){if(this.state.value1===1){this.setState({value1: 0});posting(tmp,0);$("#clockcon").hide()}else{this.setState({value1: 1});posting(tmp,1);$("#clockcon").show()}}
    if(tmp ==='2'){if(this.state.value2===1){this.setState({value2: 0});posting(tmp,0);$("#searchcon").hide()}else{this.setState({value2: 1});posting(tmp,1);$("#searchcon").show()}}
    if(tmp ==='3'){if(this.state.value3===1){this.setState({value3: 0});posting(tmp,0);$("#youcon").hide()}else{this.setState({value3: 1});posting(tmp,1);$("#youcon").show()}}
    if(tmp ==='4'){if(this.state.value4===1){this.setState({value4: 0});posting(tmp,0);$("#todocon").hide()}else{this.setState({value4: 1});posting(tmp,1);$("#todocon").show()}}
    if(tmp ==='5'){if(this.state.value5===1){this.setState({value5: 0});posting(tmp,0);$("#sitecon").hide()}else{this.setState({value5: 1});posting(tmp,1);$("#sitecon").show()}}
    // console.log(this.state)
  };
}


const Container = styled.div`
 
 position: absolute;
  transform: translate(-80%, -50%);
  left: 0%;
  top: 20%;
  width: 400px;
  height: 150px;
  color: black;
  background-color: 
  rgba(255, 255, 255, 0.5); 
  margin-top: 40px;
  font-size: 4px;
  text-align: center;
  /* visibility:hidden; */
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0%;
  width: 33px;
  height: 33px;
  padding: 3px;
  background-color: 
  rgba(255, 255, 255, 1); 
`;
export default MC;
