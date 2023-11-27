let heroi = ["jorgin", 10000]
let classe = ""

switch(true){
    case (heroi[1] < 1000):
        classe = "Ferro"
        break;

        case (heroi[1] >= 1000 && heroi[1] < 2000):
        classe = "Bronze"
        break;

        case (heroi[1] >= 2001 && heroi[1] < 6000):
        classe = "Prata"
        break;

        case (heroi[1] >= 6001 && heroi[1] < 7000):
        classe = "Ouro"
        break;

        case (heroi[1] >= 7001 && heroi[1] < 8000):
        classe = "Platina"
        break;

        case (heroi[1] >= 8001 && heroi[1] < 9000):
        classe = "Ascendente"
        break;

        case (heroi[1] >= 9001 && heroi[1] < 10000):
        classe = "Imortal"
        break;

        case (heroi[1] >= 10000):
        classe = "Radiante"
        break;
    
}

console.log("O herói de nome " + heroi[0] + " está no nível " + classe);