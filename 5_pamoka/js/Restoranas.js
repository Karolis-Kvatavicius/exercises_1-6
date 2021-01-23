class Restoranas {
    pavadinimas;
    vietu_skaicius;
    rezervuotu_vietu_skaicius;

    constructor(pavadinimas, vietu_skaicius, rezervuotu_vietu_skaicius) {
        this.pavadinimas = pavadinimas;
        this.vietu_skaicius = vietu_skaicius;
        this.rezervuotu_vietu_skaicius = rezervuotu_vietu_skaicius;
    }

    rezervuotiVietas(vietu_skaicius) {
        if(this.rezervuotu_vietu_skaicius + vietu_skaicius > this.vietu_skaicius) {
            console.log("Nepakanka laisvu vietu");
        } else {
            this.rezervuotu_vietu_skaicius += vietu_skaicius;
            console.log("Vietos sekmingai rezervuotos");
        }
    }

    atsauktiRezervuotasVietas(vietu_skaicius) {
        if(this.rezervuotu_vietu_skaicius - vietu_skaicius >= 0) {
            this.rezervuotu_vietu_skaicius -= vietu_skaicius;
            console.log("Rezervacija sekmingai atsaukta");
        } else {
            console.log("Atsaukti rezervacijos nepavyko");
        }
    }
}

restoranas = new Restoranas("Chenese Wok", 10, 0);
restoranas.atsauktiRezervuotasVietas(2);
restoranas.rezervuotiVietas(4);
restoranas.rezervuotiVietas(7);
restoranas.atsauktiRezervuotasVietas(4);