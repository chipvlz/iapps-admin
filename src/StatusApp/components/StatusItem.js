import React from 'react';

const StatusItem = (props) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <div className="white-box analytics-info">
                <h3 className="box-title">{props.title}</h3>
                <ul className="list-inline two-part">
                    <li>
                        <div id="sparklinedash"></div>
                    </li>
                    <li className="text-right">
                        <i className="ti-arrow-up text-success"></i> <span className="counter text-success">{props.value}</span>
                        <span>&#8381;</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default StatusItem;