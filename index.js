// task 1
function compare(a, b) {
    return a>b;
}

// task 2
function yourString(string) {
    var newString;
    return newString="Вы ввели " + string;
}

// task 3
function test(a) {
    if (a === null || a === undefined) {console.log("является");}
    else {console.log("не является");}
}

// task 4
function addProperty (object) {
    object.checked = true;
}

// task 5
function getNumbers (a) {
    if(a>0) {
        for(i=0; i<=a; i++) {
            console.log(i);
        }
	    for(i=a; i>=0; i--){
            console.log(i);
        }
    }   
    if(a<0) {
        for(i=0; i>=a; i--){
            console.log(i);
        }
        for(i=a; i<=0; i++) {
            console.log(i);
        }	    
    }
    if (a==0) {
        console.log(a);
    }
}