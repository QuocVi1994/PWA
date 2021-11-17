import React, { useCallback, useState, useEffect } from "react";
import "./index.css";
import bgIcon from "../../../assests/imgs/bg.png";
import infoIcon from "../../../assests/imgs/info_702_788.png";
import otherInfoIcon from "../../../assests/imgs/other_info_704_252.png";
import fullImageBot from "../../../assests/imgs/yuekangma_bot.jpeg";

const windowWidth = document.body.clientWidth;
const scrollBgHeight = windowWidth * (683 / 375);
const colArr = new Array(Math.ceil(scrollBgHeight / 40) + 10).fill(1);
const rowArr = new Array(Math.ceil(windowWidth / 80)).fill(1);

const YueKangCode: React.FC = () => {
  const [timestamp, setTimestamp] = useState("");
  const [name, setName] = useState(localStorage.getItem("name") || "某*某");
  const [address, setAddress] = useState(
    localStorage.getItem("address") || "广州"
  );
  const [yimiao, setyimiao] = useState(localStorage.getItem("yimiao") || "");
  const [hesuan, sethesuan] = useState(localStorage.getItem("hesuan") || "");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const month = `${now.getMonth() + 1}`.padStart(2, "0");
      const day = `${now.getDate()}`.padStart(2, "0");
      const hour = `${now.getHours()}`.padStart(2, "0");
      const min = `${now.getMinutes()}`.padStart(2, "0");
      const sec = `${now.getSeconds()}`.padStart(2, "0");
      setTimestamp(`${month}-${day} ${hour}:${min}:${sec}`);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const popupAddress = useCallback(() => {
    const address = prompt("请输入地址", "");
    if (address && address !== "") {
      setAddress(address);
      localStorage.setItem("address", address);
    }
  }, []);

  const popupName = useCallback(() => {
    const name = prompt("请输入名字", "");
    if (name && name !== "") {
      const handleName =
        name.length > 2 ? `${name[0]}*${name[name.length - 1]}` : `${name[0]}*`;
      setName(handleName);
      localStorage.setItem("name", handleName);
    }
  }, []);

  const popupHeSuanTime = useCallback(() => {
    const hesuan = prompt("请输入核酸时间，按规则！", "");
    sethesuan(hesuan || "");
    localStorage.setItem("hesuan", hesuan || "");
  }, []);
  
  const popupYiMiaoTime = useCallback(() => {
    const yimiao = prompt("请输入疫苗时间，按规则！", "");
    setyimiao(yimiao || "");
    localStorage.setItem("yimiao", yimiao || "");
  }, []);

  return (
    <div style={{width: "100vw" }}>
      <div className="container">
        <div className="bgContainer">
          {colArr.map((_, index) => (
            <div key={`line_${index}`} className="bgLineContainer">
              {rowArr.map((_, index2) => (
                <img key={`img_${index2}`} className="bgImg" src={bgIcon} />
              ))}
            </div>
          ))}
        </div>
        <div className="titleBar">
          <div className="leftArrow" />
          <div className="title">粤康码</div>
          <div className="rightIcon">
            <div className="left">
              <div className="smallCircle circle" />
              <div className="bigCircle circle" />
              <div className="smallCircle circle" />
            </div>
            <div className="middle" />
            <div className="circle right">
              <div className="middleCircle circle" />
            </div>
          </div>
        </div>
        <img className="infoContainer" src={infoIcon} />
        <img className="otherInfoContainer" src={otherInfoIcon} />
        <div onClick={popupAddress} className="address">
          {address}
        </div>
        <div onClick={popupName} className="name">
          {name}
        </div>
        <div onClick={popupHeSuanTime} className="hesuan" style={!hesuan ? { backgroundColor: 'transparent'} : {}}>
          {hesuan}
        </div>
        <div onClick={popupYiMiaoTime} className="yimiao" style={!yimiao ? { backgroundColor: 'transparent'} : {}}>
          {yimiao}
        </div>
        <div className="time">{timestamp}</div>
        <div className="text">
          <div>依托全国一体化政务服务平台</div>
          <div>实现跨省（区、市）数据共享和互通互认</div>
        </div>
      </div>
      <img className="img" src={fullImageBot} />
    </div>
  );
};

export default YueKangCode;
