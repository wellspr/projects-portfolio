import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Section = (props) => {

    const [headerHeight, setHeaderHeight] = useState("0");
    const [sectionHeight] = useState("100vh");
    const [sectionOpacity, setSectionOpacity] = useState("0");

    useEffect(() => setHeaderHeight(document.querySelector("#header").clientHeight), []);
    useEffect(() => setSectionOpacity("1"), [sectionOpacity]);

    const baseClass = "d-flex flex-column justify-content-center align-items-center h-100 w-100 p-1";
    const customClass = props.className?` ${props.className}`:"";
    const className = baseClass + customClass;

    const baseStyle = { 
        minHeight: props.fitScreen?`calc(${sectionHeight} - ${headerHeight}px)`:"",
        opacity: sectionOpacity,
        transition: "opacity 0.5s ease-in",
    };

    return (
        <section
            id={props.id}
            className={className}
            style={{ ...baseStyle, ...props.style }}
            >
            { props.children }
        </section>
    );
};

export const Content = (props) => {

    const baseClass = "d-flex flex-column justify-content-center align-items-center flex-grow-1";
    const customClass = props.className?` ${props.className}`:"";
    const className = baseClass + customClass;

    return (
        <div 
            className={className} 
            style={props.styles}
            >
            { props.children }
        </div>
    );    
};

export const NextSection = (props) => {
    return (
        <a 
            style={{ 
                cursor: "pointer", 
                opacity: 0.65 
            }}
            href={props.next}
            >
            <FaChevronDown color="black" />
        </a>
    );
};

export const BackToTop = () => {

    const [arrowUpOpacity, setArrowUpOpacity] = useState(0);

    useEffect(() => {
        const showArrowUp = () => {
            if (scrollY > 0) {
                setArrowUpOpacity(0.65);
            } else {
                setArrowUpOpacity(0);
            }
        };

        showArrowUp();
        
        window.addEventListener("scroll", showArrowUp);

        return () => window.removeEventListener("scroll", showArrowUp);
    }, []);

    return (
        <div style={{ position: "fixed", bottom: 100, right: 10  }}>
            <a
                className="align-self-end"
                style={{ 
                    cursor: "pointer", 
                    opacity: arrowUpOpacity,
                    transition: "opacity 0.1s ease-in"
                }}
                onClick={() => {
                    window.location.hash = "#"
                    window.scroll({
                        top: 0,
                        behavior: "smooth"
                    });
                }}
                >
                <FaChevronUp color="black" />
            </a>
        </div>
    );
};

export default Section;