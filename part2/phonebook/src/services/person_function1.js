import axios from "axios";

const base_url = "http://localhost:3001/persons"




const get_all = () =>{
    const request = axios.get(base_url)
    return request.then(response => response.data)

}


const create = new_object =>{
    const request = axios.post(base_url,new_object)
    return request.then(response => response.data)
}

const update = (id,new_object) =>{
    const request = axios.put(`${base_url}/${id}`,new_object)
    return request.then(response => response.data)
}

const del = (id) =>{
    if(window.confirm("Are you sure you want to delete this information?")){
        const request = axios.delete(`${base_url}/${id}`)
        alert("Please refreash page")
        return request.then(response => response.data)
    }
    else{
        const request = axios.get(base_url)
        return request.then(response => response.data)
    }
  }

// useEffect(hook,[])
const person_function1 = {
    get_all :get_all, 
    create : create,
    del : del,
    update : update
}
export default person_function1