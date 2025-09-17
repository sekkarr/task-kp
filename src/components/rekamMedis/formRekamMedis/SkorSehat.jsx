import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const SkorSehat = () => {
    return (
        <div style={{ width: 1000, margin: "50px auto" }}>
        <Slider
            min={1}
            max={10}
            step={1}
            dots
            dotStyle={{ borderColor: "green" }}
            activeDotStyle={{ borderColor: "darkgreen" }}
            trackStyle={{ backgroundColor: "green" }}
            marks={{
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                10: "10",
            }}
        />

        <div>
            nbxvng
        </div>
            
        </div>


    );
};

export default SkorSehat;
