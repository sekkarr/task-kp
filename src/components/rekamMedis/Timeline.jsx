import React, { useRef } from "react";
import TabNext from "../../assets/icons/TabNext.svg?react";
import TabPrev from "../../assets/icons/TabPrev.svg?react";
import Dot from "../../assets/icons/Dot.svg?react";
import LineSeparator from "../../assets/icons/LineSeparator.svg?react";
import "./timeline.css";

export default function RekamMedisTimeline({
  tabs,
  activeIndex,
  setActiveIndex,
}) {
  const scrollRef = useRef(null);

  const scrollTabs = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
        <div className="tabs-scroll" ref={scrollRef}>
          {tabs.map((tab, idx) => (
            <div key={idx} className="tab-item">
              <button
                className={`tab-btn ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <Dot /> {tab.label}
              </button>
              {idx !== tabs.length - 1 && <LineSeparator />}
            </div>
          ))}
        </div>
        <TabPrev
          className="scroll-btn left"
          onClick={() => scrollTabs("left")}
        />
        <TabNext
          className="scroll-btn right"
          onClick={() => scrollTabs("right")}
        />
      </div>
    </div>
  );
}
