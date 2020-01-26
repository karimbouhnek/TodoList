import React, { useState, useEffect } from 'react';

export function Task(props) {
    const [name, setName] = useState("");
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [isNew, setNew] = useState(false);

    const { index, deleteTask, updateTask, toggleCheck } = props;

    useEffect(() => {
        const { todo } = props;
        if (todo) {
            setName(todo.name);
            setChecked(todo.checked);
        } else {
            setNew(true);
        }
    }, [props]);


    const updateChecked = () => {
        setChecked(!checked);
        toggleCheck(index);
    }
    
    return (
        <>
            <li>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" checked={checked} disabled={isNew} onChange={updateChecked} />
                        </div>
                    </div>
                    {
                        ( edit || isNew ) ? ( 
                            <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control" />
                        ) : 
                        (
                            <div 
                                className="form-control" 
                                style={{
                                    textAlign:'left',
                                    textDecoration: (checked ? 'line-through' : ''),
                                }}
                            >
                                {name}
                            </div>
                        )
                    }
                    
                    <div className="input-group-append">
                        {
                            isNew ? (
                                <button
                                    onClick={() => {
                                        updateTask(name);
                                        setName('');
                                    }}
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    disabled={name===''}
                                    style={{marginLeft : '0px'}}
                                >
                                    Ajouter
                                </button>
                            ) : 
                            (
                                <>
                                    <button
                                        onClick={() => {
                                            setEdit(!edit);
                                            if (edit) {
                                                updateTask(name, index)
                                            }
                                        }}
                                        disabled={checked}
                                        className="btn btn-outline-secondary" type="button"
                                        style={{marginLeft:'0px'}}
                                    >{edit ? 'Enregistrer' : 'Modifier'}</button>
                                    <button className="btn btn-danger" disabled={checked} type="button" onClick={() => { deleteTask(index) }}>Supprimer</button>
                                </>
                            )
                        }
                        
                    </div>
                </div>
            </li>
        </>
    );
}

export default Task;
