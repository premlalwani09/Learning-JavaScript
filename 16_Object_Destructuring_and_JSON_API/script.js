const course = {
    coursename: "Learn JavaScript",
    price: "free",
    courseInstructor: "prem"
}

// course.courseInstructor


// const {courseInstructor} = course
const {courseInstructor : Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);





// In React Destructuring , we does not write props.company rather we write {company} 
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")






// JSON API Call Format 
// {
//     "name" : "prem",
//     "coursename" : "Learn JavaScript"
//     "price" : "free"
// }

// [
//     {}.
//     {},
//     {}
// ]



