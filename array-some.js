function some() {
    var product = [
        { name: "Apple", type: "Fruit" },
        { name: "Monitor", type: "Computer" },
        { name: "Mango", type: "Fruit" },
        { name: "Table", type: "Furniture" }
    ];

    console.log(
        product.some(product => product.type === "Fruit")
    );
    console.log(
        product.some(product => product.type === "Transportation")
    );
    // hasil nya 'true', karena pada 'type' ada yang ber-value 'Fruit';
    // hasil nya 'false', karena pada 'type' tidak ada yang ber-value 'Transportation';
    // some() fungsi boolean untuk mengecek data true / false pada object;
}

some();