/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectCourses,totalCredit,remaining}) => {
    console.log(selectCourses)
    return (
        <div>
            <h2 className="text-cyan-600 text-xl">Credit Hour Remaining : {remaining}hr</h2>
            <p>Total Credit Hour : {totalCredit}</p>
            <h4>Course Title</h4>
            
          {
            selectCourses.map((course)=>(
                
                  <li key={course.id} type="1">{course.title}</li>
                // <ol>{course.title}</ol>   
            ))
          }
        </div>
    );
};

export default Cart;