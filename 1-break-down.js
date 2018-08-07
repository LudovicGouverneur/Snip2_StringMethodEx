let input = 'table';
2	let expected = 'bee';
3	let output;
4	
5	console.log("'a string'.charAt(2) + 'ee';");
6	console.log("- " + input + " should become " + expected);
7	 
8	{ //  (sr, "table") -> (str, "bee")
9	    const step_1 = charAt(input); 
10	    // str: "b"
11	    const step_2 = step_1 + "ee"; 
12	    // str: "bee"
13	};
