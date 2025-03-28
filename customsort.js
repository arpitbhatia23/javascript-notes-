
import { AnalysisService } from "big-o-calculator"
import { Queue,BTS } from "./index.js"

export function testing() {
    addone(5) //6
    function addone(num){
        console.log(num+1)
    }

    addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization
 const addTwo   =function (num){
        console.log(num+2)
    }
}

