import React from "react";
import styled from "styled-components";
import axios from 'axios';

class Search extends React.Component {
    state = {
    };

    render() {

        return (
            <Container id={"searchcon"}hidden={true}>
                <Input
                    className="input"
                    // placeholder= {this.state.search}
                    placeholder="검색창"
                    onKeyPress={this.handleInputKeyPress}
                >
                </Input>
                <Button onClick={this.handleInputclick}>검색</Button>
            </Container>
        );
    }

    handleInputKeyPress = event => {
        // console.log(this.state.search)
        // console.log(event.target.value)
        // console.log(document.getElementsByClassName("input")[0].value)
        if (event.key === "Enter") {
            // let nurl = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=';
            let url = 'https://www.google.com/search?q=';
            // nurl = nurl + event.target.value;
            url = url + event.target.value;
            window.open(url);
            // window.open(nurl);//팝업차단됨
            const data = {
                id: "",
                content: ""}
            data.id=this.props.id;
            data.content= event.target.value;
            console.log(data)
            let sendata = JSON.stringify(data)
            axios.post('http://localhost:8080/api/v1/search',sendata, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            event.target.value = "";
        }
    };
    handleInputclick = event => {
        // console.log(this.state.search)
        // console.log(event.target.value)
        // console.log(document.getElementsByClassName("input")[0].value)

        // let nurl = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=';
        let url = 'https://www.google.com/search?q=';
        // nurl = nurl + document.getElementsByClassName("input")[0].value;
        url = url + document.getElementsByClassName("input")[0].value;
        window.open(url);
        // window.open(nurl);//팝업차단됨
        const data = {
            id: "",
            content: ""}
        data.id= this.props.id;
            data.content= document.getElementsByClassName("input")[0].value;
            console.log(data);
        let sendata = JSON.stringify(data)
        axios.post('http://localhost:8080/api/v1/search',sendata, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        document.getElementsByClassName("input")[0].value = "";
    };
}


const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 43%;
  width: 500px;
  height: 35px;
  color: white;
  background: 
    linear-gradient(
      rgba(20, 20, 20, 0.1)100%,
      rgba(20, 20, 20, 1)
    ),
    yellow;
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const Input = styled.input`
  position: absolute;
  transform: translate(-50%, 0%);
  top: 0;
  left: 50%;
  width: 100%;
  height: 35px;
  padding: 3px;
  /* background: transparent; */
  /* outline: none; */
  border: none;
  font-size: 30px;
  color: black;
`;
const Button = styled.button`
  position: absolute;
  /* transform: translate(0%, 0%); */
  top: 4px;
  right: 0%;
  width: 44px;
  height: 33px;
  /* padding: 3px; */
  /* background: transparent; */
  /* outline: none; */
  border: none;
  /* font-size: 30px;
  color: red; */
  background-color: gray;
`;

export default Search;