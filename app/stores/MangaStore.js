import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

export default let mangaStore = new MangaStore();

mangas = {};

let create(manga) {
	mangas[manga.id] = {
		title: manga.title,
		manga
	};
}

let update(id, manga) {
	mangas[manga.id] = {
		title: manga.title,
		manga
	};
}

let updateAll(mangas) {
	for (let {id, manga} in mangas) {
		this.update(id, manga);
	}
}

class MangaStore extends EventEmitter {
	
	constructor() {
		this.dispatcherIndex = AppDispatcher.register(this.handleAction);
	}
	
	handleAction(payload) {
		switch(payload.actionType) {
			
		} 
	}
	
	getAll() {
		
	}
	
}
