<template>
    <v-container fluid class="mt-5">
        <weights-list class="mb-2"/>
        <users-table/>
    </v-container>
</template>

<script>
    import UsersTable from '../components/UsersTable';
    import WeightsList from '../components/WeightsList';

    export default {
        name: 'UsersView',
        components: {WeightsList, UsersTable}
    };
</script>

<style scoped>

</style>
