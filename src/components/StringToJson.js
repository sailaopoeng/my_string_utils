import React from 'react';
import InputArea from './InputArea';
import OutputArea from './OutputArea';

const StringToJson = () => {
    const parseNow = () => {
        var inputString = document.getElementById('inputStr').value;
        if(inputString.indexOf('"') === 0) inputString = inputString.substr(1);
        if(inputString.substr(inputString.length - 1) === '"') inputString = inputString.substr(0, inputString.length - 1);
        inputString = inputString.split('\\"').join('"');
        var jsonObj = JSON.parse(inputString);
        var result = JSON.stringify(jsonObj, null, "\t");
        return result;
    }


    return (
        <>
            <h1>Escaped String to JSON</h1>
            <InputArea label="String Input" />
            <OutputArea label="Output" btnLabel="Parse" func={parseNow} langauge="json" />
                
        </>
    )
}

export default StringToJson;