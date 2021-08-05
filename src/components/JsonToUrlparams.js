import React from 'react';
import InputArea from './InputArea';
import OutputArea from './OutputArea';


const JsonToUrlparams = () => {
    const convertNow = () => {
        var inputJsonStr = document.getElementById('inputStr').value;
        var jsonObj = JSON.parse(inputJsonStr);
        
        var outputStr = "";
        Object.keys(jsonObj).forEach(function(key) {
            if(key && key.length > 0 && jsonObj[key] && jsonObj[key].toString().length > 0){
                var tmpStr = key + "=" + jsonObj[key];
                if(outputStr.length > 0) outputStr += "&";
                outputStr += tmpStr;
            }
        });

        return outputStr;
    }
    return (
        <>
            <h1>JSON to URL Parameters</h1>
            <InputArea label="JSON Input" />
            <OutputArea label="Output" btnLabel="Convert" func={convertNow}  langauge="text" />
        </>
    )
}

export default JsonToUrlparams;