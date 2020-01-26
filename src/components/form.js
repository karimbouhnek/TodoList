import React, { useState } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../Redux/Actions/Index";

function mapDispatchToProps(dispatch) {
    return {
      addTodo: todo => dispatch(addTodo(todo))
    };
  }


export function Form(props) {

    const [value, setValue] = useState("")

    const handleSubmit = event => {
        //setValue(event.target.value);
        console.log(event.target.value)
    }

    const handleChange = event => {
        setValue(event);
        console.log(value)
    }


    return (
        <div>
            <form style={{ display: "flex", justifyContent: "center",alignItems: "center"}} onSubmit={handleSubmit} >
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter task"  onChange={handleChange}/>
                <button type="submit" className="btn btn-info">Add</button>

            </form>
        </div>
    );
}

export default Form;
