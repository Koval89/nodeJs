// repositiries  - прошарок для створення апдейту кріейту видалення і тд логіки

//створюємо клас і вкладаємо в нього методи
import {read, write} from "../services/fs.services";

class UserRepository {
    async getAll() {  // асинхронний метод гетол
        return read()   // повертаємо функцію рід з fs.services
    }

    async create(user) {  //асинхронний метод кріейт який приймає(юзера)якого пришле клієнт
        const users = await read() // перед тим як записати юзера потрібно зчитати юзерів
        const newUser = {   //ДЛЯ ЗАПИСУ СТВОРЮЄМО НОВОГО ЮЗЕРА і щоб дати йому якусь айдішку дивись наступний рядок
            id: users.length ? users[users.length - 1].id + 1 : 1,   //кажемо id: подивитись чи є там взагалі якийсьь юзерusers.lenght?якщо є то звертаємось до усього масиву юзера users[до останнього його елементу users.lenght -1 - це й буде останній індекс елементу] ы забираэмо його айдішку .id і додаємо + до нього 1 а якщо узерів у нас немаж : то в такому випадку айдішка буде 1
            name: user.name,  // надає клієнт
            surname: user.surname,// надає клієнт
            age: user.age// надає клієнт
        }
        users.push(newUser) // звертаємось до наших юзерів і пушимо туди нового юзера - наш об'єкт оновився але база ні далі строка нижче
        await write(users)  // записуємо юзерів
        return newUser  //і повертаємо оновлений список юзерів
    }
    async getById(id){
        const users = await read();  // дістаємо всіх юзерів
        const index = users.findIndex(user => user.id === Number(id)); // зіертаємось до усіх наших юзерів до їх індексів і порівнюємойого айдішку з нашою айдішкою   (Number(id) - кастомізація так як йдішка приходить як стрінга)
        return users[index] // і повертаємо нашого юзера по індексу далі йдемо до юзер сервісу
    }
}

const userRepository = new UserRepository();
module.exports={
    userRepository
}