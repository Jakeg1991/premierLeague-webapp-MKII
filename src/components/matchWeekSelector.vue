<template>
    <div>
        <div class="matchdayInfoContainer">
            <div class="matchdayInfo">
                <v-btn color="white" small round icon v-on:click='selectPreviousmatchday()'>
                    <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>

                <h4 class="matchWeekTitle">Matchweek {{this.currentmatchdaySelect}}</h4>

                <v-btn color="white" small round icon v-on:click='selectNextmatchday()'>
                    <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
            </div>
        </div>


        <div class="matchdayInfoContainerLower">
            <div class="matchdayInfo">
                <v-btn small round v-on:click='selectCurrentmatchday()'>Current</v-btn>
                <v-btn small round v-on:click='selectCurrentmatchday()'>Select</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'matchWeekSelector',
    props: ['matchesLoading'],
    data() {
        return {
            currentmatchday: undefined,
            currentmatchdaySelect: undefined,
            totalmatchdays: [],
        }
    },
    created() {
this.currentmatchdaySelect = this.currentmatchday
    },
        
    methods: {
        testFunc(){
            console.log("totalmatchdaysVV")
        },

        populatematchdays(firstmatchday,lastmatchday) {
            var lowEnd = firstmatchday;
            var highEnd = lastmatchday;
            var arr = [];
            while (lowEnd <= highEnd) {
                arr.push(lowEnd++);
            }
            return arr
        },
        setCurrentMatchday (num) {
            this.currentmatchday = num
            this.currentmatchdaySelect = num
        },
        selectCurrentmatchday () {
            this.currentmatchdaySelect = this.currentmatchday
            this.$parent.filteredMatches(this.currentmatchdaySelect)
            console.log(this.currentmatchdaySelect)
        },
        selectPreviousmatchday () {
            if (this.currentmatchdaySelect<=1){}
            else {
            this.currentmatchdaySelect--
            this.$parent.filteredMatches(this.currentmatchdaySelect)}},

        selectNextmatchday () {
            if (this.currentmatchdaySelect>=38){}
            else {
            this.currentmatchdaySelect++
            this.$parent.filteredMatches(this.currentmatchdaySelect)}
        },
        changematchdayDropdown () {
            this.$parent.filteredMatches(this.currentmatchdaySelect)

        }
    }}


</script>
