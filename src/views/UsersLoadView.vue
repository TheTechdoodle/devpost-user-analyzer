<template>
    <v-container fluid class="mt-10">
        <v-row justify="center">
            <v-col cols="10" md="5" sm="8">
                <p>
                    This is a webapp for analyzing Devpost users by customizable weights
                </p>
                <h4>Instructions:</h4>
                <ol>
                    <li>Load all the users of a hackathon by scrolling to the bottom of the page</li>
                    <li>
                        Run the scraper javascript in the development console
                        <v-expansion-panels>
                            <v-expansion-panel>
                                <v-expansion-panel-header>Scraper Javascript</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <pre style="overflow-x: scroll">
(() =>
{
    let participants = [];
    $('.participants-list > .participant').each((index, elem) =>
    {
        participants.push({
            name: $(elem).find('.user-profile-link').text() || 'Private user',
            url: $(elem).find('.user-profile-link').attr('href'),
            role: $(elem).find('.role').text().trim(),
            projects: Number($(elem).find('.participant-software-count>.participant-stat').text()),
            followers: Number($(elem).find('.participant-followers-count>.participant-stat').text()),
            achievements: Number($(elem).find('.participant-achievements-count>.participant-stat').text()),
            team: $(elem).find('.request-actions .cp-tag').text().trim(),
            skills: $(elem).find(".columns").eq(0).find('.cp-tag').map((i, skillElem) => $(skillElem).text().trim()).get(),
            interests: $(elem).find(".columns").eq(1).find('.cp-tag').map((i, interestElem) => $(interestElem).text().trim()).get(),
            intro: $(elem).find('.user-intro').text().trim()
        });
    });
    console.log(JSON.stringify(participants));
})();</pre>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </li>
                    <li>Copy and paste the json into this page</li>
                </ol>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10" md="5" sm="8">
                <v-textarea v-model="usersJSON" class="pa-3" autofocus label="Users JSON"/>
                <div class="text-center mt-2">
                    <v-btn color="success" @click="submit">Submit</v-btn>
                    <v-btn color="info" class="ml-2" @click="loadDemoData">Load Demo Data</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'UsersLoadView',
        data: () => ({
            usersJSON: ''
        }),
        methods: {
            loadDemoData()
            {
                this.submitJSON([
                    {
                        "name": "Hackathon Lover",
                        "url": "https://devpost.com/",
                        "role": "",
                        "projects": 12,
                        "followers": 192,
                        "achievements": 10,
                        "team": "Has a team",
                        "skills": [
                            "javascript",
                            "node",
                            "react",
                            "graphql",
                            "mongodb"
                        ],
                        "interests": [],
                        "intro": "I love working on new projects"
                    },
                    {
                        "name": "First Time",
                        "url": "https://devpost.com/",
                        "role": "Designer",
                        "projects": 0,
                        "followers": 0,
                        "achievements": 1,
                        "team": "Has a team",
                        "skills": [
                            "html",
                            "figma"
                        ],
                        "interests": [],
                        "intro": ""
                    },
                    {
                        "name": "Casual",
                        "url": "https://devpost.com/",
                        "role": "",
                        "projects": 3,
                        "followers": 5,
                        "achievements": 4,
                        "team": "Has a team",
                        "skills": [
                            "python",
                            "rust",
                            "javascript",
                            "flask"
                        ],
                        "interests": [],
                        "intro": ""
                    }
                ]);
            },
            submit()
            {
                this.submitJSON(JSON.parse(this.usersJSON));
            },
            submitJSON(data)
            {
                this.$store.commit('setUsers', data);
            }
        }
    };
</script>

<style scoped>

</style>
