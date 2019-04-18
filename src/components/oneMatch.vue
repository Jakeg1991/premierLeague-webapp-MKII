<template>
<div class="matchInfoContainer">
    <div class="homeTeamArea" @click="Modal = true">
        <div class="teamLogoArea" :style="homeLogoUpdate"></div>
    </div>
    <div class="scoreArea">
            <p class="score">{{match.score.fullTime.homeTeam}} - {{match.score.fullTime.awayTeam}}</p>
            <p class="dateInfo">{{match.utcDate.substring(8, 10)+"-"+match.utcDate.substring(5,7
            )+"-"+match.utcDate.substring(0, 4)}} <br> {{match.utcDate.substring(11, 16)+" GMT"}} </p>
    </div>
    <div class="awayTeamArea" @click="Modal = true">
        <div class="teamLogoArea" :style="awayLogoUpdate"></div>
    </div>
</div>
</template>

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
    width: 100%;
    margin: 5px;
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