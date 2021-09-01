const student = {
    id: 101,
    name: 'RJ Kibria',
    monye: 5000,
    mejor: 'Mathematics',
    isReach: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'Mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'Takeing exam');
    },
    treatDay: function (expense) {
        this.monye = this.monye - expense;
        return this.monye;
    }
}

student.takeExam();
student.treatDay(900);
const remaining = student.treatDay(900);

console.log(remaining)