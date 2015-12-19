import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionConstants from '../constants/MangaConstants';

const mangas = [1, 2, 3];
const CHANGE_EVENT = 'change';

let selected = mangas[0];

/**
 * Add a new manga to the store
 * 
 * @param {Object} manga
 * @param {Number|String} manga.id
 * @param {String} manga.title
 */
function create(manga) {
	mangas[manga.id] = manga;
}

/**
 * Update manga in store
 * 
 * @param {Object} manga
 * @param {Number|String} manga.id
 * @param {String} manga.title
 */
function update(manga) {
	mangas[manga.id] = manga;
}

/**
 * Update mangas in store
 * 
 * @param {Object} mangas with id in key
 */
function updateAll(mangas) {
	for (let manga in mangas) {
		this.update(manga);
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
        super(props);
        this.dispatcherIndex = AppDispatcher.register(this.handleAction);
        this.addMangaContinuously();
	}
    
    addMangaContinuously() {
        setTimeout(() => {
            mangas.push(mangas.length+1);
            this.emitChange();
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
