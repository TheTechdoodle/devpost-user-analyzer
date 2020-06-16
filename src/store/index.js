import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        weights: {
            projectsCount: 1.0,
            followerCount: 0.1,
            achievementsCount: 0.5,
            skillCount: 0.6,
            interestCount: 0.0,
            introLength: 0.0
        }
    },
    mutations: {
        setUsers(state, users)
        {
            state.users = users;
        },
        setWeight(state, {name, value})
        {
            state.weights[name] = value;
        }
    },
    actions: {},
    modules: {},
    getters: {
        usersReady: state =>
        {
            return state.users.length > 0;
        },
        usersWeighted: state =>
        {
            return state.users.map(user =>
            {
                let score = 0.0;
                score += state.weights.achievementsCount * user.achievements;
                score += state.weights.followerCount * user.followers;
                score += state.weights.projectsCount * user.projects;
                score += state.weights.interestCount * user.interests.length;
                score += state.weights.skillCount * user.skills.length;
                score += state.weights.introLength * user.intro.length;
                
                return {score, ...user};
            });
        }
    }
});
