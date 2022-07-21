// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   });

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   const isEven = (number) => {
//     if (number % 2 === 0) {
//       console.log(number, 'is even');
//     }
//   };
  
//   const isOdd = (number) => {
//     if ((number % 2) > 0) {
//       console.log(number, 'is odd');
//     }
//   };
  
//   repeat(3, isEven); // Testa quais números serão pares;
//   repeat(3, isOdd); // Testa quais números serão ímpares;

// const numberGenerator = () => {
//     return Math.round(Math.random() * 100);
//   }
  
//   console.log(numberGenerator());

const wakeUp = () => 'Hora de Acordar!!';

const breakfast = () => 'Bora tomar café!!';

const sleepTime = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (callback) => {
    const result = callback();

    console.log(result);
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleepTime);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!