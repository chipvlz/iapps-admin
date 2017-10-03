import React from 'react';


export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        
        this.id = null;
        this.price = null;
        this.cnt = null;
        this.user_profile = null;
    }

    render() {
        const key = Date.now();
        if (this.props.data)
            return (
                <div id="keysAppModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">{this.props.data.id}: {this.props.data.user_profile}</h4>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.props.updateKeyHandler} className="clearfix">
                                    <input type="hidden" value={this.props.data.id} id="id"/>
                                    <div className="form-group">
                                        <label htmlFor="price">Цена:</label>
                                        <input key={key} defaultValue={this.props.data.price} type="number" id="price" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="devices-num">Количество девайсов:</label>
                                        <input key={key} defaultValue={this.props.data.pay_count} type="number" id="devices-num" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="link">Ссылка на профиль:</label>
                                        <input key={key} defaultValue={this.props.data.user_profile} type="url" id="link" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-success pull-right">Сохранить</button>
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>);
        return <div id="keysAppModal" className="modal fade" role="dialog"></div>;
    }
}