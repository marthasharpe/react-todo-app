import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actionCreators';
import './AddTodo.css';

const AddTodo = (props) => {
    
    const [value, setValue] = React.useState('')
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(value);
        setValue('');
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label>Add new todo:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={value}
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo);