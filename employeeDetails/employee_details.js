const employees = [
	{
		id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50_000, specialization: 'JavaScript',
	},
	{
		id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45_000, specialization: 'Python',
	},
	{
		id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60_000, specialization: 'Java',
	},
	// ... More employee records can be added here
];
function displayEmployees() {
	const totalEmployees = employees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
	document.querySelector('#employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
	const totalSalaries = employees.reduce((acc, cur) => acc + (Number(cur.salary) || 0), 0);
	alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
	const hrEmployees = employees.filter(employee => employee.department === 'HR');
	const hrEmployeesDisplay = hrEmployees.map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
	document.querySelector('#employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
	const foundEmployee = employees.find(employee => employee.id === employeeId);
	if (foundEmployee) {
		document.querySelector('#employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
	} else {
		document.querySelector('#employeesDetails').innerHTML = 'no employee has been found with this ID';
	}
}

function findEmployeeBySpc(employeeSpc) {
	const foundEmployee = employees.find(employee => employee.specialization === employeeSpc);
	if (foundEmployee) {
		document.querySelector('#employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
	}
}
