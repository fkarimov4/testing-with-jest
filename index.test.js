const {sum, square, cube} = require('./index.js')

describe('Should contain tests for sum', () => {
    it('should add 2 numbers', () => {
        //Arrange
        const a = 4
        const b = 6
        const expectedResult = 10

        //Act
        const actual = sum(a, b)
        
        //Assert
        expect(actual).toBe(expectedResult)
    })

    it('should return an error for invalid inputs', () => {
        //Arrange
        const a = null
        const b = 6
        const expectedResult = 'Invalid input'

        //Act
        const actual = sum(a, b)
        
        //Assert
        expect(actual).toBe(expectedResult)
    })
})

describe('Should contain tests for square', () => {
    it('should square a number', () => {
        //Arrange
        const num = 8
        const expectedResult = 64

        //Act
        const actual = square(num)

        //Assert
        expect(actual).toBe(expectedResult)
    })
    it('should return an error for invalid inputs', () => {
        //Arrange
        const num = null
        const expectedResult = 'Invalid input'

        //Act
        const actual = square(num)

        //Assert
        expect(actual).toBe(expectedResult)
    })
})

describe('Should contain tests for cube', () => {
    it('should cube a number', () => {
        //Arrange
        const num = 8
        const expectedResult = 512

        //Act
        const actual = cube(num)

        //Assert
        expect(actual).toBe(expectedResult)
    })
    it('should return an error for invalid inputs', () => {
        //Arrange
        const num = null
        const expectedResult = 'Invalid input'

        //Act
        const actual = cube(num)

        //Assert
        expect(actual).toBe(expectedResult)
    })
})