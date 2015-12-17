import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';



export default class Main extends React.Component {
    displayName = 'Main';

    render() {
        return (
            <Menu />
        );
    }
}

ReactDOM.render(React.createElement(Main), document.getElementById('app'));
