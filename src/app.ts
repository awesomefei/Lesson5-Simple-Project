let sentence = 'The quick brown fox jumps over the lazy dog';
let result = splitWords(sentence);
let valueArray = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,13,10,1,1,1,1,4,4,8,4,
               10];
let display: HTMLElement = document.getElementById('display');
let display1: HTMLElement = document.getElementById('display1');
let display2: HTMLElement = document.getElementById('display2');
let display3: HTMLElement = document.getElementById('display3');
let display4: HTMLElement = document.getElementById('display4');
let display5: HTMLElement = document.getElementById('display5');

let splitWordBtn: HTMLButtonElement = 
    <HTMLButtonElement>document.getElementById('split');
let sortAlphabeticallyBtn: HTMLButtonElement = 
    <HTMLButtonElement>document.getElementById('sort');
let sortByLengthBtn: HTMLButtonElement = 
    <HTMLButtonElement>document.getElementById('length'); 
let reverseWordBtn: HTMLButtonElement = 
    <HTMLButtonElement>document.getElementById('reverse');
let sortWithoutCaseBtn: HTMLButtonElement = 
    <HTMLButtonElement>document.getElementById('sortWithoutCase');
let scrabbleBtn: HTMLButtonElement = 
    <HTMLButtonElement>document.getElementById('scrabble');

scrabbleBtn.addEventListener('click', ()=>{  
    let scoring =[];
    display5.innerText = result.sort(compareByScoring).join('\n');
});

function compareByScoring(word1:string, word2:string) {
    return calculateScoring(word1) - calculateScoring(word2);
}

function calculateScoring(word:string):number{
    let scoring = 0;
    let lowerCaseString = word.toLowerCase();   
    for(let i = 0; i < word.length; i++){
        scoring += valueArray[lowerCaseString.charCodeAt(i) -
         'a'.charCodeAt(0)];
    }
    return scoring;
}

splitWordBtn.addEventListener('click', ()=>{
   display.innerText = result.join('\n');
});
// The default sort order is according to string Unicode code 
//points.
sortAlphabeticallyBtn.addEventListener('click', ()=>{
   display1.innerText = result.sort().join('\n');
});
sortWithoutCaseBtn.addEventListener('click',()=>{
    display4.innerText = result.sort(compareWithoutCase).join('\n');

})
function compareWithoutCase(a, b){
    let nameA = a.toLowerCase(); 
    let nameB = b.toLowerCase(); 
    if (nameA < nameB) {   
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
};
reverseWordBtn.addEventListener('click',()=>{
    let resultArr = [];
    console.log(result);
    for(let i = 0; i < result.length; i++){
        let newString = '';
        for(let j = result[i].length-1; j >=0; j--){
            newString += result[i][j];
        }
        resultArr.push(newString);
    }
   display3.innerText = resultArr.join('\n');
})
sortByLengthBtn.addEventListener('click',()=>{
    display2.innerText = result.sort(compareByLength).join('\n');
})

function compareByLength(a,b){
    let lengthA = a.length;
    let lengthB = b.length;
    return lengthA-lengthB;
}

function splitWords(input:string):string[]{
    let output : string[] = input.split(' ');
    return output;
}
