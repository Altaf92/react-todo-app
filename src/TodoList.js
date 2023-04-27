import React from 'react'

const TodoList = (props) => {

    return (
        <>
            <div className='todo-style'>
            <li>{props.item}</li>
                <i className="fa-solid fa-trash"                aria-hidden="true" onClick={() => {
                    props.onSelect(props.id)
                }}></i>
                
            </div>
        </>
    )
}   

export default TodoList