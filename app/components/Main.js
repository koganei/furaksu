
/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

export default class Main extends React.Component {
    displayName = 'Main';
    
    componentDidMount() {
        console.log('mounted component', this.displayName);
    }

    render() {
        console.log('rendering', this.displayName);
        return (
            <Menu />
        );
    }
}

ReactDOM.render(
    React.createElement(Main),
    document.getElementById('app')
);
