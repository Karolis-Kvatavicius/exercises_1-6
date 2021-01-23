class Knyga {
    pavadinimas;
    autorius;
    leidimo_metai;
    puslapiu_skaicius;
    kaina;

    constructor(pavadinimas, autorius, leidimo_metai, puslapiu_skaicius, kaina) {
        this.pavadinimas = pavadinimas;
        this.autorius = autorius;
        this.leidimo_metai = leidimo_metai;
        this.puslapiu_skaicius = puslapiu_skaicius;
        this.kaina = kaina;
    }

    static atspausdintiVisasKnygas(knygos) {
            console.log(knygos);
    }

   static padidintiKiekvienosKnygosKaina(knygos) {
        knygos.forEach(knyga => {
            knyga.kaina = knyga.kaina * 1.1;
        })
        console.log(knygos);
    }

    static knygosKuriuPslSkaiciusDidesnisUz100(knygos) {
        knygos.forEach(knyga => {
            (knyga.puslapiu_skaicius > 100) ? console.log(knyga) : false;
        })
    }
}

knyga1 = new Knyga("Moby Dick", "Neatsimenu", 1998, 255, 10.99);
knyga2 = new Knyga("Laisvasis Vilis", "Kazkas", 2000, 75, 13.49);
knyga3 = new Knyga("Piratai kaime", "Piratas", 2002, 101, 5.32);

let knygos = [];
knygos.push(knyga1, knyga2, knyga3);

// Knyga.atspausdintiVisasKnygas(knygos);
// Knyga.padidintiKiekvienosKnygosKaina(knygos);
// Knyga.knygosKuriuPslSkaiciusDidesnisUz100(knygos);
