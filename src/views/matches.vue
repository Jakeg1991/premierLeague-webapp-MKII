<template>
  <div>
    <!-- <div v-if="fetchFailed = true">
      <p>FETCH FAILED</p>
      <v-btn v-on:click="fetchData()">Retry?</v-btn>
    </div> -->
    <div v-if="teamsLoading || matchesLoading">
      <loadingSpinner />
    </div>
    <div v-else>
      <matchWeekSelector ref="matchWeekSelector" :currentMatchday="this.currentMatchday" />
      <div class="matchContainer">
      <div v-for="(match, index) in this.matchesGroup" :key="index">
        <oneMatch :match="match" :teamsData="teamsData"/>
      </div>
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
        currentMatchday: undefined,
        selectedMatchday: undefined,
        matchesGroup: undefined,
        matchesData: undefined,
        teamsData: undefined,
        fetchFailed: false,
        teamsLoading: true,
        matchesLoading: true,
      }
    },
    computed: {
      loadingDataCompute(){
        if (!teamsLoading && !matchesLoading){
          this.updatematchWeek(this.currentMatchday)
        }
      }
    },
    methods: {
      fetchData(){
        this.fetchFailed = false
        this.fetchTeams()
        this.fetchMatches()
      },
      updatematchWeek(day) {
        this.$refs.matchWeekSelector.setCurrentMatchday(day)
        this.selectedMatchday = day;
      },
      filterMatches(num) {
        this.matchesGroup = this.matchesData.matches.filter((match) => {
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
            this.currentMatchday = teams.season.currentMatchday;
            this.teamsData = teams.teams
            this.teamsLoading = false;
          })
          .catch(function(){console.log("nigs")})
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
            this.matchesLoading = false;
            this.filterMatches(this.currentMatchday)
          })
          .catch(error => console.log(error))
          .then(this.fetchFailed = true)
      },
    },
    created() {
      this.fetchData()
    },
  }

</script>

<style>
.matchContainer{
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
  width: 100vw;
  padding-top: 45px;
  padding-bottom: 98px
}

</style>

