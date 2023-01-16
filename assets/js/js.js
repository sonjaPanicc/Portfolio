dataProjects = [
    {
        id: 1,
        title: "Merch Web Shop",
        desc: "Non official one-page web shop for Liverpool souvenir merchandise",
        used: "JS, HTML, CSS",
        imgCode: "lfc",
    },
    {
        id: 2,
        title: "Calculator",
        desc: "Interactive web calculator with basic functions",
        used: "JS, HTML, CSS",
        imgCode: "calc",
    },
    {
        id: 3,
        title: "Watch Shop",
        desc: "Web page to shop the newest collection of watches",
        used: "HTML, CSS",
        imgCode: "watch",
    },
]

dataSkills = [
    {
        id: 1,
        skill: "HTML",
    },
    {
        id: 2,
        skill: "CSS",
    },
    {
        id: 3,
        skill: "SCSS",
    },
    {
        id: 4,
        skill: "Java Script",
    },
    {
        id: 5,
        skill: "React",
    },
    {
        id: 6,
        skill: "Node.js",
    },
]

function writeProjects(data) {

    let writeP = "";

    data.forEach(elem => {

        writeP += `<div class="project" data-id="${elem.id}">
        <h3>${elem.title}</h3>
        <img src="assets/img/${elem.imgCode}1.PNG" alt="${elem.title}">
        </div>`;
    });

    document.getElementById("projects").innerHTML = writeP;

    const project = document.querySelectorAll(".project");
    project.forEach(elem => {
        elem.addEventListener("click", showProject);
    })
}

function writeSkills(data) {

    let writeS = "";

    data.forEach(elem => {

        writeS += `<div class="skills" data-id="${elem.id}">
        <span>${elem.skill}</span>
        </div>`
    })

    document.getElementById("skills").innerHTML = writeS;
}

function writeSections() {
    writeProjects(dataProjects);
    writeSkills(dataSkills);
}

writeSections();

function showProject() {

    let elem = dataProjects.find(elem => elem.id == this.dataset.id);

    let writeP = "";
    let writeImg1 = "";
    let writeImg2 = "";

    writeP += `<div class="slide-modal-content" data-id="${elem.id}">
    <h2>${elem.title}</h2>
    <p>Description:<br> ${elem.desc}</p>
    <p>Used skills:<br> ${elem.used}</p>
</div>`;
    writeImg1 += `<div class="slide-modal-content" data-id="${elem.id}">
    <img src="assets/img/${elem.imgCode}1.PNG" alt="${elem.title}">
</div>`;
    writeImg2 += `<div class="slide-modal-content" data-id="${elem.id}">
    <img src="assets/img/${elem.imgCode}2.PNG" alt="${elem.title}">
</div>`;

    document.querySelector(".slide-modal").innerHTML = writeP;
    document.getElementById("modal").style.display = "block";

    let i = 0;
    const slider = [writeP, writeImg1, writeImg2];

    document.querySelector(".btn-next").addEventListener("click", nextF);
    document.querySelector(".btn-previous").addEventListener("click", prevF);

    function nextF() {
        i++;
        if (i > slider.length - 1) {
            i = 0;
        };
        document.querySelector(".slide-modal").innerHTML = slider[i];
    }

    function prevF() {
        i--;
        if (i < 0) {
            i = slider.length - 1;
        }
        document.querySelector(".slide-modal").innerHTML = slider[i];
    }

    document.querySelector(".close").addEventListener("click", function () {

        document.getElementById("modal").style.display = "none";
        document.querySelector(".slide-modal").innerHTML = "";
    })
}