import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

let Main = React.createClass({
    render: () => {
        return (
            <Menu />
        );
    }
});

ReactDOM.render(React.createElement(Main), document.getElementById('app'));
