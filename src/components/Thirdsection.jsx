import React from 'react'
import kiyim from './assets/kiyim.jpg'
import kiyim2 from './assets/kiyim2.jpg'
import kiyim3 from './assets/kiyim3.jpg'
import kiyim4 from './assets/kiyim4.jpg'
import './style/Thirdsection.css'

const Thirdsection = () => {
  return (
   <section className='main' >
     
    <div className='main-paragraph' >
        <h1>  GOOD GIFT MADE FROM US </h1>
    </div>

    <div className="allgifts">
        <div className="gifts">
            <div className="image">
                <img src={kiyim} alt="" />
            </div>
            <p>   Send as gift </p>
            <p>  Ship your gift with a free transport </p>
        </div>
        <div className="gifts">
            <div className="image">
                <img src={kiyim2} alt="" />
            </div>
            <p>   Send as gift </p>
            <p>  Ship your gift with a free transport </p>
        </div>
        <div className="gifts">
            <div className="image">
                <img src={kiyim3} alt="" />
            </div>
            <p>   Send as gift </p>
            <p>  Ship your gift with a free transport </p>
        </div>
        <div className="gifts">
            <div className="image">
                <img src={kiyim4} alt="" />
            </div>
            <p>   Send as gift </p>
            <p>  Ship your gift with a free transport </p>
        </div>
    </div>

   </section>
  )
}

export default Thirdsection