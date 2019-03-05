import React from 'react';

const Form = (props) => {

    return (
        <div className="form-container">
            <form action="">
                <input 
                type="text" 
                value={props.name}
                onChange={props.updateText}
                placeholder="What do now?"
                />
                <button className="button" onClick={props.submit}>Add Item</button>
                <button className="button" onClick={props.clear}>Clear List</button>
            </form>
        </div>
    );
}

export default Form;