import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/actionCreators';
import './Todos.css';

const Todos = (props) => {

    const todoList = props.todos.length ? (props.todos.map(todo => {
        const index = props.todos.indexOf(todo);
        return (
            <li key={index}>
                <span className="todo">{todo}</span>
                <button onClick={() => props.deleteTodo(index)}>x</button>
            </li>
        )
    })) : (
        <li>You have nothing to do.</li>
    );

    return (
        <div className="todoList">
            <ul>
                {todoList}
            </ul>
        </div>
    )
}

const mapStateToProps = ({ todos }) => ({
    todos
})

const mapDispatchToProps = {
    deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);