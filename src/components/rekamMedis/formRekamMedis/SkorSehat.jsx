import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Sakit from "../../../assets/icons/Sakit.svg?react";
import Mual from "../../../assets/icons/Mual.svg?react";
import Demam from "../../../assets/icons/Demam.svg?react";
import Pusing from "../../../assets/icons/Pusing.svg?react";
import Sehat from "../../../assets/icons/Sehat.svg?react";

export function getSkorInfo(value) {
    const skor = Number(value) || 1;
    if (skor <= 2) return { icon: <Sakit />, label: "Sakit" };
    if (skor <= 4) return { icon: <Mual />, label: "Mual" };
    if (skor <= 6) return { icon: <Demam />, label: "Demam" };
    if (skor <= 8) return { icon: <Pusing />, label: "Pusing" };
    return { icon: <Sehat />, label: "Sehat" };
}

const SkorSehat = ({value, onChange}) => {

    
    const marks = {
            1: <span>1</span>,
            2: (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span>2</span>
                    <Sakit style={{ marginTop: "-90px" }} />
                </div>
                
                ),
            3: <span>3</span>,
            4: (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span>4</span>
                    <Mual style={{ marginTop: "-90px" }}/>
                </div>
                ),
            5: <span>5</span>,
            6: (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span>6</span>
                    <Demam style={{ marginTop: "-90px" }}/>
                </div>
                ),
            7: <span>7</span>,
            8: (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span>8</span>
                    <Pusing style={{ marginTop: "-90px" }} />
                </div>
                ),
            9: <span>9</span>,
            10: (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span>10</span>
                    <Sehat style={{ marginTop: "-90px" }}/>
                </div>
                ),
    }

    return (
        
        <div className="section" style={{ width: "100%", margin: "40px 0" }}>
                <div style={{marginBottom: "150px"}}> 
                    <h3 style={{ display: "flex", alignItems: "left", margin: 0 }}>Skor Kesehatan</h3>
                </div>
                
            <Slider
                min={1}
                max={10}
                step={1}
                dots
                value={value}
                onChange={onChange}
                dotStyle={{ borderColor: "green" }}
                activeDotStyle={{ borderColor: "darkgreen" }}
                trackStyle={{ backgroundColor: "#0A805D" }}
                marks={marks}
            />
            

        <div
            style={{
            width: "100%",
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            }}
        >
            
            <span>Sakit</span>
            <span>Tidak Fit</span>
            <span>Sehat</span>
        </div>
                
    </div>


    );
};

export default SkorSehat;
