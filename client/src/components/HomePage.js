import React from 'react';
import Nav from './nav.js'
import Footer from './footer.js'
import Action from './Action.js'
import Bottom from './bottom.js'

const Homepage = () => {
    return (
       <div>
           <Nav />
           <Action />
           <Bottom />
           <Footer />
       </div> 
    )
}


export default Homepage;