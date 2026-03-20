// Завдання 1
// у данному випадку файл big.js виконається першим тому що
// його виклик виконується вище а код виконується з гори до низу

//-------------------------------------------------------------------------------------

// Завдання 2
// 1
let a = 2;
let x = 1 + (a *= 2);
console.log(x); // вивід: 5

// 2
// так зявитьсся тому що в js будь який не пустий рядок при приведенні до булевого значення = true

// 3
let name = "Василь";
let admin = name;
console.log(admin);

//-------------------------------------------------------------------------------------

// Завдання 3
let countiesData = [];

async function loadCounties() {
  const url = "https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*";
  const response = await fetch(url);
  const rawData = await response.json();

  countiesData = rawData.slice(1).map(row => {
    return {
      name: row[0],
      code: row[1] + row[2]
    };
  });
  console.log("Дані завантажено!");
}

function getCode(Name) {
  const found = countiesData.find(item => item.name === Name);

  if (found) {
    return found.code;
  } else {
    return "Округ не знайдено";
  }
}

const btn = document.getElementById('searchBtn');
const input = document.getElementById('countyInput');
const display = document.getElementById('result');

btn.addEventListener('click', function() {
  const nameToSearch = input.value;
  const code = getCode(nameToSearch);

  display.innerText = "Код: " + code;
  console.log("Код:", code);
});

loadCounties();

//-------------------------------------------------------------------------------------

// Завдання 4:
const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function(event) {
  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;

  // Перевірка на порожні поля
  if (firstName === "" || lastName === "" || email === "") {
    event.preventDefault(); // Зупиняємо відправку
    alert("Помилка: Усі поля мають бути заповнені!");
  } else {
    // Якщо все добре, виводимо дані
    alert(`Користувач: ${firstName} ${lastName}, Email: ${email}`);
  }
});

//-------------------------------------------------------------------------------------

// Завдання 5:
const element = document.getElementById('elid');
const leftBtn = document.getElementById('moveLeft');
const rightBtn = document.getElementById('moveRight');

let currentPosition = 0;

rightBtn.addEventListener('click', function() {
  currentPosition += 100;
  element.style.transform = `translateX(${currentPosition}px)`;
});

leftBtn.addEventListener('click', function() {
  currentPosition -= 100;
  element.style.transform = `translateX(${currentPosition}px)`;
});