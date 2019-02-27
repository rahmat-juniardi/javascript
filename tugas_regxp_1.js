function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

 console.log(str.match(/c/g).concat(str.match(/C/g)))
 console.log(str.match(/k/g).concat(str.match(/K/g)))
 console.log(str.match(/l/g).concat(str.match(/L/g)))


}
panggilRegexp()
