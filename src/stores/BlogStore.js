import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'

let _allBlogs = [];

class BlogStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register((action) => {
      const { type, payload } = action;
      switch(type) {
        case 'RECEIVE_BLOGS':
          console.log('STORE GET:', payload)
          _allBlogs = payload;
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getBlogs() {
    return _allBlogs;
  }
}

export default new BlogStore();
