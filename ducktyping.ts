class cycle {  
    wheels = "two";  
}  
class auto {  
    wheels = "three";  
}  
class Car {  
    wheels = "four";  
    start(){  
        console.log("started!");  
    }  
}  
let au: auto = new cycle();  
let cyc:cycle  = new auto();   
let autotwo: auto = new Car();  
let C: Car = new auto();  
console.log("no of wheels in cycle: "+au.wheels);  
console.log("no of wheels in auto: "+cyc.wheels);  
console.log("no of wheels in Car: "+autotwo.wheels); 
console.log(au.start());