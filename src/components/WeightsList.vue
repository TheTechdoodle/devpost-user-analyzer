<template>
    <v-card>
        <v-card-title>Weights</v-card-title>
        <v-card-text>
            <v-slider v-for="weight of weightNames"
                      :key="weight.id"
                      :label="weight.name + ' (' + weights[weight.id] + ')'"
                      max="1"
                      min="-1"
                      step="0.01"
                      @input="(value) => setWeight(weight.id, value)"
                      :value="weights[weight.id]"
            />
        </v-card-text>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'WeightsList',
        data: () => ({
            weightNames: [
                {name: 'Project Count', id: 'projectsCount'},
                {name: 'Follower Count', id: 'followerCount'},
                {name: 'Achievement Count', id: 'achievementsCount'},
                {name: 'Skill Count', id: 'skillCount'},
                {name: 'Interest Count', id: 'interestCount'},
                {name: 'Intro Length', id: 'introLength'}
            ]
        }),
        computed: {
            ...mapGetters(['weights'])
        },
        methods: {
            setWeight(name, value)
            {
                this.$store.commit('setWeight', {name, value});
            }
        }
    };
</script>

<style scoped>

</style>
