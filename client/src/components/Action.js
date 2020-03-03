import React from 'react';
import styled from 'styled-components'

import phoneone from '../images/topphone.png'
import phonetwo from '../images/bottomphone.png'

const Action = styled.div `
a {
    color: white;
    text-decoration: none;
}
.content {
    position: absolute;
}
h1 {
    color: white;
    display: flex;
    text-align: center;
    font-size: 2rem;
    line-height: 2;
}
.strip {
    background-color: #ff5757;
    height: 250px;
    width: 100%;
    margin-top: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5rem;
    line-height: 2;
    color: white;
}
.texts {
    margin-right: 0%;
    display: flex;
    flex-flow: column;
    text-align: center;
    font-size: 1.3rem;
}
.phones {
margin-right: 15%;
display: flex;
justify-content: center;
width: 0%;
}
#phoneone {
    position: absolute;
    margin-left:10%;
    margin-top: 3%;
}

.header {
    margin-top: 5%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
.button {
display: flex;
justify-content: center;
}
button {
    display: flex;
    justify-content: center;
    margin-top: 20%;
    width: 200px;
    height: 50px;
    font-size: 1rem;
    font-family: 'Fjalla One';
    background-color: #ff5757;
    color: white;
    }

    @media screen and (max-width: 800px) {
        .strip {
            width: 100%;
            flex-flow: wrap;
        }
        .phones {
            width: 100%;
        }
        .texts {
            margin-top: 5%;
        }
        #phoneone, #phonetwo {
            width: 50%;
            margin-left: 30%;
            margin-top: 20%;
        }
        #phonetwo {
            margin-right: 20%;
        }
    }
`

const Nav = () => {
    return (
        <Action>
            <div class="header">
            {/* <span id ="strip"></span> */}
            <h1>
                Want to track your favorite food trucks and want to try new foods? </h1>
               <h1>Try Food Truck Trackr!</h1>
           
            <div className="button">
            <button class="btn"><a href="/register">LEARN MORE</a></button>
            </div>
            </div>

            <span class= "strip">
                <div class="texts">
                <h2>
                    Access Food Truck Trackr Today!
                </h2>
                <h4>You will be amazed what kinds of food 
                    <br/>
                    you can have in your area!</h4>
                <ul>
                    <li>Find the closest food trucks near by</li>
                    <li>Connect with a community of Foodies</li>
                    <li>Get Notified of special deals and discounts</li>
                </ul>
                </div>
                <div class="phones">
                <img id= "phoneone" src={phoneone}/>
                <img id= "phonetwo" src={phonetwo}/>
                </div>
            </span>
        </Action>
    )
}
export default Nav;