function nested_loop(){
    for( var i = 0; i<3;i++){
        console.log("i ke :", i);
        for( var j = 0; j<2; j++){
            console.log("j ke :", j);        
        }
        console.log("");
    }
}

nested_loop();