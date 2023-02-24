///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => {return acc + cur.price}, 0)
// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax){
    return (cartTotal * (1 + tax)) - couponValue
}

// console.log(calcFinalPrice(100, 10, .08))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    {
        customerID: number/string - in a simple system just keeps track of what number customer this is, in a complex system we could track this customer's return trips to gain insights about different things
        itemsBought: array of strings - we can track purchases to calculate which menu items are more popular in an area, we could prioritize their prep over less popular items
        cartTotal: number - calculate the ammount people in this area tend to spend, allowing us to dial in our prices to optimize purchases
        couponUsed: boolean - helps determine whether giving out coupons can improve sales or if it doesn't affect sales in this area, or by how much
        date: string(?) - Determine when sales are higher, or when discounts and other deals will be most productive for sales
    }
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let custObj = {
    customerID: 123,
    itemsBought: ['Garlic Bread', 'The Extra Slice'],
    cartTotal: 20,
    couponUsed: true,
    date: '2/24/2023'
}