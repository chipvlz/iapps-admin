import React from 'react';

const TableHeader = (props) => {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Код</th>
                <th>Статус</th>
                <th>Дата активации</th>
                <th>Цена</th>
                <th>Ссылка</th>
                <th>Кол-во<br />девайсов</th>
                <th>Действия</th>
            </tr>
        </thead>
    );
}

export default TableHeader;