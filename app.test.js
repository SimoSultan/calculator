const app = require('./app')

describe('calculator functionality', () => {

  test('should return correct result from operation', () => {
    expect(app.multiply(4,6)).toEqual(24)
    expect(app.sum(4,6)).toEqual(10)
    expect(app.minus(4,6)).toEqual(-2)
    expect(app.divide(4,2)).toEqual(2)
  })

  test('should return correct result with performOperation function', () => {
    let num1 = 4
    let num2 = 6
    let operation = () => {app.sum()}
    expect(app.performOperation(num1, num2, operation)).toEqual(10)
  })
  
})
