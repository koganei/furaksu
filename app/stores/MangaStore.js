import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionConstants from '../constants/MangaConstants';

const mangas = [{
    title: 'Naruto'
}, {
    title: 'One Piece'
}, {
    title: 'Kaiji'
}];

const CHANGE_EVENT = 'change';

let selected = mangas[0];

/**
 * Add a new manga to the store
 * 
 * @param {Object} manga
 * @param {Number|String} manga.id
 * @param {String} manga.title
 */
function createManga(manga) {
	mangas.push(manga);
}

/**
 * Update manga in store
 * 
 * @param {Object} manga
 * @param {Number|String} manga.id
 * @param {String} manga.title
 */
function updateManga(id, manga) {
	mangas[id] = manga;
}

/**
 * Update mangas in store
 * 
 * @param {Object} mangas with id in key
 */
function updateMangas(mangas) {
	for (let {id, manga} in mangas) {
		this.update(id, manga);
	}
}

/**
 * Selects a manga
 * 
 * @param {Object} manga selected manga
 */
function select(manga) {
	selected = manga;
}

class MangaStore extends EventEmitter {
	
	constructor(props) {
        console.log('building store');
        super(props);
        this.dispatcherIndex = AppDispatcher.register(this.handleAction);
        // this.addMangaContinuously();
	}
    
    getSize() {
        return mangas.length;
    }
    
    addMangaContinuously() {
        setTimeout(() => {
            createManga({id: this.getSize() + 1, title: 'manga ' + this.getSize() + 1});
            this.emitChange();
            console.log('added');
            this.addMangaContinuously();
        }, 1000);
    }
	
	handleAction(payload) {
        switch (payload.actionType) {
            case ActionConstants.VIEW_MANGA:
                select(payload.manga);
                break;
            default:
                console.log('action type not handled', payload.actionType);
        }
    }

	getAll() {
        return mangas;
	}
	
	getSelected() {
        return selected;
	}
    
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
	
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }
    
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

export default new MangaStore();
