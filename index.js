// Code your solution here


function findMatching (anything, anything2) {
    return anything.filter(
        function (possibleMatch) {
            return possibleMatch.toLowerCase() === anything2.toLowerCase();
        } 
        );
}  



function fuzzyMatch(string1, string2) {
    return string1.filter(
      function (possibleMatch) {
          return  possibleMatch.toLowerCase().indexOf(string2.toLowerCase()) === 0
        }
    )
}


  function matchName(driver, string) {
        return driver.filter(
            function (record) {
               return record.name === string;
            }
        )  // you can console.log(driver) to see the code. remove return first
  }
/*
1) wrote a funciton called findMatching that takes in two arguments
2) "anything" is a placeholder for the code written in the test
3) "anything2" is passed in as string argument that we will write code in
4) findMatching function executes anything.filter()
5) anything.filer() executes an annonymous function that takes in a parameter "possibleMatch"
6) this anonymous function takes the elements inside 'anything' and converts it into lowercase
7) not so sure what anything2 does.

*/