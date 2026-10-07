import { useState } from 'react'
import Child from '../Child/Child';
export default function Perent() {
    const [user]=useState({
        name:`Ahmed`,
        University:`HNU`,
        city:`Giza`,
        dep:`ISE`,
    });

    return (
        <>
        <div className="container-faulid bg-danger p-4">
            <p >I’m an Engineering student interested in Web Development and Full-Stack Development. I have learned HTML, CSS, and JavaScript, and I’m currently improving my skills in React.js. I enjoy building websites, learning new technologies, and developing my skills step by step.</p>
            <Child data={user}/>
        </div>
        </>
    );
}
