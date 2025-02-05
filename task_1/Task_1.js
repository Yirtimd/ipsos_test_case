/*Напишите функцию, которая выполняет следующие операции:
	•	Принимает массив объектов с данными о пользователях.
	•	Валидирует каждый объект в массиве:
	•	Поле name должно быть строкой.
	•	Поле age должно быть числовым значением.
	•	Если данные не соответствуют требованиям, выбрасывается ошибка с информативным сообщением.
	•	Сортирует массив пользователей по возрасту в порядке возрастания.
	•	Для каждого пользователя добавляет новое поле birthYear, содержащее год рождения (текущий год минус возраст).
	•	Возвращает новый массив, не изменяя исходный массив.
Пример входных данных:
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 }
];
Особенности реализации:
	•	Используйте Array.prototype.sort для сортировки.
	•	Генерация ошибки должна быть ясной, например: "Invalid user data: age must be a number".*/


function sortedObjectsMassive(users) {
    currentYear = new Date().getFullYear()
    result = []

    try {
        for(const user of users) {
            if (typeof user.name !== 'string') {
                throw Error('Invalid user data: age must be a string');
            }
            if (typeof user.age !== 'number') {
                throw Error('Invalid user data: age must be a number');
            }
            const newUser = {...user, birthYear: currentYear - user.age};
            result.push(newUser);
        }

        return result.sort((a,b) => a.age - b.age);
    } catch (error) {
        console.error(error.message);
    }
}


const users = [
    { name: 'Alice', age: 31 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 }
];

try {
    const proccessSortedUser = sortedObjectsMassive(users);
    console.log(proccessSortedUser);
} catch (error) {
    console.error('Error processed:', error.message)
}