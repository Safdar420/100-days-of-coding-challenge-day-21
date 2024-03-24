//  Q no 61
var vahicleType;
(function (vahicleType) {
    vahicleType[vahicleType["Car"] = 0] = "Car";
    vahicleType[vahicleType["Truck"] = 1] = "Truck";
    vahicleType[vahicleType["Motorcycle"] = 2] = "Motorcycle";
})(vahicleType || (vahicleType = {}));
console.log(vahicleType.Car);
var student = {
    name: "Safdar",
    age: 20,
    courses: ["Maths", "Physics", "Chemistry"]
};
console.log(student);
var circle = {
    kind: "Circle",
    radius: 3
};
var Rectangle = {
    kind: "Rectangle",
    width: 5,
    height: 8,
};
console.log(circle);
console.log(Rectangle);
