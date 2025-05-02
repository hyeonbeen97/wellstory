import React from "react";
import { useEffect, useState } from "react";
import "../../assets/sass/Section1.scss";

const section1 = () => {
  const [textactive, settextactive] = useState(false);
  const [showCircle, setshowCircle] = useState(false);
  const [bgidx, setbgidx] = useState(0);
  const bgimgs = ["public/img1.jpg", "public/img2.jpg", "public/img3.jpg"];
  useEffect(() => {
    const timer = setTimeout(() => settextactive(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  const showevent = () => {
    setshowCircle(true);
    setTimeout(() => {
      setbgidx((prevIndex) => (prevIndex + 1) % bgimgs.length);
    }, 500);
    setTimeout(() => {
      setshowCircle(true);
    }, 2000);
  };
  return (
    <div className="section1">
      {bgimgs.map((item, idx) => (
        <img
          key={idx}
          src={item}
          alt={`img${idx}`}
          className={`imgbg${bgidx === idx ? "bgon" : ""} `}
        />
      ))}
      <div className={`textbox ${textactive ? "texton" : ""}`}>
        <h1>환영합니다 나의 타입스크립트 세계로</h1>
        <button onClick={showevent}>다음이미지</button>
      </div>
      {showCircle && <div className="bigcircle" />}
    </div>
  );
};

export default section1;
