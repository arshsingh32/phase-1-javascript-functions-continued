// Your code here
  function saturdayFun( b="roller-skate") {
    return(`This Saturday, I want to ${b}!`);

  }
  //onsole.log(saturdayFun())

function mondayWork(b="go to the office"){
    return(`This Monday, I will ${b}.` );
}

function wrapAdjective(string = "*") { 
    return function innerFunction (g = "special") { 
      return (`You are ${string}${g}${string}!`) ; 
    }

}