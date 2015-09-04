import { LOAD_GITHUB_REPOS } from '../constants/ActionType';

const initialState = [{
    name: "no repos",
    url: "http://timakin.github.io",
    description: "no repos is loaded"
}];

export default function portfolio(state = initialState, action) {
    switch(action.type) {
    case LOAD_GITHUB_REPOS:
        console.log("yo");
        return [...state, {
            name: "yoyo",
            url: "http://google.com",
            description: "successfully loaded"
        }];

    default:
        return state;
    }
}
