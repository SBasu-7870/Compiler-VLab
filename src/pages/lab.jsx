import React from "react";
import { useParams } from "react-router-dom";
import SideNav2 from "./SideNav2";
import Navbar from "../components/Navbar";
import AimElement from "./lab-components/Aim"
import programs from "../data/programs";
import ProcedureElement from "./lab-components/Procedure";
import TheoryElement from "./lab-components/Theory";
import ReferencesElement from "./lab-components/References";


// const Data = (element) => {
//   return <Lab />
// }
    

const Lab = (props) => {
  let {program}=useParams();
    console.log(program)
    if(props==="aim") 
    return (<AimElement value={programs.iscomment}/>)
    else if(props=== "procedure")return (<ProcedureElement value={programs.iscomment} />);
    else if(props=== "theory")return (<TheoryElement value={programs.iscomment} />);
    else if(props=== "reference")return (<ReferencesElement value={programs.iscomment} />);
}



const LabElement = (props) => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideNav2 />
        {Lab(props.title)}
      </div>
    </>
  );


};

export default LabElement;
