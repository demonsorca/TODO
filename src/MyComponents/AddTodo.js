import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("Title or Description cannot be blank");
        }
        else{
            addTodo(title,des);
        }
    }
    return (
        <div className = "container">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text " value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="des" className="form-label">Todo Description</label>
                    <input type="text" value={des} onChange={(e)=>{setDes(e.target.value)}} className="form-control" id="des"/>
                </div>
               
                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    ) 
}
