const run = require('./generate-file.js');

module.exports = {
    generateHTML(employeeArray) {
      
        const string = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <style>
    * {
    text-align: center;
}
h1{
    font-size: 37px;
    text-decoration: underline;
}

h2 {
    border: black solid;
    background-color: beige;
    font-size: 28px;
}

table {
    font-size: 21px;
    border: 1px solid black;
}

th,td {
    width:25%;
    background-color:rgb(247, 247, 247);
    border: 1px solid black;
}

       
    </style>
</head>

<body>
    <h1>Team Roster</h1>
    <h2>Team Manager</h2>
    <table style="width:100%">
        <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Wage</th>
            <th>Years Employed</th>
        </tr>
        ${addEmployee(employeeArray, 'Manager')}
    </table>


</body>

</html>
`;
        run.writeFile(string);
    }
};




function addEmployee(arr, type) {
    let string = '';

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].constructor.name === type) {
            string += `
    <tr>
    <td>${arr[i].fullName[0]} ${arr[i].fullName[1]}</td>
    <td>${arr[i].id}</td>
    <td><a <a href = "mailto:${arr[i].email}">${arr[i].email}</a></td>
    `;
    //add additional info based on type
            switch (type) {
                case 'Manager': string += `
    <td>${arr[i].officeNumber}</td>
    </tr >`
                    break;
                case 'Engineer': string += `
    <td><a href = "https://github.com/${arr[i].github}" target="_blank">${arr[i].github}</a></td>
    </tr >`
                    break;
                case 'Intern': string += `
    <td>${arr[i].school}</td>
    </tr >`
                    break;

            }
        }
    }
    return string;
}