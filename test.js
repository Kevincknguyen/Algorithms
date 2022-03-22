const obj1 = {
    name: "Pizza",
    calories: 9001,
  };
  
  const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
  ];
  
  const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };
  
  const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
  });
  
  const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
  ];
  

  let test=[]
  for (key in obj2){
      console.log(key)
      test.push([key])
  }
console.log(test)


for (let i=0;i<test.length;i++){
    console.log('pass',test[i])
}

console.log(test)