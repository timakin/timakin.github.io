'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

export const ActionCreators = {
    loadGithubRepos: function() {
        AppDispatcher.dispatch({
            actionType: ActionTypes.LOAD_GITHUB_REPOS,
            repos: [{
                id: 0,
                name: "testname",
                url: "http://google.com"
            },
            {
                id: 1,
                name: "testname2",
                url: "http://yahoo.co.jp"
            }]
        });
    }
}
