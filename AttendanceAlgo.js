let attendance=[];

attendance.push("Austin")
attendance.push("Erik V")
attendance.push("Colby")
attendance.push("Craig")
attendance.push("Daniel A")
attendance.push("Jaden")
attendance.push("Jeremy")
attendance.push("Kevin")
attendance.push("Liz")
attendance.push("Louie")
attendance.push("Maria")
attendance.push("Nate")
attendance.push("Sam")
attendance.push("Toribio")
attendance.push("Wiji")



console.log("Attendance: "+ attendance)
console.log("Number of people in attendance: "+attendance.length)

let peoplePerRoom=4;
console.log("Maximum people per room: "+peoplePerRoom)
let numberOfRooms=Math.ceil(attendance.length/peoplePerRoom)
console.log("Number of rooms: " +numberOfRooms)



function roomRandomizer(){
    let roomAssignment={};
    // CREATES ROOMS IN DICTIONARY
    for (let i=1;i<numberOfRooms+1;i++){
        roomAssignment[i]=[]
    }
    while(attendance.length >0){
        // LOOP TOUCHES EACH ROOM ONCE AND INSERTS 1 RANDOM STUDENT BEFORE RETURNING TO TOP
        for (let i=1;i<numberOfRooms+1;i++){
            let randStudentIndex=Math.floor((Math.random()*attendance.length+1));
            roomAssignment[i].push(attendance[randStudentIndex-1])
            attendance.splice(randStudentIndex-1,1)
            
        }
    }
    // LOGS THE ROOM ASSIGNMENT IN A READABLE MANNER
    for (const room in roomAssignment){
        console.log("Room "+room+":"+roomAssignment[room])
    }
    
}
    roomRandomizer()