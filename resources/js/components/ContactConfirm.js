import React from 'react';
import ReactDOM from 'react-dom';

function ContactConfirm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">ContactConfirm Component</div>

                        <div className="card-body">仮の確認画面！ ここに（確認のために）入力値を表示させたい！</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactConfirm;

if (document.getElementById('contactConfirm')) {
    ReactDOM.render(<ContactConfirm />, document.getElementById('contactConfirm'));
}
