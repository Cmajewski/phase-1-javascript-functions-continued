// code your solution here
const saturdayFun=function(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork=function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

const wrapAdjective=function(type){
   return function(activity){
       return(`You are ${type}${activity}${type}!`)
   }
   

}

