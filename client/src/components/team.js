import React from 'react';
import styled from 'styled-components'
import alex from '../images/alex.png'
import aaron from '../images/aaron.png'
import mary from '../images/mary.png'

const Team = styled.div `
#stripone {
    background-color: #e44635;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    margin: 5% 0;
}
h2 {
    font-size: 2.5rem;
    text-align:center;
    padding: 3%;
    color: #fff;
}
img {
    padding: 3%;
}
.team_img {
    display: flex;
    justify-content: center;
}

.img-responsive {
    width: 100%;
    margin-bottom: 40%;
}
p , h2 {
    font-family: 'Poppins';
}

.hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
  }
  
  .hovereffect .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  }
  
  .hovereffect img {
    display: block;
    position: relative;
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
  }
  
  .hovereffect:hover img {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /><feGaussianBlur stdDeviation="3" /></filter></svg>#filter');
    filter: grayscale(1) blur(3px);
    -webkit-filter: grayscale(1) blur(3px);
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
  
  .hovereffect h2 {
    text-transform: uppercase;
    text-align: center;
    position: relative;
    font-size: 17px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.6);
  }
  
  .hovereffect p.info {
    display: inline-block;
    text-decoration: none;
    padding: 25%;
    width: 100%;
    background-color: transparent;
  }

  .hovereffect i {
      display: inline-block;
      margin: 5%;
  }
  
  .hovereffect p.info:hover {
    color: white;
  }
  
  .hovereffect p.info, .hovereffect h2, .hovereffect i {
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
    -webkit-transition: all 0.4s ease-in;
    transition: all 0.4s ease-in;
    opacity: 0;
    filter: alpha(opacity=0);
    color: #fff;
    text-transform: uppercase;
  }
  
  .hovereffect:hover p.info, .hovereffect:hover h2, .hovereffect:hover i {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }
`
const TeamPage = () => {
    return (
        <Team>
            <span id ="stripone">
                <h2>Meet the Team</h2>
                <div class="team_img">
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="hovereffect">
                                <img class="img-responsive" src={alex} alt="alex"/>
                                <div class="overlay">
                                <h2>PL/ React I Developer</h2>
                                <p class="info">Alexander Cooter</p>
                                <a href=""><i class="fab fa-github fa-2x"></i></a>
                                <a href=""><i class="fas fa-envelope fa-2x"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="hovereffect">
                                <img class="img-responsive" src={aaron} alt="aaron"/>
                                <div class="overlay">
                                <h2>React II Developer</h2>
                                <p class="info">Aaron Doran </p>
                                <a href="https://github.com/AJWD92"><i class="fab fa-github fa-2x"></i></a>
                                <a href="mailto:wesley.gossett@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="hovereffect">
                                <img class="img-responsive" src={mary} alt="mary"/>
                                <div class="overlay">
                                <h2>UI Developer/ Backend Developer</h2>
                                <p class="info">Mary Clayton </p>
                                <a href="https://github.com/mary-clayton"><i class="fab fa-github fa-2x"></i></a>
                                <a href="mailto:mary.cathlean@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
            </span>
        </Team>
    )
}

export default TeamPage;