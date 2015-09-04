import * as types from '../constants/ActionType';


/* Action Creators */
export function loadGithubRepos() {
    return { type: types.LOAD_GITHUB_REPOS };
}
