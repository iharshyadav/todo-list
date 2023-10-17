"use client"
import React, { useState } from "react";

const page=()=>{
  const [text, settext] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const noreload=(e)=>{
   e.preventDefault()
   //  console.log(text)
   //  console.log(desc)
   setMainTask([...mainTask,{text,desc}]);
   settext("")
   setdesc("")
  }

  const deleteNote=(i)=>{
       let copyTask=[...mainTask];
       copyTask.splice(i,1)
       setMainTask(copyTask);
  }

  let renderTask=<h5>No Task Available</h5>

  if(mainTask.length > 0){
    renderTask=mainTask.map((t,i)=>{
      return(
        <>
          <li className="flex justify-between">
             <div key={i} className="bg-slate-200 flex justify-between w-2/3 mb-8">
               <h5 className="text-2xl font-semibold">{t.text}</h5>
               <p className="text-xl ">{t.desc}</p>
             </div> 
             <button
               onClick={()=>{
                deleteNote(i);
               }}
                className="bg-red-600 p-2 border-0 mb-8 rounded">Delete</button>
          </li> 
        </>  
      )
    })
  }

  return(
     <>
           <h1 className="bg-black text-center text-white h-16 w-100% p-5 font-bold text-2xl">MY TODO LIST</h1>
           <form className="flex justify-center" onSubmit={noreload}>
             <input className="p-2 border-2 border-black m-3 " type="text" 
               placeholder="Enter title here"
               value={text}
               onChange={(e)=>{
               settext(e.target.value)
              //  console.log(text)
               }}
             />
             <input className="p-2 border-2 border-black m-3 " type="text"
               placeholder="Enter description here"
               value={desc}
               onChange={(e)=>{
                setdesc(e.target.value)
                // console.log(desc)
               }}
             />
             <button className="p-2 border-2 border-black m-3 bg-black text-white">Submit</button>
           </form>
           <hr className="mt-6" />
           <div className="bg-slate-200 p-8">
             <ul>{renderTask}</ul>
           </div>
     </>
  )
}

export default page

