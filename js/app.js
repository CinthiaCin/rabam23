
function showWelcomeSection() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('recoverySection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
    document.getElementById('logoutButton').style.display = 'none';


function showAttendanceForm() {
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("attendanceForm").style.display = "block";
    document.getElementById("attendancePercentage").style.display = "none";
    document.getElementById("manageStudents").style.display = "none";
}

function showAttendancePercentage() {
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("attendanceForm").style.display = "none";
    document.getElementById("attendancePercentage").style.display = "block";
    document.getElementById("manageStudents").style.display = "none";
}

function manageStudents() {
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("attendanceForm").style.display = "none";
    document.getElementById("attendancePercentage").style.display = "none";
    document.getElementById("manageStudents").style.display = "block";
}
