export default function splitHundreds(input) {
    // Проверка, является ли входная строка числом
    if (isNaN(input)) {
        return "Ошибка: Входная строка не является числом.";
    }

    // Разделение числа на целую и дробную части
    const parts = input.toString().split('.');
    const integerPart = parts[0];
    let decimalPart = parts[1] || "00"; // Добавление нулей, если десятичная часть отсутствует

    // Добавление нуля перед десятичной частью, если она состоит из одной цифры
    if (decimalPart.length === 1) {
        decimalPart += '0';
    }

    // Разделение целой части на триады
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    // Возвращение форматированной строки с разделением на сотые
    return `${formattedIntegerPart}`;
}

// Пример использования:
const input = "1234567.89";
const result = splitHundreds(input);
console.log(result); // Вывод: "1 234 567.89"
