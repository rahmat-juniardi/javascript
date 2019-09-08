function filter() {
    var people = [
        {nama : "Sinta",gender : "Female"},
        {nama : "Agus",gender : "Male"},
        {nama : "Gita",gender : "Female"}
    ];

    let female = people.filter(people => {
        return people.gender === "Female";
    })

    console.log(female);
}

filter();