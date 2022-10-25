function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            roundCounter: 0
        };
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        attackMonster(){
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            console.log('Monster HP : ' + this.monsterHealth);

            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            console.log('Player HP :  ' + this.playerHealth);
        }
    }
});

app.mount('#game');