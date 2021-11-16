import React from 'react';
import './index.css'
import bgIcon from '../../../assests/imgs/bg.png'
import infoIcon from '../../../assests/imgs/info_702_788.png'

const YueKangCode: React.FC = () => {
  const colArr = new Array(20).fill(1)
  const rowArr = new Array(10).fill(1)
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