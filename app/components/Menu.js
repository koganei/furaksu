import React from 'react';
import MangaSelector from './MangaSelector';

export default class Menu extends React.Component {
    displayName = 'Menu';

    render() {
        return (
            <nav>
                <h1>{'Furaksu Manga Reader'}</h1>
                <MangaSelector/>
            </nav>
        );
    }
}
