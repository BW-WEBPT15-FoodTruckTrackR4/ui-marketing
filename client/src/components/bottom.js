
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components'

import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'

const Below = styled.div ` 
margin-top: 30%;
.slider {
  width: 100%;
  height: 30vw;
}
.slides {
  width: 100%;
  height: 30vw;
}
@media screen and (max-width: 800px) {
  margin-top: 100%;
.slider {
  width: 100%;
  height: 30vw;
}
}
`

const Bottom = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
      <Below>
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={0}
        leftChevron={<button class="btn">{'<'}</button>}
        rightChevron={<button class="btn">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="slides"><img class="slider" src={one}/></div>
        <div className="slides"><img class="slider" src={two}/></div>
        <div className="slides"><img class="slider" src={three}/></div>
      </ItemsCarousel>
    </div>
    </Below>
  );
};

export default Bottom;