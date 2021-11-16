import React,{ useMemo } from 'react';
import './index.css'
import bgIcon from '../../../assests/imgs/bg.png'
import infoIcon from '../../../assests/imgs/info_702_788.png'

const windowWidth = document.body.clientWidth;
const scrollBgHeight = windowWidth * (683 / 375);
const colArr = new Array(Math.ceil(scrollBgHeight / 40) + 10).fill(1);
const rowArr = new Array(Math.ceil(windowWidth / 80)).fill(1);

const YueKangCode: React.FC = () => {
  return (
    <div className="container">
      {/* <img className="img" src="../../../assests/imgs/yuekangma.jpg" /> */}
      <div className="bgContainer">
        {
          colArr.map((_, index) => <div key={`line_${index}`} className="bgLineContainer">
            {
              rowArr.map((_, index2) => <img key={`img_${index2}`} className="bgImg" src={bgIcon} />)
            }
          </div>)
        }
      </div>
      <img className="infoContainer" src={infoIcon} />
    </div>
  )
}

export default YueKangCode;