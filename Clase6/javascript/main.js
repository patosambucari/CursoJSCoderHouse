const array1 = [1, 2, 3, 4, 5, 6];

for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

array1.shift();

for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

console.log(array1);

console.table(array1);

console.log(typeof array1);
//array1.forEach(Element => alert(Element));
