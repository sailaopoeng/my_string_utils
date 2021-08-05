import React from 'react';
import InputArea from './InputArea';
import OutputArea from './OutputArea';

const JsonToString = () => {
    const stringifyNow = () => {
        try{
            var inputJsonStr = document.getElementById('inputStr').value;

            var jsonObj = JSON.parse(inputJsonStr);
            var result = JSON.stringify(JSON.stringify(jsonObj));
            return result;
        }
        catch(e){
            alert(e);
        }
        return null;
    }
    return (
        <>
            <h1>JSON to Escaped String</h1>
            <InputArea label="JSON Input" />
            <OutputArea label="Output" btnLabel="Stringify" func={stringifyNow} langauge="text" />
        </>
    )
}

export default JsonToString;