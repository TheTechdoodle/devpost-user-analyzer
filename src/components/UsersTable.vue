<template>
    <v-data-table :headers="headers"
                  :items="usersWeighted"
                  :items-per-page="25"
                  :footer-props="{'items-per-page-options': [10, 25, 50, -1]}"
                  item-key="name"
                  sort-by="score"
                  sort-desc
                  must-sort
                  show-expand
    >
        <template v-slot:item.name="{item}">
            <a target="_blank" rel="noopener noreferrer" :href="item.url">{{item.name}}</a>
        </template>
        <template v-slot:item.score="{item}">
            {{item.score.toFixed(1)}}
        </template>
        <template v-slot:item.skills="{item}">
            {{item.skills.join(', ')}}
        </template>
        <template v-slot:expanded-item="{headers, item}">
            <td :colspan="headers.length">
                <v-container>
                    <v-row>
                        Team status: {{item.team}}
                    </v-row>
                    <v-row>
                        <v-col>
                            Skills
                            <ul>
                                <li v-for="skill of item.skills" :key="skill">
                                    {{skill}}
                                </li>
                            </ul>
                        </v-col>
                        <v-col>
                            Interests
                            <ul>
                                <li v-for="interest of item.interests" :key="interest">
                                    {{interest}}
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                    <v-row v-if="item.intro">
                        <blockquote class="blockquote">"{{item.intro}}"</blockquote>
                    </v-row>
                </v-container>
            </td>
        </template>
    </v-data-table>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'UsersTable',
        data: () => ({
            headers: [
                {text: 'Name', value: 'name'},
                {text: 'Score', value: 'score'},
                {text: 'Projects', value: 'projects'},
                {text: 'Followers', value: 'followers'},
                {text: 'Achievements', value: 'achievements'},
                {text: 'Skills', value: 'skills'},
                {text: '', value: 'data-table-expand'}
            ],
            options: {
                itemsPerPage: 25
            }
        }),
        computed: {
            ...mapGetters(['usersWeighted'])
        }
    };
</script>

<style scoped>

</style>
