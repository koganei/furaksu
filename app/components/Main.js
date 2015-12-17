import React from 'react';
import ReactDOM from 'react-dom';

let Main = React.createClass({
    render: () => {
        return (
            <div>
                Tests
            </div>
        );
    }
});

ReactDOM.render(React.createElement(Main), document.getElementById('app'));