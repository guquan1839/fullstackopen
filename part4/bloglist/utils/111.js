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
        author: "a",
        likes: 2
      },
      {
        title: "Dream of the Red Chamber",
        author: "d",
        likes: 112
      }
]

const mostBlogs = (blogs)=>{

    const check_item = (pre_item,current_item)=>{
  
      let is_former_au = pre_item.find(pre_au => { return pre_au.author === current_item.author} )
  
      if(!is_former_au){
         const new_author = {author: current_item.author, blogs:1}
         return pre_item.concat(new_author)
      }
      else{
        is_former_au.blogs = is_former_au.blogs+1
        return pre_item
      }
  
    }
  
    const final_blogs_list = blogs.reduce(check_item,[])
  
  
    return final_blogs_list.reduce((former_item,current_item)  =>{
  
      if(former_item.logs < current_item.logs){
        return current_item
      }
      else{
        return former_item
      }
    } )
  }

  console.log(mostBlogs(blogs))