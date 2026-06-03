import { s, heading } from "./PC";
import { useContext } from "react";

function C2() {

    const s1 = useContext(s);
    const h = useContext(heading);

    return (
        <div align='center'>
            <h1 style={s1}>
               {h}
            </h1>
        </div>
    );
}

export default C2;