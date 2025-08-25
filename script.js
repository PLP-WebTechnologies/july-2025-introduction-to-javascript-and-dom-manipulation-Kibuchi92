// Part 1: Variables & Conditionals
// Capture user age and respond with a message

const ageInput = document.getElementById('userAge');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const output1 = document.getElementById('output1');

checkAgeBtn.addEventListener('click', () => {
  const age = Number(ageInput.value);
  if (isNaN(age) || age <= 0) {
    output1.textContent = 'Please enter a valid positive number for age.';
    return;
  }

  if (age >= 18) {
    output1.textContent = 'You are an adult.';
  } else {
    output1.textContent = 'You are a minor.';
  }
});

// Part 2: Functions
// Two custom functions: calculateSum and formatName

function calculateSum(numbers) {
  let sum = 0;
  // Using a loop will be shown next part, here is simple logic
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function formatName(firstName, lastName) {
  return firstName.trim() + ' ' + lastName.trim();
}

const output2 = document.getElementById('output2');
const numbers = [10, 20, 30, 40];
const fullName = formatName('John', 'Doe');
const total = calculateSum(numbers);

output2.textContent = `Name: ${fullName}, Sum: ${total}`;

// Part 3: Loops
// Loop examples: for and while

const output3 = document.getElementById('output3');

let textFor = 'For Loop: ';
for (let i = 1; i <= 5; i++) {
  textFor += i + ' ';
}

let textWhile = '\nWhile Loop: ';
let j = 1;
while (j <= 5) {
  textWhile += j + ' ';
  j++;
}

output3.textContent = textFor + textWhile;

// Part 4: DOM Manipulation
// Elements: toggle visibility, add new list item

const toggleBtn = document.getElementById('toggleContentBtn');
const contentDiv = document.getElementById('contentToToggle');
const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');

toggleBtn.addEventListener('click', () => {
  if (contentDiv.style.display === 'none') {
    contentDiv.style.display = 'block';
  } else {
    contentDiv.style.display = 'none';
  }
});

let itemCount = 0;
addItemBtn.addEventListener('click', () => {
  itemCount++;
  const newItem = document.createElement('li');
  newItem.textContent = 'List item #' + itemCount;
  dynamicList.appendChild(newItem);
});

