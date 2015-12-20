import React from 'react';
import MangaSelector from './MangaSelector';

export default class Menu extends React.Component {
    displayName: string = 'Menu';

    componentDidMount() {
        console.log('mounted component', this.displayName);
    }

    render() {
        console.log('rendering', this.displayName);
        return (
            <nav>
                <h1>{'Furaksu Manga Reader'}</h1>
                <MangaSelector/>
            </nav>
        );
    }
}
