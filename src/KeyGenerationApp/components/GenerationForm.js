import React, { Component } from 'react';

import FormInput from './FormInput';

class GenerationForm extends Component {
    render() {
        return (
            <form action="generate.php" className="clearfix">
                <FormInput type="number" className="form-control" name="price" placeholder="Цена" />
                <FormInput type="number" className="form-control" name="pay_count" placeholder="Оплаченое количество девайсов" />
                <FormInput type="text" className="form-control" name="link" placeholder="Ссылка на профиль" />
                <button className="btn btn-success form-control">Сгенерировать</button>
            </form>
        );
    }
}

export default GenerationForm;