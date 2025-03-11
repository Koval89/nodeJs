export interface IUser {
    _id: string, // _ ставимо бо працюємо з монго дб
    name: string,
    surname: string,
    age: number,
    createdAt: Date,  // поле створення
    updatedAt: Date  // поле оновлення
}  //цю модель буде використовувати база даних


// модкль яка буде характеризувати те що ми будемо передавати на створення а передавать ми будемо тільки три поля
export type IUserDTO = Pick<IUser, "name" | "surname" | "age">
                    //забери з IUser, вказуємо що треба забрати
//DTO data transfer object