const fab = `
<div class="fab" onclick="openMenu()">+</div>
<div class="fab-menu">
    <button onclick="location.href='staff-management.html'">Add Staff</button>
    <button onclick="location.href='task-management.html'">Add Task</button>
    <button onclick="location.href='attendance.html'">Mark Attendance</button>
</div>
`;

document.body.insertAdjacentHTML('beforeend', fab);