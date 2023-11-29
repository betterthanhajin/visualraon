import { useEffect } from "react";

export const OurClient = () => {
  useEffect(() => {
    setTimeout(() => {
      let circlewrap = document.getElementById("circleEvent");
      let circles = document.querySelectorAll(".circle0");
      let random = Math.floor(Math.random() * 180);
      let random2 = Math.floor(Math.random() * 480);
      const mouseX = random;
      const mouseY = random2;

      for (let i = 0; i < circles.length; i++) {
        circles[i].style.left = mouseX + "px";
        circles[i].style.top = mouseY + "px";
        circles[i].style.transition = "1s";
      }
      let j = 0;
      circlewrap.addEventListener("mouseout", function () {
        let random = Math.floor(Math.random() * 600 + 100);
        let random2 = Math.floor(Math.random() * 480 + 200);
        const mouseX = random;
        const mouseY = random2;
        circles[j].style.left = mouseX + "px";
        circles[j].style.top = mouseY + "px";
        circles[j].style.transition = "2.5s";
        j++;
        if (j === circles.length) {
          j = 0;
        }
      });
    }, 1000);
  }, []);

  return (
    <>
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <span style={{ color: "white", fontSize: 45 }}>
          ## OUR
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLIENTS
        </span>
        <hr color="white" size="1px"></hr>
      </div>
      <div className="circleGroup" id="circleEvent">
        <div id="circle0" className="circle0">
          <span>문화재청</span>
        </div>

        <div id="circle1" className="circle0">
          <span>강화군</span>
        </div>

        <div id="circle2" className="circle0">
          <span>김해시</span>
        </div>

        <div id="circle3" className="circle0">
          <span>문화재단</span>
        </div>

        <div id="circle4" className="circle0">
          <span>인천시</span>
        </div>

        <div id="circle5" className="circle0">
          <span>서산시</span>
        </div>

        <div id="circle6" className="circle0">
          <span>김해시</span>
        </div>

        <div id="circle7" className="circle0">
          <span>문화재청</span>
        </div>

        <div id="circle8" className="circle0">
          <span>고흥군</span>
        </div>

        <div id="circle9" className="circle0">
          <span>양구군</span>
        </div>

        <div id="circle10" className="circle0">
          <span>영동군</span>
        </div>
      </div>
    </>
  );
};
