
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.


function queueTime(customers, n) {
    console.log("Hello")
    let count = 0
    while (Number.isInteger(customers[0])) {
        for (let i = 0; i < n; i++) {
            if (customers[i] === 0) {
                while (customers[i] === 0) {
                    customers.splice(i, 1)
                    if (!Number.isInteger(customers[0])){
                        return count
                    }
                }
            }
            customers[i]--
        }
        count++
    }
    return count

}

console.log(queueTime([], 1))
console.log(queueTime([1,2,3,4], 1))
console.log(queueTime([2,2,3,3,4,4], 2))
console.log(queueTime([1,2,3,4,5], 100))

let x=[0]
x[1] +=1
console.log(x)

let y=[]
console.log(y.length)