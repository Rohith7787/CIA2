import { useState } from "react";

const ColorChanger = () => {

    const [color, setColor] = useState('lime');
    return ( 
        <div className="content">
            <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                >
                <option value="lime">Lime</option>
                <option value="lavender">lavender</option>
                <option value="crimson">crimson</option>
                <option value="darkblue">Darkblue</option>
                <option value="teal">Teal</option>
                <option value="rebeccapurple">Rebecca Purple</option>
                <option value="ghostwhite">Ghost White</option>
                <option value="aquamarine">Aquamarine</option>
                <option value="aliceblue">Aliceblue</option>
            </select>
            <div className="color-changer"
                style={{'backgroundColor':`${color}`}}>
            
            </div>
        </div>
     );
}
 
export default ColorChanger;