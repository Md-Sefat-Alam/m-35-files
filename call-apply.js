const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDay: function (expense, boksis, vat) {
        this.money = this.money - expense - boksis - vat;
        console.log(this)
        return this.money;
    }
}
const heroBalam = {
    id: 102,
    money: 5000,
    name: 'Hero Balam'
}
//call
// kibria.treatDay.call(heroBalam, 500, 100, 50);
// kibria.treatDay.call(heroBalam, 800, 100, 80);

//apply
kibria.treatDay.apply(heroBalam, [500, 100, 50])
kibria.treatDay.apply(heroBalam, [1000, 100, 100])