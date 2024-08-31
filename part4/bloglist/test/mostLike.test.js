const {test,describe} = require('node:test')
const assert = require('node:assert')

const listHelper = require('../utils/list_helper.js')


describe("exervise 4.7",() => {
test("find the most LIKES", ()=>{
    const blogs = [
        {
            title: "Romance of the Three Kingdoms",
            author: "a",
            likes: 13
          },
          {
            title: "Journey to the West",
            author: "a",
            likes: 8
          },
          {
            title: "Water Margin",
            author: "c",
            likes: 2
          },
          {
            title: "Dream of the Red Chamber",
            author: "c",
            likes: 112
          }
    ]


    validation =           {
        author: "c",
        likes: 114
      }

      assert.deepStrictEqual(listHelper.mostLikes(blogs),validation)
})

})