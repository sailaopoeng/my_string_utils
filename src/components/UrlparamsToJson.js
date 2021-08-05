import React from 'react';
import InputArea from './InputArea';
import OutputArea from './OutputArea';

const UrlparamsToJson = () => {
    const convertNow = () => {
        var inputString = document.getElementById('inputStr').value;
        var stringArray = inputString.split("&");
        var outputObj = {};
        stringArray.map( oneStr => {
            outputObj[oneStr.split("=")[0]] = oneStr.split("=")[1];
        });
        return JSON.stringify(outputObj, null, '\t');
    }
    return (
        <>
            <h1>URL parameters to JSON</h1>
            <InputArea label="URL Parameters Input" />
            <OutputArea label="Output" btnLabel="Convert" func={convertNow} langauge="json" />
        </>
    )
}

export default UrlparamsToJson;