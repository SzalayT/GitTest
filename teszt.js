
// 1. feladat

10 // number
"szöveg" // string
Boolean // true or fale
null // 

// 2. feladat



// 3. feladat

function tombOsszeg(tomb) {
    let sum = 0;
    for (i=0; i< tomb.length ; i++)
            sum = sum + tomb[i];
        return sum;
}


// 4. feladat 


function tombParos(tomb) {
    let parosSzamok=0;
    for (i=0; i< tomb.length ; i++)
        if( tomb[i]) % 2 == 0) 
            parosSzamok++;
        return parosSzamok;
}

// 5. feladat

const otosFeladat = (a) => {
switch a {
    case 1 :
        return "egy" ;
            break;
    case 2 :
        return "kettő";
            break;
    case 3 :
        return "három";
            break;
    case 4 :
        return "négy";
            break;
    case 5 :
        return "öt";
            break;
    
}
}

// 6. feladat

let tomb1 = [1,2,3,4,5,8,9,10]
let tomb2 = [1,2,3,4,5,6,11,12,56,9,]
let metszet= [];
let k = 0;
let j;

for(i=0 ; i< tomb1.length ; i++){
    for(j=0; j< tomb2.length; j++) {
        if ( tomb1[i] === tomb2[j] ){
            tomb1[i] = metszet[k++]
        }
        }
    }

 // másik verzió

    for(let i=0; i<tomb1.length;i++){
        j = 0;
        while(j < tomb2.length && tomb2[j] != tomb1[i])
            j++;
        if(j<tomb2.length){
            metszet[k++] = tomb[i];
        }
    }


   //  7. feladat

    const osszeadas = (a,b) => {
        return a+b
    } 

    
    const kivonas = (a,b) => {
        return a-b
    } 

    
    const osztas = (a,b) => {
        return a%b
    } 

    
    const szorzas = (a,b) => {
        return a*b
    } 


    // 8. feladat


        const nyolcas = (a,b) => {
                let arr = [];
              
                for (let i=0; i<a ;i++) {
                   arr[i] = [];
                }
              
                return arr;
              }
        























