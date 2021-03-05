// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere
// al nostro programma così come lo faremmo "a mano"

// Creo l'array di numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
  if (!(i%3)&& !(i%5)) {
    // Se il numero è sia multiplo di 3 che di 5 scambio il suo valore con FizzBuzz
    console.log("FizzBuzz");
  } else if (!(i%3) ) {
    // Cerco i numeri multipli di 3
    //Al loro posto stampo Fizz
    console.log("Fizz");
  } else if (!(i%5)) {
    // Cerco i numeri multipli di 5
    //Al loro posto stampo Buzz
    console.log("Buzz");
  } else {
    //Stampo i rimanenti numeri che non sono
    //divisibili per 3 o 5
    console.log(i);
  }
}
