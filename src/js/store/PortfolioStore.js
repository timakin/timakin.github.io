'use strict';

import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

let SINGLETON = Symbol();
let SINGLETON_ENFORCER = Symbol();

class PortfolioStoreSingleton extends EventEmitter {
    constructor(enforcer) {
        super();

        if (enforcer !== SINGLETON_ENFORCER) {
            throw "Cannot construct singleton";
        }

        AppDispatcher.register(this._onAction.bind(this));

        this._repos = [];
        this.CHANGE_EVENT = 'change';
    }

    insertRepos(repos) {
        this._repos = this._repos.concat(repos);
    }

    static get instance() {
        if (!this[SINGLETON]) {
            this[SINGLETON] = new PortfolioStoreSingleton(SINGLETON_ENFORCER);
        }
        return this[SINGLETON];
    }

    _onAction(action) {
      switch (action.actionType) {
          case ActionTypes.LOAD_GITHUB_REPOS:
              if (this._repos.length === 0) {
                  this.insertRepos(action.repos);
              }
              this.emitChange();
              break;
          default:
      }
    }

    getAll() {
        return this._repos;
    }

    emitChange() {
        this.emit(this.CHANGE_EVENT);
    }

    addEventListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }

    removeEventListener(callback) {
        this.removeListener(this.CHANGE_EVENT, callback);
    }

}
const PortfolioStore = PortfolioStoreSingleton.instance;
export default PortfolioStore;
