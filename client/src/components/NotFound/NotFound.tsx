import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import './NotFound.scss';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  const [gif, setgif] = useState(null);

useEffect(()=>{
  axios.get("https://i.gifer.com/7iJg.gif").then((response:any)=>setgif(response))
},[])
 return <>
 <div className="NotFound">
   <div className="stage">
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
</div>
  </div>
 </>
};

export default NotFound;
