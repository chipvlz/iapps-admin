import React from 'react';

const FormInput = (props) => {
    return (
        <div className="form-group">
            <input {...props} />
        </div>
    );
}

export default FormInput;