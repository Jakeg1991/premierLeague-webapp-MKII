<template>
    <div>
        <div class="matchdayInfoContainer">
            <div class="matchdayInfo elevation-7">
                <v-btn color="white" small round icon v-on:click='selectPreviousmatchday()'>
                    <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>

                <h4 class="matchWeekTitle">Matchweek {{this.selectedMatchday}}</h4>

                <v-btn color="white" small round icon v-on:click='selectNextmatchday()'>
                    <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
            </div>
        </div>


        <div class="matchdayInfoContainerLower ">
            <div class="matchdayInfo elevation-7">
                <v-btn small round v-on:click='selectCurrentmatchday()'>Current</v-btn>
                <v-btn small round v-on:click='selectCurrentmatchday()'>Select</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'matchWeekSelector',
    props: ['currentMatchday'],
    data() {
        return {
            selectedMatchday: undefined,
            totalmatchdays: [],
        }
    },
    created() {
        this.selectedMatchday = this.currentMatchday
    },

    methods: {

        populatematchdays(firstmatchday, lastmatchday) {
            var lowEnd = firstmatchday;
            var highEnd = lastmatchday;
            var arr = [];
            while (lowEnd <= highEnd) {
                arr.push(lowEnd++);
            }
            return arr
        },
        selectCurrentmatchday() {
            this.selectedMatchday = this.currentMatchday
            this.$parent.filterMatches(this.selectedMatchday)
        },
        selectPreviousmatchday() {
            if (this.selectedMatchday <= 1) {} else {
                this.selectedMatchday--
                this.$parent.filterMatches(this.selectedMatchday)
            }
        },

        selectNextmatchday() {
            if (this.selectedMatchday >= 38) {} else {
                this.selectedMatchday++
                this.$parent.filterMatches(this.selectedMatchday)
            }
        },
        changematchdayDropdown() {
            this.$parent.filterMatches(this.selectedMatchday)

        }
    }
}

</script>

<style>
.matchWeekTitle{
     margin: 0
}

.matchdayInfoContainer{
    display: flex;
    justify-content: center;
align-items: center;
flex-wrap: wrap;
    width: 100vw;
      position: fixed;
  top: 7px;
  left: 0px;
}

.matchdayInfoContainerLower{
    display: flex;
    justify-content: center;
align-items: center;
flex-wrap: wrap;
    width: 100vw;
      position: fixed;
  bottom: 60px;
  left: 0px;
}

.matchdayInfo{
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
    background-color: rgba(0, 0, 0, 0.705);
    border-radius: 20px;
    color: white;
}

.matchSelect {
width: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -90px;
  margin-left: -100px;

}

.matchdaySelector {
  position: fixed;
  bottom: 56px;
  width: 100vw;
padding: 14px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
z-index: 1;
border-width: 1px;
border-style: dotted;
}


.buttonGroup{
margin: 10px 10px 0px 10px;
    display: inline-block;
}

.browseButtons{
    position: relative;
    top: 7px
}
</style>

