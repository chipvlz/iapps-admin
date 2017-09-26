import React from 'react';

import './styles.css';

const KeyRow = ({data}) => {
    return (
        <tr>
            <td>{data.id}</td>
            <td><input type="text" value={data.code} readOnly /></td>
            <td><span className={`text-${(Number(data.status) ? 'success' : 'danger')}`}>{(Number(data.status) ? 'Активно' : 'Неактивно')}</span></td>
            <td>{data.date}</td>
            <td>{data.price}({data.cnt})</td>
            <td><a target="_blank" rel="noopener noreferrer" href={data.user_profile}>{data.user_profile}</a></td>
            <td className="cursor-pointer">
                <ul className="dlist">
                    {data.devices && data.devices.trim().split('- \n').map((item, index) =>
                        <li key={index}><small><span>{item}</span></small></li>
                    )}
                </ul>
            </td>
            <td>
                <table className="buttons-table">
                    <tbody>
                        <tr>
                            <td><button className="btn btn-danger btn-xs">Отключить</button></td>
                            <td><button className="btn btn-danger btn-xs">Удалить</button></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button className="btn btn-info btn-xs">Изменить</button></td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );
}

export default KeyRow;