const students = [
    { name: "Amit Sharma", age: 19, course: "B.Tech" },
    { name: "Priya Verma", age: 22, course: "MCA" },
    { name: "Rohit Gupta", age: 20, course: "BCA" },
    { name: "Neha Singh", age: 23, course: "B.Sc" },
    { name: "Karan Patel", age: 18, course: "B.Com" }
];

function renderTable(data) {
    const tbody = document.getElementById('student-table-body');
    tbody.innerHTML = '';
    
    data.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
        `;
        tbody.appendChild(row);
    });
}

renderTable(students);

let isLightGray = true;
document.getElementById('changeBgBtn').addEventListener('click', () => {
    if (isLightGray) {
        document.body.style.backgroundColor = '#e0f7fa';
    } else {
        document.body.style.backgroundColor = '#f8f9fa';
    }
    isLightGray = !isLightGray;
});

document.getElementById('toggleTableBtn').addEventListener('click', () => {
    const tableContainer = document.getElementById('table-container');
    if (tableContainer.style.display === 'none') {
        tableContainer.style.display = '';
    } else {
        tableContainer.style.display = 'none';
    }
});

document.getElementById('sortByNameBtn').addEventListener('click', () => {
    const sortedStudents = [...students].sort((a, b) => a.name.localeCompare(b.name));
    renderTable(sortedStudents);
});

document.getElementById('filterByAgeBtn').addEventListener('click', () => {
    const filteredStudents = students.filter(student => student.age > 20);
    renderTable(filteredStudents);
});

document.getElementById('resetBtn').addEventListener('click', () => {
    const tableContainer = document.getElementById('table-container');
    tableContainer.style.display = '';
    renderTable(students);
});