interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 23,
  location: 'Denver',
};

const studentsList: Student[] = [student1, student2];

export const renderTable = (studentsList: Student[]): void => {
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.appendChild(headRow);

  const headers = ['FirstName', 'Location'];
  headers.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headRow.appendChild(th);
 });

 studentsList.forEach((student) => {
    const studentRow = document.createElement('tr');
    const { firstName, location } = student;
    const rowData = [firstName, location];
    rowData.forEach((data) => {
      const td = document.createElement('td');
      td.textContent = data;
      studentRow.appendChild(td);
    });
    table.appendChild(studentRow);
  });

  document.body.appendChild(table);
};

renderTable(studentsList);  
