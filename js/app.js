const profileCard = document.querySelector("#profileCard");

const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");

const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const formMessage = document.getElementById("formMessage");

const INITIAL_NAME = "Maria Santos";
const INITIAL_PROGRAM = "BS Information Technology";
const INITIAL_YEAR = "3rd Year";
const INITIAL_STATUS = "active";

const INITIAL_STUDENT_ID = profileCard
    ? profileCard.dataset.studentId
    : "2026-001";

function isValidStudentName(name) {
    if (typeof name !== "string") {
        return false;
    }

    return name.trim().length >= 2;
}

function formatStudentStatus(status) {
    if (status === "active") {
        return "Active";
    }

    if (status === "inactive") {
        return "Inactive";
    }

    return "";
}

function setStatus(status) {
    if (!profileCard || !profileStatus) {
        return;
    }

    if (status !== "active" && status !== "inactive") {
        return;
    }

    profileStatus.textContent = formatStudentStatus(status);
    profileCard.dataset.status = status;

    if (status === "active") {
        profileCard.classList.add("active");
        profileCard.classList.remove("inactive");
    } else {
        profileCard.classList.add("inactive");
        profileCard.classList.remove("active");
    }
}

function updateProfile() {
    if (
        !nameInput ||
        !programInput ||
        !yearInput ||
        !statusInput ||
        !profileName ||
        !profileProgram ||
        !profileYear ||
        !formMessage
    ) {
        return;
    }

    const studentName = nameInput.value.trim();
    const program = programInput.value;
    const year = yearInput.value;
    const status = statusInput.value;

    if (!isValidStudentName(studentName)) {
        formMessage.textContent = "Student name is required";
        return;
    }

    profileName.textContent = studentName;
    profileProgram.textContent = program;
    profileYear.textContent = year;

    setStatus(status);

    formMessage.textContent = "";
}

function toggleDetails() {
    if (!detailsPanel) {
        return;
    }

    detailsPanel.classList.toggle("hidden");
}

function toggleTheme() {
    if (!document.body) {
        return;
    }

    document.body.classList.toggle("dark-theme");
}

function resetProfile() {
    if (
        !profileCard ||
        !profileName ||
        !profileProgram ||
        !profileYear ||
        !profileStatus ||
        !detailsPanel ||
        !studentIdDisplay ||
        !nameInput ||
        !programInput ||
        !yearInput ||
        !statusInput ||
        !formMessage
    ) {
        return;
    }

    profileName.textContent = INITIAL_NAME;
    profileProgram.textContent = INITIAL_PROGRAM;
    profileYear.textContent = INITIAL_YEAR;

    profileCard.dataset.studentId = INITIAL_STUDENT_ID;

    studentIdDisplay.textContent =
        "Student ID: " + profileCard.dataset.studentId;

    setStatus(INITIAL_STATUS);

    nameInput.value = INITIAL_NAME;
    programInput.value = INITIAL_PROGRAM;
    yearInput.value = INITIAL_YEAR;
    statusInput.value = INITIAL_STATUS;

    detailsPanel.classList.remove("hidden");

    document.body.classList.remove("dark-theme");

    formMessage.textContent = "";
}

if (profileCard && studentIdDisplay) {
    studentIdDisplay.textContent =
        "Student ID: " + profileCard.dataset.studentId;
}

if (updateBtn) {
    updateBtn.addEventListener("click", updateProfile);
}

if (toggleDetailsBtn) {
    toggleDetailsBtn.addEventListener("click", toggleDetails);
}

if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
}

if (resetBtn) {
    resetBtn.addEventListener("click", resetProfile);
}