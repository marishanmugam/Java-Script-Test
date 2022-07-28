const check = () => {
   console.log('hai');
  // let age = document.querySelectorAll('option.value');
  // let result = isNaN(age) ?  'Input is not Number '
  // : age >= 18 ? "you are Eligible To Vote" : "Not Eligible To Vote";

  // document.getElementById("result").innerHTML = result;

//   let data = document.getElementById('drop');
//   let inputVal = data.options[data.selectedIndex].text;
//   let result = '';
//   switch (inputVal) 
//   {
  
//     case 1:
//      result = 'Monday';
//      console.log(result);
//       break;

//     case 2:
//        result = "Tuesday";
//       break;

//     case 3:
//       result = "Wednesday";
//       break;

//     case 4:
//       result = "Thursday";
//       break;

//     case 5:
//       result = "Friday";
//       break;

//     case 6:
//       result = "Saturday";
//       break;

//     case 7:
//       result = "Sunday";
//       break;

//     default : 
//         result = 'Holiday';
//         break;  
//   }  console.log(inputVal);
//   document.getElementById("result").innerHTML = result;
//   console.log(result);
// 



// const cars = ['Audi','Benz','BMW',"Maruti"]
// let car ='';
// for(let i=0;i<cars.length;i++) 
// {
//      car += cars[i]+ '<br>'; 
 
// }

// document.getElementById('error11').innerHTML = car;
// let num = '';

// for(let k = 0;k<=10;k++)
// {
//   num += 'the Number is ' + k + '<br>';
//  document.getElementById('number').innerHTML = num;
// }
// let text ='';
// let car = 'Mariappan'
// for (let x in cars)
// {
    
//     text += car[x] + '<h5> '
    
// console.log(text);
//     document.getElementById('number1').innerHTML = text
// }

// let data = '';
// for(let x of cars)
//  {
//     data += x  + '<br> ';
//  }
// console.log(data);
//  document.getElementById('error11').innerHTML = data;


//  let string = 'MARIAPPAN.G'
// let dat='';
//  for(let x of string)
//  {
//     dat  += x +'<h2>'
//  }

//  console.log(dat);
//  document.getElementById('number').innerHTML = dat;

 

// while Loop 

// let i=0,text ='';
// while( i < 10) 
// {
//     text += i;
//     i++;
//     console.log(text);
// }

// document.getElementById('number1').innerHTML = text;

// do while 

// let i = 1; text = '';

// do {
//    text += i +"<br>"
//     i++;
//     console.log(text);
//     document.getElementById('number1').innerHTML = text;

// }

// while(i<1);



};


const test = () => {
//     let sett = new Set([1,2,3,4,5,6])
// // sett.add(7)
// // sett.delete(4)
// let data = '';
// sett.forEach((e) => {
//     data += e + '<br><h1/>';
// })

// document.getElementById('number1').innerHTML = data;
// console.log(sett.values());
// console.log(sett);
// let str  = '10';
// let num = 10;

// console.log(str+num);

// //parseInt parse the string values and return the first interger value';

// console.log(parseInt(str)+num);

// // if the integer can`t able to convert number it is return NaN

// let str1 = 'Mari 10'

// console.log(parseInt(str1)+num);

// let arr = [1,2,3,21, 5 , 9 ,22,11,7];
// console.log(arr);

// arr.reverse();
// console.log('Reversing Array');
// console.log(arr); 

// console.log('Sorting Array');
// arr.sort((a,b)=> {
//  return a-b; 
// })
// console.log(arr);



// let arr = [];

// for(let i=1;i<=14;i++) {
//     arr.push(i);
// }
// console.log(arr);

let person = { name :'Mari',
               age : 22,
               place : ' Nellai'         

};

// to get keys 

// let key = Object.keys(person);
// console.log(key);

// let value  = Object.values(person);
// console.log(value);

// let result = Object.entries(person);
// console.log(result);

// person.mobile  = 123456;
// console.log(person);

// // this medthod ==> Object.preventExtensions() can`t add new properties(key:pair) value to Obejct but can modify data

// // Object.preventExtensions(person);
// // person.address = 'Pathai';
// // console.log(person);
// // person.age = 26;
// console.log(person);

// //this nethod ==> Object.freeze(person); can`t add new properties(key:pair) and can`t modify data
// // Object.freeze(person);
// // person.age = 24;
// console.log(person);

// // this method ==> Object.seal() can`t add and delete data but we can modify the data; 
// Object.seal(person);

// person.mobile = 987654;
// console.log(person);
}