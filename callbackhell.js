const getRollNo=()=>{
    setTimeout(()=>{
        console.log("API getting RollNo");
        let roll_no=[1,2,3,4.5];
        console.log(roll_no);
        setTimeout((roll_no) =>{
            const biodata={
                name:"somi",
                age:26
            }
            console.log(`my rollno is ${roll_no}.my name is ${biodata.name} and i am ${biodata.age} years old`);
            setTimeout((name)=>{
                biodata.gender="female"
                console.log(`my rollno is ${roll_no}.my name is ${biodata.name} and i am ${biodata.age} years old.i am alpha ${biodata.gender}`);               
            },2000,biodata.name);

        },2000,roll_no[1]);
    },2000);
}
getRollNo();