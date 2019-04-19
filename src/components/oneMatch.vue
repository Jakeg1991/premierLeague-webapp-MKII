<template>
<div class="matchInfoContainer">
    <div class="homeTeamArea" @click="modal = true">
        <div class="teamLogoArea" :style="homeLogoUpdate"></div>
    </div>
    <div class="scoreArea">
            <p class="score">{{this.match.score.fullTime.homeTeam}} - {{this.match.score.fullTime.awayTeam}}</p>
            <p class="dateInfo">{{this.match.utcDate.substring(8, 10)+"-"+this.match.utcDate.substring(5,7
            )+"-"+this.match.utcDate.substring(0, 4)}} <br> {{this.match.utcDate.substring(11, 16)+" GMT"}} </p>
    </div>
    <div class="awayTeamArea" @click="modalAway = true">
        <div class="teamLogoArea" :style="awayLogoUpdate"></div>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'match',
        'teamsData',
    ],
    data() {
        return {
            homeTeamID: undefined,
            awayTeamID: undefined,
            homeTeamData: undefined,
            awayTeamData: undefined,
            homeTeamName: undefined,
            awayTeamName: undefined,
            modal: false,
            modalAway: false
        }

    },
    computed: {

        homeLogoUpdate() {
            return {
                'background-image': `url(${this.homeTeamData[0].crestUrl})`,
            }
        },
        awayLogoUpdate() {
            return {
                'background-image': `url(${this.awayTeamData[0].crestUrl})`,
            }
        }
    },
    methods: {
        // getLogos() {
        //     for (let i = 0; i <= 19; i++) {
        //         if (this.teamsData[i].id == this.match.homeTeam.id) {
        //             this.homeTeamLogo = this.teams[i].crestUrl
        //         }
        //         if (this.teamsData[i].id == this.match.awayTeam.id) {
        //             this.awayTeamLogo = this.teams[i].crestUrl
        //         }
        //     }
        // },
        filterTeamData(){
            this.homeTeamData = this.teamsData.filter(team => team.id == this.match.homeTeam.id)
            this.awayTeamData = this.teamsData.filter(team => team.id == this.match.awayTeam.id)
        }
        // getTeamID() {
        //     this.homeTeamID = this.match.homeTeam.id
        //     this.awayTeamID = this.match.awayTeam.id
        // },
        // getTLA(HomeID, AwayID) {
        //     for (var i = 0; i <= 19; i++) {
        //         if (this.teamsData[i].id == this.homeTeamID) {
        //             this.homeTeamName = this.teams[i].name
        //         }
        //         if (this.teamsData[i].id == this.awayTeamID) {
        //             this.awayTeamName = this.teams[i].name
        //         }
        //     }
        // },
    },
    created() {
        // this.getTeamID();
        this.filterTeamData();
        // this.getTLA(this.homeTeamID, this.match.awayTeamID)


    },
    // updated() {
    //     // this.getTeamID();
    //     this.filterTeamData();
    //     // this.getTLA(this.homeTeamID, this.match.awayTeamID)
    // }
}

</script>

<style>
.score {
    display: inline;
    margin: 0;
    color: rgb(255, 198, 55);
    font-size: 1.7em;
}

.dateInfo {
    display: inline;
    margin: 0;
    color: rgb(255, 255, 255);
    font-size: 0.8em;
}

.matchInfoContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
    height: 85px;
    width: 100vw;
    margin: 1px;
    background-color: rgba(0, 0, 0, 0.397);
    border-radius: 20px;
    border-color: antiquewhite;
    border-style: solid;
    border-width: 1px
}

.teamLogoArea {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: auto 95%;
}


.homeTeamArea {
    width: 33%;
    height: 100%;
    padding: 5px;
}

.scoreArea {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    width: 33%;
    height: 100%;
    background-position: center;
    background-size: auto 95%;
}

.scoreNum {
    color: rgb(255, 198, 55);
    font-size: 1.7em;
}

.scoreDate {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: rgba(0, 0, 0, 0.397);
    color: white;
    font-size: 0.70em;
    padding: 5px;
}

.awayTeamArea {
    width: 33%;
    height: 100%;
    padding: 5px;
}

</style>