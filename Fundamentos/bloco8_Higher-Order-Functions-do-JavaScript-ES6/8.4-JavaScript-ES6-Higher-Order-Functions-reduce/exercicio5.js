const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
    return array.reduce((acc, curr) =>
        acc + curr.split('').reduce((acumulador, current) => {
        if (current === 'a' || current === 'A') return acumulador +1;
            return acumulador;
        }, 0), 0);
  };

  console.log(containsA(names));

 