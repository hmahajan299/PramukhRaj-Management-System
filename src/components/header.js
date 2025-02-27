const header = `
<header>
    <nav>
        <div class="logo">
            <img src="assets/logo.png" alt="Pramukhraj Electricals Logo">
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="staff-management.html">Staff Management</a></li>
            <li><a href="attendance.html">Attendance</a></li>
            <li><a href="task-management.html">Task Management</a></li>
            <li><a href="client-communication.html">Client Communication</a></li>
            <li><a href="logout.html">Logout</a></li>
        </ul>
    </nav>
</header>
`;

document.body.insertAdjacentHTML('afterbegin', header);