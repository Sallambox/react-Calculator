import React from 'react'
import { useEffect, useState } from "react";
import { Button } from './Button';
import './Calculator.css'; 
import { Screen } from './Screen';

export function Calculator() {
    const [screenValue, setScreenValue] = useState(0)
    const [firstValue, setFirstValue] = useState(0)
    const [operant, setOperant] = useState("")
    const pressNumber=(e)=> {
        if (screenValue === 0) {
            setScreenValue(e.target.name);
            return;
        }
        setScreenValue(+(screenValue+e.target.name));
    }
    const pressOperant = (e)=> {
        setOperant(e.target.name)
        setFirstValue(+(screenValue));
        setScreenValue(+0);
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
    }
    const clear = ()=> {
        setScreenValue(0);
        setFirstValue(0);
        setOperant("");
    }
    return(
        <div class="parent">
            <div class="div1"> <Screen className="Screen" value={screenValue} /> </div>
            <div class="div2"> <Button value={"clear"} funName={clear} /> </div>
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
            <div> <Button value={0} funName={(e)=>pressNumber(e)} /> </div>
        </div>
    )
}