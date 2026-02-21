let students = [
  { name: "A", marks: 75 },
  { name: "B", marks: 40 },
  { name: "C", marks: 90 },
  { name: "D", marks: 30 },
];

let total = 0;
let topperMarks = students[0]["marks"];
let topperName = students[0]["name"];

for (let i = 0; i < students.length; i++) {

    if (students[i]["marks"] > 50) {
    console.log(students[i]["name"], "Passed in exam");
  }else{
    console.log(students[i]["name"] , "Failed in exam")
  }
}

console.log("-------------------------------------------------------------")
for(let i = 0 ; i < students.length;i++){
    total += students[i]["marks"];

    if(students[i]["marks"] > topperMarks){
        topperMarks = students[i]["marks"];
        topperName = students[i]["name"]
    }
}

let average = total / students.length;
console.log("Average Marks : " , average);
console.log("Class topper is : " , topperName)

console.log("---------------------------------------------------------")


for(let i = 0; i < students.length; i++){
    let gradeMarks = students[i]["marks"];
    let grade;

    switch(true){
        case ( gradeMarks >=90) : grade = "A"
        break;
        case ( gradeMarks >=70) : grade = "B"
        break;
        case ( gradeMarks >=50) : grade = "C"
        break;
        default : grade = "A"
    }
    console.log(students[i]["name"] , " Grade is :" , grade )
}
