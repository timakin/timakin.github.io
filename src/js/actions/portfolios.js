import * as types from '../constants/ActionType';

export function loadGithubRepos() {
    return { type: types.LOAD_GITHUB_REPOS };
}
