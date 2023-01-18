const pLength = document.getElementById('length')
const pVolume = document.getElementById('volume')
const pMass = document.getElementById('mass')


const convertBtn = document.getElementById('btn')
const input = document.getElementById('input')

// creating a function to  take parametrs.
// the input value tha the user type
// the unit (meter,liter or kilos) 
// conversionNum is the numbers to multiply or divide with the input value,
// converToUnit is a parameter that takes (feet,pounds or kilos) depending on length ,mass or volume
function conversion(inputValue ,unit,conversionNum,convertToUnit){
 if(inputValue === ''){
   alert('Please type a number')
 }
 else{

  if(unit){
    
    return `
      ${inputValue} ${unit} = ${(inputValue * conversionNum).toFixed(3)} 
      ${convertToUnit} | ${inputValue} ${convertToUnit} =
      ${(inputValue / conversionNum).toFixed(3)} ${unit} 
    `
  }}
}




convertBtn.addEventListener('click',function(){

 pLength.textContent = conversion(input.value,'meters',3.281,'feet')
 pVolume.textContent = conversion(input.value,'liters',0.264,'gallons')
 pMass.textContent = conversion(input.value,'kilos',2.204,'pounds')

})





  





