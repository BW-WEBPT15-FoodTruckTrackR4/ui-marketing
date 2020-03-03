import React from 'react';
import styled from 'styled-components'

import header from '../images/headerabout.png'

const Head = styled.div `
#head {
    margin-top: 5%;
    width: 100%;
}
.mission {
    display: flex;
    flex-flow: column;
    text-align: center;
    margin-top: 5%;
}
h1 {
    font-size: 3rem;
    color: #e44635;
}
p {
    font-family: 'Poppins';
    padding: 3% 25%;
    line-height: 2;
}
`


const Top = () => {
    return (
        <Head>
            <img id ="head" src ={header} alt= "header"/>
            <div class="mission">
                <h1>Our Mission</h1>
                <p>Every true "foodie" worth their salt knows that some of the best food in any city can be found on food trucks - but knowing when and where those trucks will be can be next to impossible, and discovering new ones often relies on word-of-mouth that is long on tales of delicious, but short on actual details. FoodTruck TrackR was designed to make finding and eating at a food truck fast, easy and fun.  Quickly see all of our Operator partners' nearby food trucks that currently open, view their current real-time GPS location, know the scheduled arrival and departure times, view photos, read customer reviews and much more, all in our easy to use app.  Try FoodTruck TrackR today, and enjoy the best food YOUR city has to offer. </p>
            </div>
        </Head>
    )
}

export default Top;