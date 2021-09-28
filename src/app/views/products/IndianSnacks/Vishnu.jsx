import React from "react";
import chakali from 'images/indian_snacks/vishnu/chakali.jpeg';
import chivada from 'images/indian_snacks/vishnu/chivada.jpeg';
import garlic_sev from 'images/indian_snacks/vishnu/garlic_sev.jpeg';
import plain_sev from 'images/indian_snacks/vishnu/plain_sev.jpeg';
import shankarpali from 'images/indian_snacks/vishnu/shankarpali.jpeg';
import sale from 'images/indian_snacks/vishnu/sale.jpeg';

const Vishnu = () => {
  return (
      <section style={{paddingLeft: '2%', paddingTop: '1%'}}>
        <div className="flex">
          <img style={{width: '30%'}} src={chakali}/>
          <img style={{width: '30%', paddingLeft: '3%'}} src={chivada}/>
          <img style={{width: '30%', paddingLeft: '3%'}} src={garlic_sev}/>
        </div>
        <div className="flex pt-16 pb-16">
          <img style={{width: '30%'}} src={plain_sev}/>
          <img style={{width: '30%', paddingLeft: '3%'}} src={shankarpali}/>
        </div>
        <img style={{width: '80%' }} src={sale}/>
      </section>
  )
}

export default Vishnu;
