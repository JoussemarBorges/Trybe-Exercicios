const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (employeeGenerator) => {
    const employees = {
      id1: employeeGenerator('Pedro Gerra'),
      id2: employeeGenerator('Luiza Drumond'),
      id3: employeeGenerator('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees(employeeGenerator));