import React, { useRef, useState } from "react";
import TabNext from "../../assets/icons/TabNext.svg?react";
import TabPrev from "../../assets/icons/TabPrev.svg?react";
import Dot from "../../assets/icons/Dot.svg?react";
import LineSeparator from "../../assets/icons/LineSeparator.svg?react";
import "./timeline.css";

export default function RekamMedisTimeline() {
  const tabs = [
    {
      label: "23 July 2025",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut eligendi a quas debitis non, consectetur eaque alias dolorem laborum quibusdam cumque deleniti repellat labore et nobis, dicta recusandae temporibus!",
    },
    {
      label: "23 July 2025",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor labore suscipit. Harum quia aperiam et blanditiis alias quibusdam voluptate delectus non, quos labore quas eum quasi hic molestias earum.",
    },
    {
      label: "24 July 2025",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint placeat aliquam error quibusdam sed praesentium, fugit repudiandae dolor? Beatae dolorum similique cumque, sapiente necessitatibus adipisci. Vero in tenetur ut?",
    },
    {
      label: "25 July 2025",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolores consequuntur, iusto amet inventore illo illum nulla ipsum fugiat expedita quos minus vitae vel repellendus animi. Ratione, vero at. Sint?",
    },
    {
      label: "26 July 2025",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, iure iusto commodi sequi quisquam perspiciatis, expedita nisi neque asperiores veniam accusantium, amet sint adipisci deleniti architecto dolore in facere tempora.",
    },
    {
      label: "27 July 2025",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam dignissimos consequuntur alias doloremque atque? Ea, aliquid labore minima officia accusantium fuga! Dolore, commodi soluta quae fuga nemo impedit accusamus minus.",
    },
    {
      label: "28 July 2025",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam culpa, beatae natus reiciendis quae assumenda, veniam debitis eius, at obcaecati facilis itaque tenetur? Temporibus quas exercitationem sit consequuntur itaque magnam?",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
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
            <div className="tab-item">
              <button
                key={idx}
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

      <div className="tab-content">
        <h4>{tabs[activeIndex].label}</h4>
        <p>{tabs[activeIndex].content}</p>
      </div>
    </div>
  );
}
