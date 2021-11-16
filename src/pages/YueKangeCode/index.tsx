import React,{ useCallback, useState, useEffect } from 'react';
import './index.css'
import bgIcon from '../../../assests/imgs/bg.png'
import infoIcon from '../../../assests/imgs/info_702_788.png'

const windowWidth = document.body.clientWidth;
const scrollBgHeight = windowWidth * (683 / 375);
const colArr = new Array(Math.ceil(scrollBgHeight / 40) + 10).fill(1);
const rowArr = new Array(Math.ceil(windowWidth / 80)).fill(1);

const YueKangCode: React.FC = () => {

  const [timestamp, setTimestamp] = useState('')
  const [name, setName] = useState(localStorage.getItem('name') || '某*某');
  const [address, setAddress] = useState(localStorage.getItem('address') || '广州');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const month = `${now.getMonth() + 1}`.padStart(2, '0')
      const day = `${now.getDate()}`.padStart(2, '0');
      const hour = `${now.getHours()}`.padStart(2, '0');
      const min = `${now.getMinutes()}`.padStart(2, '0');
      const sec = `${now.getSeconds()}`.padStart(2, '0');
      setTimestamp(`${month}-${day} ${hour}:${min}:${sec}`)
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [])

  const popupAddress = useCallback(() => {
    const address = prompt("请输入地址", "");
    if (address && address !== ""){
      setAddress(address)
      localStorage.setItem("address", address)
    }
  }, []);

  const popupName = useCallback(() => {
    const name = prompt("请输入名字", "");
    if (name && name !== ""){
      const handleName = name.length > 2 ? `${name[0]}*${name[name.length - 1]}` : `${name[0]}*`
      setName(handleName)
      localStorage.setItem("name", handleName)
    }
  }, []);

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
      <div onClick={popupAddress} className="address">{address}</div>
      <div onClick={popupName} className="name">{name}</div>
      <div className="time">{timestamp}</div>
    </div>
  )
}

export default YueKangCode;