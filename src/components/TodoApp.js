import React, { useState, useEffect } from 'react';
import { Task } from '../components/task';
//import { Form } from '../components/form';

export function TodoApp(props) {
    const [data, setData] = useState([]);

    function deleteTask(index) {
        setData(data.filter( (item, i) => { return (i !== index); } ));
    }

    const updateTask = (name, index) => {
        if (!index) {
            const item = {
                id: null,
                name,
                checked: false,
            }
            setData([...data, item]);
        } else {
            setData(data.map((item, i) => {
                if (i === index) {
                    item.name = name;
                }
                return item;
            }));
        }
        
    }

    const toggleCheck = (index) => {
        setData(data.map((item, i) => {
            if (i === index) {
                item.checked = !item.checked;
            }
            return item;
        }));
    }

    useEffect(() => {
        console.log(data)
    }, [data]);

    useEffect(() => {
        setData([
            {
                id:1,
                name:"Lorem ipsum dolor sit amet, consectetur",
                checked: true
            }, {
                id:2, 
                name:"Aenean elementum nunc malesuada eros",
                checked: true
            }, {
                id:7, 
                name:"Phasellus varius, nisi a tempus aliquet.",
                checked: false
            }
        ]);
    }, []);

    

    return (
        <div>
            <section className="jumbotron text-center">
                <div className="container">
                <h1 className="jumbotron-heading">ToDo or Not Todo App</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                </div>
            </section>
            <div className="album py-5 bg-light">
                <div className="container">
                    <ul className="list-unstyled mb-4">
                        {data.map((todo, i) => (
                            <Task todo={todo} index={i} key={i} deleteTask={deleteTask} updateTask={updateTask} toggleCheck={toggleCheck}/>
                        ))}
                        <Task todo={null} updateTask={updateTask} />
                    </ul>
                </div>
            </div>

            
        </div>
    );
}

export default TodoApp;
