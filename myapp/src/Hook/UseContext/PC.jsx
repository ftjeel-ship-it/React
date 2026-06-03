import React, { createContext } from "react";
import C1 from './C1';

const s = createContext();
const heading = createContext();

function PC(){

    const styleData = {
        fontSize: "45px",
        fontWeight: "800",
        color: "#ffffff",
        background: "linear-gradient(135deg,#2563eb,#7c3aed)",
        padding: "18px 35px",
        borderRadius: "15px",
        textAlign: "center",
        fontFamily: "Poppins,sans-serif",
        boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
        display: "inline-block"
    };

    return(
        <div align="center">

            <s.Provider value={styleData}>
                
                <heading.Provider value='student'>
                    <C1/>
                </heading.Provider>

            </s.Provider>

        </div>
    );
}

export default PC;
export { s, heading };