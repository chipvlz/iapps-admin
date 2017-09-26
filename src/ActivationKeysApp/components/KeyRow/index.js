import React, { Component } from 'react';

class KeyRow extends Component {
    render() {
        return (
            <tr>
                <td>10</td>
                <td><input type="text" value="c65f9eb08dc77aa7c5e5bf3b32053364" readOnly /></td>
                <td><span className="text-success">Активно</span></td>
                <td>2017-09-23 03:05:35</td>
                <td>0(0)</td>
                <td><a target="_blank" rel="noopener noreferrer" href="https://vk.com/f0x_ua">https://vk.com/f0x_ua</a></td>
                <td className="cursor-pointer">
                    <ul className="dlist">
                        <li>
                            <small><span>iPhone6,1: iPhone</span></small>
                        </li>
                        <li>
                            <small><span>iPad5,3: iPad Fox</span></small>
                        </li>
                        <li>
                            <small><span>iPhone6,1: iPhone Fox</span></small>
                        </li>
                    </ul>
                </td>
                <td>
                    <button className="btn btn-danger btn-sm" href="disable.php?id=10">Отключить</button>
                </td>
                <td>
                    <button className="btn btn-danger btn-sm" href="delete.php?id=10">Удалить</button>
                </td>
            </tr>
        );
    }
}

export default KeyRow;