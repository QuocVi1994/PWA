import React from 'react';
import './index.css'
import bgIcon from '../../../assests/imgs/bg.png'

const YueKangCode: React.FC = () => {
  const colArr = new Array(20).fill(1)
  const rowArr = new Array(10).fill(1)
  return (
    <div className="container">
      {/* <img className="img" src="../../../assests/imgs/yuekangma.jpg" /> */}
      <div className="bgContainer">
        {
          colArr.map(() => <div className="bgLineContainer">
            {
              rowArr.map(() => <img className="bgImg" src={bgIcon} />)
            }
          </div>)
        }
      </div>
    </div>
  )
}

export default YueKangCode;