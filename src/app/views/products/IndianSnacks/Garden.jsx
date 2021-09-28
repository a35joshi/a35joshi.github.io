import React from "react";
import logo from 'images/indian_snacks/garden/logo.jpeg';
import pic_1 from 'images/indian_snacks/garden/1.jpeg';
import pic_2 from 'images/indian_snacks/garden/2.jpeg';
import pic_3 from 'images/indian_snacks/garden/3.jpeg';
import pic_4 from 'images/indian_snacks/garden/4.jpeg';
import pic_5 from 'images/indian_snacks/garden/5.jpeg';

const Vishnu = () => {
  return (
      <section style={{paddingLeft: '2%', paddingTop: '1%'}}>
        <div className="flex">
          <img style={{width: '50%'}} src={logo}/>
        </div>
        <div className="flex">
          <img style={{width: '75%'}} src={pic_1}/>
        </div>
        <div className="flex pb-16">
            <img style={{width: '75%'}} src={pic_2}/>
        </div>
        <div className="flex pt-16 pb-16">
            <img style={{width: '75%'}} src={pic_3}/>
        </div>
        <div className="flex pt-16">
            <img style={{width: '75%'}} src={pic_4}/>
        </div>
        <div className="flex pb-16">
            <img style={{width: '75%'}} src={pic_5}/>
        </div>
      </section>
  )
}

export default Vishnu;
