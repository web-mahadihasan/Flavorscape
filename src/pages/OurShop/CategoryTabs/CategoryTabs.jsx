import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

const Tabs = ({onClick}) => {
  const tabsRef = useRef([]);
  
  const categoryList = ["offered", "salad", "pizza", "soup", "dessert", "drinks"]
  const {category} = useParams()
  const initialTab = categoryList.indexOf(category)
  const [activeIndex, setActiveIndex] = useState(initialTab);


  useEffect(() => {
    
    console.log(category)
    const runner = document.querySelector(".bg-runner");
    if (tabsRef.current[activeIndex]) {
      runner.style.width = `${tabsRef.current[activeIndex].offsetWidth}px`;
      runner.style.left = `${tabsRef.current[activeIndex].offsetLeft}px`;
    }
  }, [activeIndex]);
  
    const handleClick = (index, tab) => {
      setActiveIndex(index);
      onClick(tab)     
    };

    return (
        <div className="tabs">
      {/* Runner element for smooth animation */}
             <div
                 className="bg-runner"
             ></div>
             {categoryList.map((tab, index) => (
                 <a
                 key={index}
                 href="#"
                 className={`tab font-jost uppercase text-dark-black tracking-wide ${activeIndex === index ? "active" : ""}`}
                 onClick={(e) => {
                     e.preventDefault();
                     handleClick(index, tab);
                 }}
                 ref={(el) => (tabsRef.current[index] = el)}
                 >
                 {tab}{index !==  4 && index !==  0? "S" : ""}
                 </a>
             ))}
         </div>
    );
};

export default Tabs;