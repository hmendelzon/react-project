
import React, { useEffect, useState } from "react";


export default function About(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const [title] = useState("about our shop");
    const numberOfPages = React.Children.count(props.children);
    let myInterval;
    function pageComponent(pageIndex) {
        const allChildProps = { title };
        const child = React.Children.toArray(props.children)[pageIndex];
        return React.cloneElement(child, allChildProps);
    }


    const newInterval = () => {
        clearInterval(myInterval);
        myInterval = setInterval(() => {
            setCurrentPage(v => v + 1)
        }, 4000)
    }

    useEffect(newInterval, [])



    return (
        <>
            <div className="row">
                <div className="col-3"></div>
                <button className="col-1"
                    onClick={(e) => {setCurrentPage(v => v + numberOfPages - 1); newInterval() }}
                >
                    &lt;
                </button>

                {pageComponent(currentPage % numberOfPages)}
                <button className="col-1"
                    onClick={(e) => { setCurrentPage(v => v + 1); newInterval() }}
                >
                    &gt;
                </button>
            </div>


        </>
    )
}