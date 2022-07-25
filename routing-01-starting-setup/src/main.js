import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';



import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                name: 'teams',
                components: {
                    default: TeamsList,  
                    footer: TeamFooter,
                },
                path: '/teams', component: TeamsList, alias: '/', children: [
                    { name: 'team-members', path: '/:teamId', component: TeamMembers, props: true },
                ]
            },
            { 
                name: 'user',
                path: '/users', 
                // component: UsersList,
                components: {
                    default: UsersList,
                    footer: UserFooter,
                } 
            },

            { path: '/:notFound(.*)', component: NotFound }
        ],
        linkActiveClass: 'router-link-active',
        scrollBehavior(_, __, savedPosition) {
            if (savedPosition)
                return savedPosition;
            return {
                left: 0,
                top: 0,
            }
        },  
    }
);

router.beforeEach(function(to, from, next) {

})

const app = createApp(App)

app.use(router)

app.mount('#app');
