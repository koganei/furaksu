import React from 'react';
import MangaStore from '../stores/MangaStore';

export default class MangaSelector extends React.Component {
    displayName = 'MangaSelector';
    state = {titles: []};

    constructor(props) {
        super(props);
        this.updateState();
        
        MangaStore.addChangeListener(() => {
            this.updateState();
        });
    }
    
    updateState() {
        this.getTitles().then(titles => {
            this.setState({titles});
        });
    }
    
    componentDidMount() {
        console.log('mounted component', this.displayName);
    }
    
    getTitles() {
        return Promise.resolve(MangaStore.getAll());
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
