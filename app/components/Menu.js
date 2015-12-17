import React from 'react';
import MangaSelector from './MangaSelector';

export default React.createClass({
    render: () => {
        return (
            <nav>
                <h1>Furaksu Manga Reader</h1>
                <MangaSelector/>
            </nav>
        );
    }
});
