const students = [
    { name: "Amit Sharma", age: 19, course: "B.Tech" },
    { name: "Priya Verma", age: 22, course: "MCA" },
    { name: "Rohit Gupta", age: 20, course: "BCA" },
    { name: "Neha Singh", age: 23, course: "B.Sc" },
    { name: "Karan Patel", age: 18, course: "B.Com" },
    {name:"Achinta R S",age:18, course: "B.E"}
];

function makeTable(data) {
    const container = document.getElementById('table-container');
    container.innerHTML = '';
    
    const table = document.createElement('table');
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
    headerRow.appendChild(nameHeader);
    
    const ageHeader = document.createElement('th');
    ageHeader.textContent = 'Age';
    headerRow.appendChild(ageHeader);
    
    const courseHeader = document.createElement('th');
    courseHeader.textContent = 'Course';
    headerRow.appendChild(courseHeader);
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    for(let i = 0; i < data.length; i++) {
        const row = document.createElement('tr');
        
        const td1 = document.createElement('td');
        td1.textContent = data[i].name;
        row.appendChild(td1);
        
        const td2 = document.createElement('td');
        td2.textContent = data[i].age;
        row.appendChild(td2);
        
        const td3 = document.createElement('td');
        td3.textContent = data[i].course;
        row.appendChild(td3);
        
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    container.appendChild(table);
}

makeTable(students);

let bgColor = 0;
document.getElementById('changeBgBtn').onclick = function() {
    if(bgColor == 0) {
        document.body.style.backgroundColor = '#e0f7fa';
        bgColor = 1;
    } else {
        document.body.style.backgroundColor = '#f8f9fa';
        bgColor = 0;
    }
};

let tableShow = 1;
document.getElementById('toggleTableBtn').onclick = function() {
    const container = document.getElementById('table-container');
    if(tableShow == 1) {
        container.style.display = 'none';
        tableShow = 0;
    } else {
        container.style.display = 'block';
        tableShow = 1;
    }
};

document.getElementById('filterBtn').onclick = function() {
    let newStudents = [];
    for(let i = 0; i < students.length; i++) {
        if(students[i].age > 20) {
            newStudents.push(students[i]);
        }
    }
    makeTable(newStudents);
};

document.getElementById('sortBtn').onclick = function() {
    let sortedStudents = [];
    for(let i = 0; i < students.length; i++) {
        sortedStudents.push(students[i]);
    }
    for(let i = 0; i < sortedStudents.length - 1; i++) {
        for(let j = 0; j < sortedStudents.length - 1 - i; j++) {
            if(sortedStudents[j].name > sortedStudents[j + 1].name) {
                let temp = sortedStudents[j];
                sortedStudents[j] = sortedStudents[j + 1];
                sortedStudents[j + 1] = temp;
            }
        }
    }
    makeTable(sortedStudents);
};

document.getElementById('resetBtn').onclick = function() {
    const container = document.getElementById('table-container');
    container.style.display = 'block';
    tableShow = 1;
    makeTable(students);
};