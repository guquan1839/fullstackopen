const {test,describe} = require('node:test')
const assert = require('node:assert')

const listHelper = require('../utils/list_helper.js')


describe("exervise 4.5",() => {
test("find the favorite blog", ()=>{
    const blogs = [
        {
            title: "Romance of the Three Kingdoms",
            author: "a",
            likes: 13
          },
          {
            title: "Journey to the West",
            author: "b",
            likes: 8
          },
          {
            title: "Water Margin",
            author: "c",
            likes: 2
          },
          {
            title: "Dream of the Red Chamber",
            author: "d",
            likes: 112
          }
    ]


    validation =           {
        title: "Dream of the Red Chamber",
        author: "d",
        likes: 112
      }


      assert.deepStrictEqual(listHelper.favoriteBlog(blogs),validation)
})

})