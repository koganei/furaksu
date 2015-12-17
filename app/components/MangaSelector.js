import React from 'react';

export default class MangaSelector extends React.Component {
    displayName = 'MangaSelector';

    render() {
        return (
            <select>
                {[1, 2, 3].map(
                    (option, i) => <option value={option} key={i}>{option}</option>
                )}
            </select>
        );
    }
}
