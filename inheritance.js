class TeamMember {

    name;
    designation = 'Support web dev';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');




    }





    class Support extends TeamMember {
        groupSupportTime;
        constructor(name, address, time) {
            super(name, address);
            this.groupSupportTime = time;
        }
        startSession() {
            console.log(this.name, 'start a support session');

        }
    }
    class StudentCare extends TeamMember {

        buildARoutine(student) {
            console.log(this.name, 'Build a routine for', student);

        }
    }
    class NeptuneDev extends TeamMember {
        codeEditor;
        constructor(name, address, editor) {
            super(name, address);
            this.codeEditor = editor;
        }
        releaseApp(version) {
            console.log(this.name, 'Build a routine for', version);

        }
    }

    const prodip = new Support('antora', 'cp', 11);
    const antora = new Support('prodip', 'dk', 12);
    console.log(prodip, antora);
    prodip.startSession();

    const alia = new StudentCare('alia bhatt', 'mumbai');
    const assa = new NeptuneDev('ash', 'kolkota', 'android studio');
    assa.releaseApp('1.4.5');

    // console.log(assa);