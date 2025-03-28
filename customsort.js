
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
   

}


const course={
    coursename:"js",
    price:"999",
    courseteacher:"hitesh"
}
console.log(course.courseteacher)//hitesh
//with destucting
const {courseteacher}=course
console.log(courseteacher)//hitesh
const {courseteacher:teacher}=course
console.log(teacher)//hitesh
}

