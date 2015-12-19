import React from 'react';
import store from '../stores/MangaStore';

export default class MangaSelector extends React.Component {
    displayName = 'MangaSelector';
    state = {titles: []};

    constructor(props) {
        super(props);
        this.updateState();
        
        store.addChangeListener(() => {
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
        return Promise.resolve(store.getAll());
    }
    
    onSelectionChange(event) {
        console.log('fired', event.target.value);   
    }

    render() {
        console.log('rendering', this.displayName);
        return (
            <select onChange={this.onSelectionChange}>
                {this.state.titles.map(
                    ({title}, i) =>
                        <option
                            key={i}
                            value={title}
                        >{title}</option>
                )}
            </select>
        );
    }
}
