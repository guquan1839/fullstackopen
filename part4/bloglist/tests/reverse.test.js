const { test } = require('node:test')
const assert = require('node:assert')

const reverse = require('../utils/for_testing').reverse

test('reverse of a', () => {
  const result = reverse('a')

  assert.strictEqual(result, 'a') //断言模块提供了一组用于验证不变量的断言函数。 
  //assert.strictEqual()函数测试实际参数和预期参数之间的严格相等性。如果条件为真，则不会产生输出，否则会引发断言错误。
})



//test 函数有两个参数第一个参数是测试的描述，第二个参数为实际的函数

test('reverse of react', () => {
  const result = reverse('react')

  assert.strictEqual(result, 'tcaer') 
})

test('reverse of saippuakauppias', () => {
  const result = reverse('saippuakauppias')

  assert.strictEqual(result, 'saippuakauppias')
})