import React from 'react';

export default class MangaSelector extends React.Component {
    displayName = 'MangaSelector';

    constructor(props) {
        super(props);
        
        setTimeout(() => {
            this.getTitles().then(titles => {
                this.setState({titles});
            });
        }, 1000);
        
        this.state = {titles: []};
    }
    
    getTitles() {
        return Promise.resolve([1, 2, 3]);
    }

    componentDidMount() {
        console.log('mounted component', this.displayName);
    }

    render() {
        console.log('rendering', this.displayName);
        return (
            <select>
                {this.state.titles.map(
                    (option, i) =>
                        <option
                            key={i}
                            value={option}
                        >{option}</option>
                )}
            </select>
        );
    }
}
