import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from 'styled-components'

const Foot = styled.div `
.footer {
    background-color: #e44635 !important;
}
a {
    color: white;
    text-decoration: none;
    line-height: 4;
}

@media screen and (max-width: 800px) {
  .social {
    display: flex;
    justify-content: center;
  }
}

`

const FooterPage = () => {
  return (
      <Foot>
    <MDBFooter className="font-small pt-4 mt-1 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="2">
            <ul>
              <li className="list-unstyled">
                <a href="/about">About</a>
              </li>
              <li className="list-unstyled">
                <a href="https://foodtrucktrackr4.netlify.com/">Login</a>
              </li>
              <li className="list-unstyled">
                <a href="https://foodtrucktrackr4.netlify.com/">Register</a>
              </li>
            </ul>
            
          </MDBCol>
          <MDBCol md="2">
            <ul>
              <li className="list-unstyled">
                <a href="/help">Help</a>
              </li>
              <li className="list-unstyled">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="/community">Community</a>
              </li>
            </ul>
            
          </MDBCol>
          <MDBCol md="4">
            <ul>
              <li className="list-unstyled">
                <a href="/foodtrucks">Food Trucks Near You</a>
              </li>
              <li className="list-unstyled">
                <a href="/location">Location</a>
              </li>
              <li className="list-unstyled">
                <a href="/career">Career</a>
              </li>
            </ul>
            </MDBCol>
            <div class="mb-5 flex-center col s3">
            <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
         
          <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a class="gplus-ic">
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a class="li-ic">
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a class="ins-ic">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
          <a class="pin-ic">
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
            </div>
  
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Food Truck Trackr
        </MDBContainer>
      </div>
    </MDBFooter>
    </Foot>
  );
}

export default FooterPage;