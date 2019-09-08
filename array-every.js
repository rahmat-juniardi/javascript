function every(){
    var product = [
        {name : "Apple", type : "Fruit"},
        {name : "Monitor", type : "Computer"},
        {name : "Mango", type : "Fruit"},
        {name : "Table", type : "Furniture"}
    ];

    console.log(
        product.every(product => product.type === "Fruit")
    );
    // hasil nya 'false', karena tidak semua 'type' ber-value 'Fruit'
    // every() fungsi boolean jika semua 'type' adalah "Fruit", maka hasil nya 'true';
}

every();