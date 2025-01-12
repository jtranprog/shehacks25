import "./blind-box.css";
import React, {useState} from 'react';

const BlindBox = () => {
    const [boxOpened, setBoxOpened] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [boxInnerText, setBoxInnerText] = useState('');
    const sonnys = [
        ".././images/sonny1.png",
        ".././images/sonny2.png",
        ".././images/sonny3.png",
        ".././images/sonny4.png",
        ".././images/sonny5.png",
      ];
    const handleBoxClick = () => {
      if (!boxOpened) {
        setBoxOpened(true);
        setSelectedImage(sonnys[Math.floor(Math.random() * sonnys.length)]);      
    } else {
        setBoxOpened(false);
        setSelectedImage(".././images/null.png");      

    }
    console.log(selectedImage);
    };
    
  return (
    <div className="container">
    <div className={`box ${boxOpened ? 'box-open' : ''}`} onClick={handleBoxClick}>
      
      <div className="box-side box-side-front"></div>
      <div className="box-side box-side-back"></div>
      <div className="box-side box-side-left"></div>
      <div className="box-side box-side-right"></div>
      <div className="box-side box-side-top"></div>
      <div className="box-side box-side-bottom"></div>
      
        <img src={selectedImage} className="emoji" />
      
      <style>
        {`
          .box::before {
            content: '${boxInnerText}';
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default BlindBox;
