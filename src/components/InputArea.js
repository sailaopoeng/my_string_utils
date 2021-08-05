import React from 'react';

const InputArea = (props) => {
    return (
        <>
            <div className="inputlabel">
                <label className="leftLabel" htmlFor="inputStr">{props.label}:</label>
            </div>
            <div className="inputTextbox">
                <textarea id="inputStr" name="inputStr" rows="5" cols="50"></textarea>
            </div>
        </>
    )
}

export default InputArea;