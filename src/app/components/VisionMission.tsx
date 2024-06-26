"use client";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import vision from "../../../public/Vision.png";
import mission from "../../../public/mission.png";
import "../styles/VM.css";

const VisionMission = () => {
  const [aosAnimation, setAosAnimation] = useState("fade-down");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      delay: 50,
      mirror: true,
    });

    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setAosAnimation("fade-up");
      } else {
        setAosAnimation("fade-down");
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="vmContainer">
      <div className="aboutContainerVM">
        <h1 className="aboutVM">Vision & Mission</h1>
      </div>

          <div data-aos="fade-up" className="a-aboutsVM a-operatorVM cardVM">
            <div
              className="a-imgVM"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <Image
                src={vision}
                alt="vision"
                className="a-imVM imgVM1"
              />
            </div>
            <div className="a-paragraphVM a-paragraphVM1" data-aos="fade-left">
              <div className="fontTagpVision">
                <span className="featureHeading">Vision</span>
                <p className="pOfVision">Empowering the EigenLayer Ecosystem: Data-Driven Insights,
                Direct Engagement, and Knowledge Sharing for AVSs, Operators,
                and Restakers</p>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-up" className="cardVM a-aboutsVM a-analyticsVM">
            <div
              className="a-imgVM"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
            >
              <Image
                src={mission}
                alt="mission"
                className="a-imVM imgVM2"
              />
            </div>
            <div className="a-paragraphVM" data-aos="fade-left">
              <div className="fontTagp">
                <div className="missionVM featureHeading">Mission</div>
                <p className="pOfMission">To enhance the transparency, performance, security, and knowledge sharing of the EigenLayer ecosystem by providing comprehensive analytics and fostering direct communication between AVSs, operators, and restakers
                </p>
              </div>
            </div>
          </div>

    </div>
  );
};

export default VisionMission;
