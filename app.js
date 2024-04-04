const developers = [
    {
        name: "Alex",
        salary: "15000",
        level: "Middle",
    },
    {
        name: "Asel",
        salary: "500",
        level: "Junior",
    },
    {
        name: "Kanat",
        salary: "2500",
        level: "Senior",
    },
]

const developersSalary = developers.filter(developer => developer.salary);
console.log(developersSalary);