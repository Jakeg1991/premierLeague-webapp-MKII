<template>
  <div>
    <div v-if="teamsLoading && matchesLoading">
      <loadingSpinner />
    </div>
    <div v-else>
      <matchWeekSelector ref="matchWeekSelector" :matchesLoading="this.MatchesLoading" />
      <div v-for="(match, index) in this.matchesData" :key="index" class="matchContainer">
        <oneMatch :match="match" :teams="teams" />
      </div>
    </div>
  </div>
</template>

<script>
import loadingSpinner from '@/components/loadingSpinner.vue'
import matchWeekSelector from '@/components/matchWeekSelector.vue'
import oneMatch from '@/components/oneMatch.vue'

export default {
  components: {
      matchWeekSelector,
      loadingSpinner,
      oneMatch,
    },

    data() {
      return {
        currentMatchday: '',
        selectedMatchday: '',
        teamsLoading: true,
        matchesLoading: true,
        matchesData: "Data Not Fetched",
        teamsData: "Data Not Fetched",
      }
    },

    methods: {
      updatematchWeek(day) {
        this.$refs.matchWeekSelector.setCurrentMatchday(day)
        this.currentMatchday = day;
        this.selectedMatchday = day;
      },
      filteredMatches(num) {
        this.chosenMatches = this.matchList.matches.filter((match) => {
          return num == match.matchday;
        })
      },
      fetchTeams() {
        const myRequest = 'http://api.football-data.org/v2/competitions/2021/teams';
        fetch(myRequest, {
            headers: {
              "X-Auth-Token": "0defa9d84f8b4a76aa4544329a6678bb"
            }
          })
          .then(response => response.json())
          .then(teams => {
            this.updatematchWeek(teams.season.currentMatchday)
            this.teamsData = teams.teams
            this.teamsLoading = false;
          })
          .catch(error => console.log(error))
      },
      fetchMatches() {
        const myRequest = 'http://api.football-data.org/v2/competitions/2021/matches';
        fetch(myRequest, {
            headers: {
              "X-Auth-Token": "0defa9d84f8b4a76aa4544329a6678bb"
            }
          })
          .then(response => response.json())
          .then(matchList => {
            this.matchesData = matchList;
            this.filteredMatches(this.selectedMatchday)
            this.matchesLoading = false;
          })
          .catch(error => console.log(error))
      },
    },
    mounted() {
      this.fetchTeams()
      this.fetchMatches()
      console.log(this.$refs)
    }
  }

</script>
