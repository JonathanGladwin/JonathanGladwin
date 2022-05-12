import React , { useRef, useEffect } from 'react';

const { tableau } = window;

function Tableau() {
    const ref = useRef(null);
    const url =  "https://public.tableau.com/shared/C2YF5S28P?:toolbar=n&:display_count=n&:origin=viz_share_link";

    const options = {
        device : 'desktop',
    }; 

    function initViz() {
        new tableau.Viz(ref.current,url, options);
    }  

    useEffect(() => {
        initViz();
    }, []);

    return( 
    <div>
    <p>This is my Tableau dashboard</p>
    <div ref={ref}></div>
    </div>
    );
} 

export default Tableau;