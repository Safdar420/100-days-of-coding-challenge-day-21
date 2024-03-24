//  Q no 61

enum vahicleType {
    Car,
    Truck,
    Motorcycle,
}
console.log(vahicleType.Car);

//  Q no 62

interface Student {
    name:string,
    age:number,
    courses:string[],
}

let student:Student ={
    name:"Safdar",
    age:20,
    courses:["Maths","Physics","Chemistry"]
}
console.log(student);

//  Q no 63

type shape = {
    kind:"Circle"|"Rectangle";
    radius?:number;
    height?:number;
    width?:number;
}

let circle:shape ={
    kind:"Circle",
    radius:3
}

let Rectangle:shape={
    kind:"Rectangle",
    width:5,
    height:8,
}
console.log(circle);
console.log(Rectangle);
