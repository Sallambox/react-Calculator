import React from 'react'
import { useEffect, useState } from "react";
import { Button } from './Button';
import './Calculator.css'; 
import { Screen } from './Screen';

export function Calculator() {
    var [screenValue, setScreenValue] = useState(0)
    const [firstValue, setFirstValue] = useState(0)
    // const [secondValue, setSecondValue] = useState(0)
    const [operant, setOperant] = useState("")
    // const [operantNumber, setOperantNumber] = useState(1)
    // var screenValue=5;
    // var operantNumber=1;
    // var firstValue=null;
    // var finalValue=null;
    const pressNumber=(e)=> {
        if (screenValue === 0) {
            setScreenValue(e.target.name);
            // console.log(typeof(screenValue));
            return;
        }
        setScreenValue(+(screenValue+e.target.name));
        // console.log(typeof(+screenValue));
        // console.log(typeof(+e.target.name));
    }
    const pressOperant = (e)=> {
        setOperant(e.target.name)
        setFirstValue(+(screenValue));
        setScreenValue(+0);
        // if (operantNumber===1) {
        //     setFirstValue(+(screenValue));
        //     setScreenValue(+0);
        //     console.log(operantNumber+"1st");
        //     setOperantNumber(2);
        // }else if (operantNumber===2) {
        //     setSecondValue(+(screenValue));
        //     setScreenValue(+0);
        //     console.log(operantNumber+"2st");
        //     setOperantNumber(1);
        // }
    }
    const pressEqual = ()=> {
        switch (operant) {
            case "+":
                setScreenValue(+((+(firstValue))+(+(screenValue))))
                break;
            case "-":
                setScreenValue(+((+(firstValue))-(+(screenValue))))
                break;
            case "*":
                setScreenValue(+((+(firstValue))*(+(screenValue))))
                break;
            case "/":
                setScreenValue(+((+(firstValue))/(+(screenValue))))
                break;
            default:
                break;
        }
        // setScreenValue(+((+(firstValue))+(+(screenValue))))
    }
    return(
        <div class="parent">
            <div class="div1"> <Screen className="Screen" value={screenValue} /> </div>
            <div class="div2">  </div>
            {/* <Button value={"clear"} funName={pressNumber} /> */}
            <div class="div3"> <Button value={"*"} funName={(e)=>pressOperant(e)} /> </div>
            <div class="div4"> <Button value={"/"} funName={(e)=>pressOperant(e)} /> </div>
            <div class="div5"> <Button value={"-"} funName={(e)=>pressOperant(e)} /> </div>
            <div class="div6"> <Button value={"+"} funName={(e)=>pressOperant(e)} /> </div>
            <div class="div7"> <Button value={7} funName={(e)=>pressNumber(e)} /> </div>
            <div class="div8"> <Button value={8} funName={(e)=>pressNumber(e)} /> </div>
            <div class="div9"> <Button value={9} funName={(e)=>pressNumber(e)} /> </div>
            <div class="div10"> <Button value={4} funName={(e)=>pressNumber(e)} /> </div>
            <div class="div11"> <Button value={5} funName={(e)=>pressNumber(e)} /> </div>
            <div class="div12"> <Button value={6} funName={(e)=>pressNumber(e)} /> </div>
            <div class="div13"> <Button value={1} funName={(e)=>pressNumber(e)} /> </div>
            <div class="div14"> <Button value={2} funName={(e)=>pressNumber(e)} /> </div>
            <div class="div15"> <Button value={3} funName={(e)=>pressNumber(e)} /> </div>
            <div> <Button value={"="} funName={pressEqual} /> </div>
        </div>
    )
}