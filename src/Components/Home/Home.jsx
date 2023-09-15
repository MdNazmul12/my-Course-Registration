/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';


import Cart from '../Cart/Cart';
import { data } from 'autoprefixer';
const Home = () => {
const[allCourse,setAllCourse]=useState([]);
const [selectCourses,setSelectCourses]=useState([]);
const [remaining,setRemaining]=useState([0])
const[totalCredit,setTotalCredit]=useState([0])
useEffect(()=>{
    fetch("./Data.json")
    .then(res=>res.json())
    .then(data=>setAllCourse(data))
},[]);

 const handleSelect=(course)=>{
    const isCourse=selectCourses.find((subject)=>subject.id==course.id)
    let count=course.credit;
    if (isCourse) {
      return  alert("Already Registration To Subject")
    }else{
        selectCourses.forEach(course=>{
            count=count+course.credit
        })
        const totalRemaining=20-count;
        if (count > 20) {
          return  alert("Cross Your Credit")
        }else{
            setTotalCredit(count)
            setRemaining(totalRemaining)
           setSelectCourses([...selectCourses,course])
        }
        
    }
    
 } 


    return (
        
        <div className='container'>
            <div>
            <h1 className="text-center text-3xl font-bold">Course-Registration</h1>
            </div>
          
            <div className="flex">
            <div className="grid grid-cols-3 gap-2 mt-8 ">
      {
        allCourse.map((course)=>(
            <div key={course.id} className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={course.img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{course.title}</h2>
              <p>{course.description}</p>
              <div className="justify-around flex">
                <div className="">price:{course.price}</div> 
                <div className="">Credit:{course.credit}</div>
              </div>
              <div className='text-center '>
                <button onClick={()=>handleSelect(course)} className="btn btn-primary w-full">Select</button>
              </div>
            </div>
              </div>
        ))
      }
         
              </div>
              <div className='text-end'>
           <Cart selectCourses={selectCourses}remaining={remaining}totalCredit={totalCredit}></Cart>
           </div>
            </div>
        </div>
       
    );
};

export default Home;