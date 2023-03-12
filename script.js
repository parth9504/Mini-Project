
document.getElementById('dispbox').addEventListener("click",disp)  //if a button is clicked, displays the value on screen
function disp(val){
document.getElementById('dispbox').value += val
}
document.getElementById('dispbox').addEventListener("keydown",disp) 
function disp(val){
    document.getElementById('dispbox').value += val}

function solve() {
    let x = document.getElementById('dispbox').value
    console.log(x);
    if(x.indexOf('^')!=-1){ 
        let a=1,b=1.0; //calculating m^n 
        let m=parseFloat(x.substring(0,x.indexOf('^'))); //extracts first number converting it to integer
    let n=parseFloat(x.substring(x.indexOf('^')+1));  //extracts last number converting it to integer
while(a<=n){
b*=m;
a++;
   }
    document.getElementById('dispbox').value=b;
return b;}

else if(x.substring(x.length-2)===("sq")){  //Calculating Square of a number
    let u,p=1.0;
    u=parseFloat(x.substring(0,x.indexOf('s')));
    p*=u*u;
    document.getElementById('dispbox').value=(p);
    return p;
    }
    else if(x.substring(x.length-2)===("cb")){  //Calculating cube of a number
        let u,p=1.0;
        u=parseFloat(x.substring(0,x.indexOf('c')));
        p*=u*u*u;
        document.getElementById('dispbox').value=(p);
        return p;}
        else{
    let   y = eval(x);  //eval function is used for basic operations like +,-,*,/,%
document.getElementById('dispbox').value=y;

    return y;
}
}
function erase(){   //When 'AC' button is clicked,the display box erases the input/output
    document.getElementById('dispbox').value = ''
}
