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
        },
        isCountLessThanThree() {
            return  this.roundCounter < 3;
        }
    },
    methods: {
        attackMonster(){
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.roundCounter++;

        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            const attackValue = getRandomValue(10, 20);
            this.monsterHealth -= attackValue;
            this.roundCounter = 0;
        }
    }
});

app.mount('#game');