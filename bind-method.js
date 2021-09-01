const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDay: function (expense) {
        this.money = this.money - expense;
        console.log(this)
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 5000,
    name: 'Hero Balam'
}
// kibria.treatDay(100);

const heroTreatDey = kibria.treatDay.bind(heroBalam);
heroTreatDey(500)