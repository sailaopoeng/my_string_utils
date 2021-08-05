import React, { useState } from 'react';
import { CopyBlock, monokai } from 'react-code-blocks';

const OutputArea = (props) => {
    const [showText, setShowText] = useState("");
    const [execFunc] = useState(() => props.func);
    const [langauge] = useState(props.langauge)
    

    const doWrapperFun = () => {
        var output = execFunc();
        setShowText(output);
    }
    return (
        <>
            <input type="submit" value={props.btnLabel} className="bigSubmit" onClick={doWrapperFun} />
            <div className="outputlabel">
                <label className="leftLabel" htmlFor="OutputText">{props.label}:</label>
            </div>
            <div className="codepen">
            <CopyBlock
                language={langauge}
                text={showText}
                showLineNumbers={false}
                theme={monokai}
                wrapLines={true}
                codeBlock
                />
            </div>
        </>
    )
}

export default OutputArea;