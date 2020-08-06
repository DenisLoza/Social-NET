// Валидация на попытку ввода пустого значения
export const requiredField = (value: any) => {
    if (value)
        return undefined
    return "Field is required"
}
// Валидация на попытку ввода строки больше определенной длины
export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value && value.length > maxLength)
        return `Max length is ${maxLength} symbols`
    return undefined
}
