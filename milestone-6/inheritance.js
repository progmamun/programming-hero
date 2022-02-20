class TeamMember {
  name;
  address = 'BD';
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support extends TeamMember {
  groupSupportTime;
  designation = 'Student care web Dev';
  constructor(name, address, time) {
    super(name, address);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, 'Start a support session');
  }
}

class StudentCare extends TeamMember {
  designation = 'care web Dev';
  buildARoutine(student) {
    console.log(this.name, 'Build a routine for', student);
  }
}

class NeptuneDev extends TeamMember {
  codeEditor;
  designation = 'Neptune App Dev';
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(version) {
    console.log(this.name, 'release app version', version);
  }
}

const ammir = new Support('Aamir Khan', 'BD', 3);
const salman = new Support('Solaiman Khan', 'Dubai', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
console.log(alia);
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');
ash.releaseApp('1.4.5');
console.log(ash);
