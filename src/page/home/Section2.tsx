import { useRef, useEffect, useState } from "react";
import "../../assets/sass/Section2.scss";

const section2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const righttopRef = useRef<HTMLDivElement>(null);
  const rightbottomRef = useRef<HTMLDivElement>(null);

  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const [anitrue, setanitrue] = useState(false);
  useEffect(() => {
    const myobserver = new IntersectionObserver( //뷰포트에 들어왔는지 감지
      ([item]) => {
        if (item.isIntersecting && !anitrue) {
          leftRef.current?.classList.add("active");
          setTimeout(() => {
            righttopRef.current?.classList.add("active");
          }, 500);
          setTimeout(() => {
            rightbottomRef.current?.classList.add("active");
            updatecount();
          }, 2000);
          setanitrue(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) myobserver.observe(sectionRef.current);
    return () => myobserver.disconnect(); //실시간으로 감지하는거 없애라
  }, [anitrue]);

  const updatecount = () => {
    let num1 = 0;
    let num2 = 0;
    const time1 = setInterval(() => {
      num1 += 10;
      setcount1(num1);
      if (num1 >= 100) clearInterval(time1);
    }, 200);
    const time2 = setInterval(() => {
      num2 += 100;
      setcount2(num2);
      if (num2 >= 10000) clearInterval(time2);
    }, 20);
  };

  return (
    <section className="section2" ref={sectionRef}>
      <div className="left" ref={leftRef}>
        <h1>Our Stroy</h1>
      </div>
      <div className="right">
        <div className="top" ref={righttopRef}>
          <h3>우리의 삶이 건강해지고 당신의 비즈니스가 더 성장하는 스토리</h3>
          <h4>
            고객의 삶과 비즈니스가 건강한 성장을 이룰 수 있도록 맞춤 서비스,
            앞선 전문성, 새로운 연결로 차별화된 식음 솔루션을 제안하고 산업의
            미래를 리딩하며 고객과 함께 성장하는 기업, 우리는
            삼성웰스토리입니다.
          </h4>
        </div>
        <div className="bottom" ref={rightbottomRef}>
          <span className="counttext">
            <span>{count1}</span>만식
          </span>
          <span className="counttext">
            <span>{count2.toLocaleString()}</span>개
          </span>
        </div>
      </div>
    </section>
  );
};

export default section2;
