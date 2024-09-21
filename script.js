`Use strict`;

// 1
for (let i = 5; i < 100; i++) {
  console.log(i);
}
// 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let index = 0; index < array1.length; index++) {
  const element = array1[index];
  if (element > 0 && element < 10) {
    console.log(element);
  }
}
// 3
let array2 = [1, 2, 3, 4, 5]; // jami ?
let jami = 0;
for (i of array2) {
  jami += i;
}
console.log(jami);
// 4
let array3 = [1, 2, 3, 4, 5];
let sum = 0;
let shv = 0;
for (x = 0; x < array3.length; x++) {
  sum += array3[x];
  shv = sum / array3.length;
}
console.log(shv);
//5
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
console.log(user.studentstatus);
console.log(user[`studentstatus`]);
// 6
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};
let result =
  user2.age < 18 && user2.studentstatus === `active`
    ? `Hello user `
    : user2.name === `levani`
    ? `hello levan`
    : user2.age < 25 || user.studentstatus === `active`
    ? `Hello anna`
    : `Erorr`;
console.log(result);
// 7
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]; // mxolod luwi
for (let j of array6) {
  if (j % 2 === 0) {
    console.log(j);
  }
}
// 8
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
console.log(users[2]);
// 9
let array7 = [32, 14, null, "40", 50];
for (let sd = 0; sd < array7.length; sd++) {
  const asd = Number(array7[sd]);
  if (asd % 5 == 0) {
    console.log(asd);
  }
}
// 10
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];
for (let f2 = 0; f2 < array8.length; f2++) {
  const f4 = array8[f2];
  for (let f6 = 0; f6 < f4.length; f6++) {
    let f12 = f4[f6];
    if (f12 > 0) {
      console.log(f12);
    }
  }
}
//  for/of
for (let it of array8) {
  for (let he of it) {
    if (he > 0) {
      console.log(he);
    }
  }
}
