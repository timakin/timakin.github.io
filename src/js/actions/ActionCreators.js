'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

export const ActionCreators = {
    loadGithubRepos: function() {
        AppDispatcher.dispatch({
            actionType: ActionTypes.LOAD_GITHUB_REPOS
        });
    }
}
