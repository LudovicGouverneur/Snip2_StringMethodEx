let input = 'table';
let expected = 'bee';
let output;

console.log(input +".charAt(2) + 'ee';");
console.log("- " + input + " should become " + expected);
 
{ //  (sr, "table") -> (str, "bee")
    const step_1 = input.charAt(2); 
    // str: "b"
    const step_2 = step_1 + "ee"; 
    // str: "bee"
    output = step_2;
};
