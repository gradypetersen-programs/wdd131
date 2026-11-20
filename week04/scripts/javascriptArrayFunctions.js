let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesB = names.filter(name => name.charAt(0).toLowerCase() === 'b');
console.log(namesB);
let nameLengths = names.map((name) => name.length);
console.log(nameLengths);
console.log(names.reduce((total, name) => total + name.length, 0) / names.length);

