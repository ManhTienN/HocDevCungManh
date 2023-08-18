// //1.For in
// //2.hasOwnProperty
// //3.forEach

// var temp = [
//     {
//         name: 'java',
//         point: 1000,
//         isFinish: true,

//     },
//     {
//         name: 'javascript',
//         point: 5000,
//         isFinish: true,
//     },
//     {
//         name: 'PHP',
//         point: 2000,
//         isFinish: true,
//     },
// ]

// var courses = [
//     'Javascript',
//     'Html',
//     'redux',
// ];

// Array.prototype.find2 = function(callback){
//     var arrlength = this.length;
//     if( callback === 'function'){
//         for(var i = 0; i< arrlength; i++){
//             if(callback(this[i],i)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     }
// }

// Array.prototype.forEach2 = function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             callback(this[index],index,this);
//         }
//     }
// }

// Array.prototype.filter2 = function (cb){
//     var output = [];
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = cb(this[index],index,this);
//             if(result){
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }

// Array.prototype.some2 = function(cb){
//     for(var i in this){
//         if(this.hasOwnProperty(i)){
//             if(cb(this[i],i,this)){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Array.prototype.every2 = function(cb){
//     for(var i in this){
//         if(this.hasOwnProperty(i)){
//             if(!cb(this[i],i,this)){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// var result = temp.every2(function(course,index,array){
//     return course.point > 1000;
// })

// console.log(result);
