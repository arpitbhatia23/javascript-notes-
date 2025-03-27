
import { AnalysisService } from "big-o-calculator"
import { Queue,BTS } from "./index.js"

export function testing() {

    Array.prototype.Quicksort=function (callback=function (a,b) {
        if (typeof a ==="string" && typeof b==='string') {
          return a.localeCompare(b)   
        }
        return a-b
    }){
        const sorthelper=(arr)=>{
            if (arr.length<=1)return arr

            let povit =arr[arr.length-1]
            let left =[], right =[]
            for (let i = 0; i < arr.length-1; i++) {
                if(callback(arr[i],povit)<0){
                    left.push(arr[i])
                }else{
                    right.push(arr[i])
                }
            }
            return [...sorthelper(left),povit,...sorthelper(right)]
        }
        const sortedarray=sorthelper([...this])
    this.splice(0,this.length,...sortedarray)
   
    return this
    }

    const arr=[2,3,1,3,5,6,8,7]
    console.log(arr.Quicksort()) 
const calculator=new AnalysisService()
    let code = {
        // Language of the tested code
        language:"js",
        // Most languages handle data types differenty (e.g. integers vs strings). 
        // This parameter tells the calculator about type of algorithm tested.
        expectedSpeed: "slow",
        // Tested code with function call and argument placeholder
        content: `
       Array.prototype.Quicksort=function (callback=function (a,b) {
        if (typeof a ==="string" && typeof b==='string') {
          return a.localeCompare(b)   
        }
        return a-b
    }){
        const sorthelper=(arr)=>{
            if (arr.length<=1)return arr

            let povit =arr[arr.length-1]
            let left =[], right =[]
            for (let i = 0; i < arr.length-1; i++) {
                if(callback(arr[i],povit)<0){
                    left.push(arr[i])
                }else{
                    right.push(arr[i])
                }
            }
            return [...sorthelper(left),povit,...sorthelper(right)]
        }
        const sortedarray=sorthelper([...this])
    this.splice(0,this.length,...sortedarray)
   
    return this
    }
      `,
      testedFunctionName: "Array.prototype.Quicksort",
      };
      
      // AnalysisService.analyze returns a promisified BigO value
      calculator.analyze(code)
        .then(analysisResult => {
          console.log(analysisResult.bigO); // O(n)
        });

}

