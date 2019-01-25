// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(x) {
            console.log(x);
        })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const bob = new Student({
    name: 'Bob',
    location: 'Atlantis',
    age: 236,
    gender: 'male',
    previousBackground: 'Pizza Delivery Boy',
    className: 'FS185',
    favSubjects: ['C++++', 'Javascript', 'HTML']
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const james = new ProjectManager({
    name: 'James',
    location: 'San Francisco',
    age: 12,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Ice Cream',
    catchPhrase: 'Wait what, I\'m a coding instructor now?',
    gradClassName: 'N/A',
    favInstructor: 'life'
})

bob.listsSubjects();
bob.PRAssignment('Advanced AI Creation');

fred.speak();
fred.demo('Javascript');
fred.grade(bob, 'CSS');

james.standUp('webpt36_james');
james.debugsCode(bob, 'Ice Cream');