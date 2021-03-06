import React, { Component } from 'react';

import cat1 from './images/doneCats/cat1.jpg';
import cat2 from './images/doneCats/cat2.jpg';
import cat3 from './images/doneCats/cat3.jpg';
import cat4 from './images/doneCats/cat4.jpg';
import cat5 from './images/doneCats/cat5.jpg';
import cat6 from './images/doneCats/cat6.jpg';
import cat7 from './images/doneCats/cat7.jpg';
import cat8 from './images/doneCats/cat8.jpg';
import cat9 from './images/doneCats/cat9.jpg';
import cat10 from './images/doneCats/cat10.jpg';
import cat11 from './images/doneCats/cat11.jpg';
import cat12 from './images/doneCats/cat12.jpg';
import cat13 from './images/doneCats/cat13.jpg';
import cat14 from './images/doneCats/cat14.jpg';

class About extends Component {
  render(){
    return(
    <div className="about">
      <div className="sub-header">
        <h1>I am the illest, the most lit.</h1>
        <h1 className="oneHundred">I keep it fresh 100%.</h1>
        <h2>Look at all of these cool pictures of me.</h2>
        <h2>Learn more of my awesomeness. Be impressed.</h2>
      </div>
      <div className="image-list">
        <div><img alt="cat"  src="https://pbs.twimg.com/profile_images/556148124616757248/w6B17WYT.jpeg"/></div>
        <div><img alt="cat" src={cat1} /></div>
        <div><img alt="cat" src={cat2} /></div>
        <div><img alt="cat" src={cat6} /></div>
        <div><img alt="cat"  src='https://i.pinimg.com/736x/ec/a3/1b/eca31b57f29254933f6515344d91c2a9--being-sassy-quotes-sassy-tumblr-quotes.jpg' /></div>
        <div><img alt="cat" src={cat11} /></div>
        <div><img alt="cat" src={cat4} /></div>
        <div><img alt="cat" src={cat5} /></div>
        <div><img alt="cat"  src="https://i.pinimg.com/736x/90/d9/d3/90d9d3e6a116a1ff6892f5467ab073ab--sassy-sayings-sassy-funny-quotes.jpg"/></div>
        <div><img alt="cat"  src='https://i.pinimg.com/736x/4e/7d/e3/4e7de36838e48671496a6d98fd7be03c--real-talk-sarcasm.jpg'/></div>
        <div><img alt="cat" src={cat7} /></div>
        <div><img alt="cat"  src={cat8} /></div>
        <div><img alt="cat"  src={cat13} /></div>
        <div><img alt="cat"  src="http://quotesnhumor.com/wp-content/uploads/2017/04/30-Best-Sassy-Quotes-for-Your-Instagram-15-Sassy-Sassy-Quotes.jpg"/></div>
        <div><img alt="cat" src={cat10} /></div>
        <div><img alt="cat"  src="https://i.pinimg.com/736x/98/2b/8a/982b8a14050d085334aa4721cf9e284c--confidence-quotes-sassy-girl.jpg"/></div>
        <div><img alt="cat" src={cat12} /></div>
        <div><img alt="cat" src={cat14} /></div>
        <div><img alt="cat" src={cat3} /></div>
        <div><img alt="cat" src={cat9} /></div>
        <div><img alt="cat"  src="https://i.pinimg.com/736x/39/94/a1/3994a1502d357bde79824358cacde347--humor-quotes-funny-sayings-humor.jpg"/></div>
      </div>
    </div>
  )
  }
}

export default About;
