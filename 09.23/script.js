/*1. feladat: Hőmérséklet átváltása
Leírás: Képzeld el,
hogy van egy tömb, amely különböző hőmérsékleteket tartalmaz Fahrenheit fokban.
A feladatod, hogy alakítsd át ezeket a Celsius fokba. Használj map-et és arrow
function-t, hogy minden hőmérsékletet a megfelelő formula segítségével átválts!*/
console.log("1. feladat: Hőmérséklet átváltása");

let celsius = []
for (let i = 0; i < 3; i++) {
    celsius.push(Number(prompt("Adja meg a fokot fahrenheitben!")))
}
console.log(celsius);
console.log(celsius.map(x=>(x-32)*5/9))


/*2. feladat: Kifejezések szavainak száma
Leírás: Van egy tömb,
amely különböző mondatokat tartalmaz. A feladatod, hogy számold meg, hány szó
található minden egyes mondatban. Használj map-et, hogy az egyes mondatokból
kiemeld a szavak számát!*/
console.log("2. feladat: Kifejezések szavainak száma");

const szovegek = ["adott egy tömb, 3 szöveggel", "a feladat, hogy", "számoljuk meg, hány szóból áll egy-egy szöveg!"]
console.log(szovegek)
console.log(szovegek.map(x=>x.split(" ").length))


/*3. feladat: Árlista kinyerése
Leírás: Képzeld el,
hogy van egy tömb, amely különböző termékeket tartalmaz, minden terméknek van
egy neve és egy ára. A feladatod, hogy készíts egy új tömböt, amely csak a
termékek árait tartalmazza. Használj map-et és arrow function-t az árak
kiemelésére!*/
console.log("3. feladat: Árlista kinyerése");

const termek1 = {
    nev : "kenyér",
    ar : 100
}
const termek2 = {
    nev : "tojás",
    ar : 50
}
const termek3 = {
    nev : "vaj",
    ar : 150
}
const termekek = [termek1, termek2, termek3]
const arak = termekek.map(x=>x.ar)
console.log(termekek)
console.log(arak)



/*
4. feladat: Csak számok kinyerése
Leírás: Van egy
vegyes típusú tömb, amely számokat és szövegeket is tartalmaz. A feladatod,
hogy készíts egy új tömböt, amely csak a számokat tartalmazza. Használj map-et
a típusok ellenőrzésére, és filter-t, hogy eltávolítsd a nem szám típusú
elemeket!
*/
console.log("4. feladat: Csak számok kinyerése");

const tomb = ["cica",1,6,"kutya","szöveg",3]
console.log(tomb);
console.log(tomb.map(x=>Number.isFinite(x)));
console.log(tomb.filter(Number))


/*
5. feladat: Korok növelése
Leírás: Van egy tömb,
amely különböző felhasználók életkorát tárolja. A feladatod, hogy készíts egy
új tömböt, amely az életkorokat 5 évvel növeli meg. Használj map-et és arrow
function-t az életkorok frissítésére!
*/
console.log("5. feladat: Korok növelése");

const korok = [15,20,38,56,80]
const idosebbek = (korok.map(x=>x+5));
console.log(korok);
console.log(idosebbek);

/*
6. feladat: Gyökök kiszámítása
Leírás: Képzeld el,
hogy van egy tömb, amely négyzetre emelt számokat tartalmaz. A feladatod, hogy
számítsd ki ezek négyzetgyökét, és tárold őket egy új tömbben. Használj map-et
és arrow function-t a négyzetgyökök kiszámítására!
*/
console.log("6. feladat: Gyökök kiszámítása");

const negyzetreEmelt = [15,20,38,56,80]
const negyzetgyok = (negyzetreEmelt.map(x=>Math.sqrt(x)));
console.log(negyzetreEmelt);
console.log(negyzetgyok);


/*
7. feladat: Mondatok nagybetűsítése
Leírás: Van egy tömb,
amely különböző mondatokat tartalmaz. A feladatod, hogy alakítsd át ezeket a
mondatokat nagybetűs formára. Használj map-et, hogy minden mondatot
nagybetűsítve tárolj el egy új tömbben!
*/
console.log("7. feladat: Mondatok nagybetűsítése");

const mondatok = ["Van egy tömb, amely különböző mondatokat tartalmaz.", "A feladatod, hogy alakítsd át ezeket amondatokat nagybetűs formára.","Használj map-et, hogy minden mondatot nagybetűsítve tárolj el egy új tömbben!"]
const nagybetus = (mondatok.map(x=>x.toUpperCase()));
console.log(nagybetus);

/*
8. feladat: Teljes nevek létrehozása
Leírás: Van egy tömb,
amely felhasználói adatokat tartalmaz, mindegyik felhasználónak van kereszt- és
vezetéknév. A feladatod, hogy készíts egy új tömböt, amely minden felhasználó
teljes nevét tartalmazza. Használj map-et és arrow function-t a nevek
összeállításához!
*/
console.log("8. feladat: Teljes nevek létrehozása");

const felhasznalo1 = {
    vezetek : "Kis",
    kereszt : "János"
}
const felhasznalo2 = {
    vezetek : "Nagy",
    kereszt : "Béla"
}
const felhasznalo3 = {
    vezetek : "Kovács",
    kereszt : "Ilona"
}
const felhasznalok = [felhasznalo1,felhasznalo2,felhasznalo3]
const teljesNevek = [felhasznalok.map(x=>x.vezetek+" "+x.kereszt)]
console.log(teljesNevek);


/*
9. feladat: Érdemjegyek meghatározása
Leírás: Van egy tömb,
amely különböző tesztpontszámokat tárol. A feladatod, hogy állítsd be az
érdemjegyeket az alábbi szabályok szerint: 90 pont felett 'A', 80-89 pont
között 'B', 70-79 pont között 'C', és minden más esetben 'D'. Használj map-et
és arrow function-t az érdemjegyek megállapítására!
*/
console.log("9. feladat: Érdemjegyek meghatározása");

function Jegy(pont) {
    if (pont>=90) {
        return "A"
    }
    else if (pont>=80) {
        return "B"
    }
    else if (pont>=70) {
        return "C"
    }
    else
        return "D"
}
const pontok = [100,85,73,61]
const jegyek = pontok.map(x=>Jegy(x))
console.log(pontok);
console.log(jegyek);

/*
10. feladat: Színek objektummá alakítása
Leírás: Van
egy tömb, amely különböző színeket tartalmaz. A feladatod, hogy minden színhez
készíts egy objektumot, amely tartalmazza a színt és a szín hosszát. Használj map-et,
hogy minden színhez hozzárendelj egy objektumot a megfelelő információkkal!
*/
console.log("10. feladat: Színek objektummá alakítása");

function SzinObj(szinNev) {
    szin = {
        nev : szinNev,
        hossz : szinNev.length
    }
    return szin
}
const szinek = ["kék","zöld","piros"]
const szinObjektumok = szinek.map(x=>SzinObj(x))
console.log(szinObjektumok);
