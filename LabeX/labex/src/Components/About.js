import React from 'react'
import styled from 'styled-components'

const Central = styled.div` 
width: 100%;
height: 700px;;

background-image: url('http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/06/europe_s_rockets/19421217-6-eng-GB/Europe_s_rockets.jpg');
background-repeat: no-repeat;
background-size:100%;
color: white;
display: grid;
grid-template-rows: 1fr 1fr;


@media (min-width:500px) and (max-width: 800px) {

background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100%  
}

@media (max-width: 499px) {
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100% 

}

`
const Quote = styled.div`
margin-left: 20px;

@media (min-width:500px) and (max-width: 800px) {
  margin-left: 1px;

}

@media (max-width: 499px) {
  margin-left: 1px;

}


`

const Line = styled.div`
font-family: monospace;
font-size: 20px;
margin-left: 240px;
padding: 20px;
text-shadow: 1px 1px 5px blue;

@media (min-width:500px) and (max-width: 800px) {
  margin-left: 10px;

}

@media (max-width: 499px) {
  margin-left: 10px;

}

`
const Author = styled.div`
font-family: monospace;
font-size: 17px;
margin-left: 630px;
text-shadow: 1px 1px 5px blue;


@media (min-width:500px) and (max-width: 800px) {
  margin-left: 5px;

}

@media (max-width: 499px) {
  margin-left: 250px;

}

`
const GridAbout = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 2fr;
margin-top: -90px;
margin-left: 30%;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


`
const H1 = styled.h1`
font-family: monospace;
`
const Line2 = styled.div`
font-family: monospace;
font-size: 22px;
margin-left: 850px;

@media (min-width:500px) and (max-width: 800px) {
  margin-left: 20px;

}

@media (max-width: 499px) {
  margin-left: 20px;

}
`
const Author2 = styled.div`
font-family: monospace;
font-size: 20px;
margin-left: 1030px;
padding: 15px;

@media (min-width:500px) and (max-width: 800px) {
  margin-left: 20px;

}

@media (max-width: 499px) {
  margin-left: 15px;

}

`
const Author2Detail = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 10px;
margin-left:-60px;

@media (min-width:500px) and (max-width: 800px) {
  margin-left: 10px;

}

@media (max-width: 499px) {
  margin-left: 10px;

}
`

function About() {
  return (
    <div>

      <Central>

        <Quote>
            <Line>"Nunca se fez nada grande sem uma esperança exagerada",</Line>
            
            <Author>Jules Verne</Author>
        </Quote>

        <div>
            <div></div>
            <GridAbout>

              <div></div>
              <div></div>
              <div></div>
              <H1></H1>
              <div></div>

            </GridAbout>
              <div>
                <Line2>"O que mais vou lembrar sobre o voo é que foi divertido. Na verdade, foi a coisa mais divertida que vivenciei em minha vida!",</Line2>
        
                <Author2>Sally K. Ride, <Author2Detail>primeira mulher a orbitar a Terra numa nave espacial.</Author2Detail></Author2>
              </div>

        </div>
            

      </Central>
      
    </div>
  );
}

export default About;
