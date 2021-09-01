import React from "react";
import './style.css';
import black_25 from 'images/tea/black_25.jpg';
import black_100_tb from 'images/tea/black_100_tb.jpg';
import black_50_tb from 'images/tea/black_50_tb.jpg';
import pack_225g from 'images/tea/pack_225g.jpg';
import tin_300g from 'images/tea/tin_300g.jpg';
import pack_450g from 'images/tea/pack_450g.jpg';
import thumbnail from 'images/tea/thumbnail.png';
import pdf from 'slides/simondou.pdf';
import { Button } from '@material-ui/core';

const Simondou = () => {
  const openPdf = () => {
    window.open(pdf);
  }

  return (
      <section style={{paddingLeft: '2%', paddingTop: '1%'}}>
        <div>DOWNLOAD</div>
        <div style={{width: '40%', marginLeft: '-0.5%', marginBottom: '1%'}}>
          <Button onClick={openPdf}>
            <img src={thumbnail}/>
          </Button>
        </div>
        <div className="flex">
          <img style={{width: '30%'}} src={black_25}/>
          <img style={{width: '30%', paddingLeft: '3%'}} src={black_100_tb}/>
          <img style={{width: '30%', paddingLeft: '3%'}} src={black_50_tb}/>
        </div>
        <div className="flex pt-16 pb-16">
          <img style={{width: '30%'}} src={pack_225g}/>
          <img style={{width: '30%', paddingLeft: '3%'}} src={tin_300g}/>
          <img style={{width: '30%', paddingLeft: '3%'}} src={pack_450g}/>
        </div>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/PHjUOaoAXjI`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </section>
  )
}

export default Simondou;
