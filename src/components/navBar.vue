<template>
<v-bottom-nav fixed flat :active.sync="bottomNav" :value="true">
    <v-btn color="teal" flat dark value="matches" to="/">
        <span>Matches</span>
        <v-icon>lens</v-icon>
    </v-btn>

    <v-btn color="teal" flat dark value="standings" to="/table">
        <span>Standings</span>
        <v-icon>adjust</v-icon>
    </v-btn>

    <v-btn color="teal" flat dark value="chat" to="/chat">
        <span>Chat</span>
        <v-icon>chat_bubble</v-icon>
    </v-btn>
</v-bottom-nav>
</template>


<script>
    export default {
        data() {
            return {
                bottomNav: 'recent'
            }
        }
    }
</script>
    
<style scoped>
    /* .Fixed {
        position: fixed;
        bottom: 30px;
    } */
</style>
    