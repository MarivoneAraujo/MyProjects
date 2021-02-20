import React from 'react'
import { Central, Quote, Line,Author, GridAbout, H1, Line2, Author2, Author2Detail, } from './styled/styledProject.js';


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
