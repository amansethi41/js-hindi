const tinderUser = new Object()


tinderUser.id = "123abc"
tinderUser.name = "Samar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aman",
            lastname: "sethi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2 }
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
        {
        id: 1,
        email: "a@gmail.com"
    },
        {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructer: "hitesh"
}

// course.courseinstructer

const {courseInstructer} = course

console.log(courseInstructer);



// const navbar = ({company}) => {
    
// }                      This is destructuring in js react

// navbar(company = "hitesh")

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]