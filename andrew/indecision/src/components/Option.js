import React from 'react';

//Option child of Options

const Option = (props) => {
    return(
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

export default Option;