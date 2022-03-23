import React  from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import axios from 'axios';
let youurl = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAgcQ3eXZnV8T36YFRUEhyPnA6_wmn2W28&chart=mostPopular&regionCode=KR';



class Youtube extends React.Component {
    state = {
        url : 'https://www.youtube.com/watch?v=',
        url1 : '',
        url2 : '',
        url3 : '',
        cnt : 0
    };

    render() {

        async function apiload() {
            const response = await axios.get(youurl);
            return response;
        }
        if(this.state.cnt===0){
            apiload().then((value) =>
                this.setState({
                    url1: this.state.url + value.data.items[0].id,
                    url2: this.state.url + value.data.items[1].id,
                    url3: this.state.url + value.data.items[2].id,
                    cnt : 1
                })
            )
        }

        return (

            <Container id={"youcon"}hidden={true}>
                <Part1>
                    <ReactPlayer
                        height = {180*0.8} width={320*0.8} muted={true}
                        url={this.state.url1} playing={false} controls/>
                    {/* <ReactPlayer
            left={10}
            height = {180.0} width={320} muted={true}
            url={this.state.url2} playing controls/> */}
                </Part1>
                <Part2>
                    {/* <ReactPlayer
             height = {180.0} width={320} muted={true}
              url={this.state.url1} playing controls/> */}
                    <ReactPlayer
                        // left={5}
                        height = {180*0.8} width={320*0.8} muted={true}
                        url={this.state.url2} playing={false} controls/>
                </Part2>
                <Part3>
                    {/* <ReactPlayer
             height = {180.0} width={320} muted={true}
              url={this.state.url1} playing controls/> */}
                    <ReactPlayer
                        // left={5}
                        height = {180*0.8} width={320*0.8} muted={true}
                        url={this.state.url3} playing={false} controls/>
                </Part3>
            </Container>

        );
    }


}


const Container = styled.div`
  position: absolute;
  /* transform: translate(-50%, -50%); */
  left: 5%;
  top: 50%;
  /* width: 160.0px;
  height: 90.0px; */
  /* width: 800.0px; */
  height: 100.0px;
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
  display: 'flex';
  flex-direction: 'row';
  /* visibility: hidden; */
`;

const Part1 = styled.div`
position: fixed;
left: 50px;
`;

const Part2 = styled.div`
position: fixed;
left: 320px;
`;
const Part3 = styled.div`
position: fixed;
left: 590px;
`;
export default Youtube;