import React from 'react'
import './style/Secondsection.css';
import kiyim from './assets/kiyim.jpg'
import kiyim2 from './assets/kiyim2.jpg'
import kiyim3 from './assets/kiyim3.jpg'
import kiyim4 from './assets/kiyim4.jpg'


const Secondsection = () => {
  return (
     <section   >
         <div className="allcard">
             <div className="card">
                 <img src={kiyim} alt="" />
                 <p>Uni</p>
                 <h1>best clothes ever</h1>
             </div>
             <div className="card">
                 <img src={kiyim2} alt="" />
                 <p>Uni</p>
                 <h1>best clothes ever</h1>
             </div>
             <div className="card">
                 <img src={kiyim3} alt="" />
                 <p>Uni</p>
                 <h1>best clothes ever</h1>
             </div>
             <div className="card">
                 <img src={kiyim4} alt="" />
                 <p>Uni</p>
                 <h1>best clothes ever</h1>
             </div>
         </div>
     </section>
  )
}

export default Secondsection