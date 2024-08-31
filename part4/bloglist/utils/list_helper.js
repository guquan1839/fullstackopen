const dummy = (blogs) => {
    // ...
    return 1
  }






const totalLikes = (blog) =>{

  const reducer = (sum,item)=>{
    return sum+item.likes
  }
  return blog.reduce(reducer,0)
}

  

const favoriteBlog = (blogs)=>{
  let max_index = 0
 for(let i  = 0; i < blogs.length - 1 ; i++){
  if(blogs[i].likes > blogs[i+1].likes){
    max_index = i
  }
  else{
    max_index =i+1
  }
 }
 return blogs[max_index]

}


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


const mostLikes = (blogs) =>{
  const statistic_author  = (pre_item,current_item)=>{

    let is_former_au = pre_item.find(pre_au => {return pre_au.author === current_item.author})

    if(!is_former_au){
      const new_author = {author: current_item.author, likes: current_item.likes}
      return pre_item.concat(new_author)
   }
   else{
     is_former_au.likes = is_former_au.likes + current_item.likes
     return pre_item
   }
  }
   const final_blogs_list = blogs.reduce(statistic_author,[])

   return final_blogs_list.reduce((former_item,current_item)  =>{

    if(former_item.likes < current_item.likes){
      return current_item
    }
    else{
      return former_item
    }
  } )

}

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
  }