import React from "react";
import axios from "axios"; 
import { useState,useEffect } from "react";


const Show_weather_pro = ({special_country}) =>{
  const api_key = process.env.REACT_APP_API_KEY
  const [weather_pro, set_new_weather_pro] = useState([])
  const w_hook = ()=>{

    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${special_country.capital}&limit=1&appid=${api_key}`)
    .then(
      res =>{
        const lat = res.data[0].lat
        const lon = res.data[0].lon



        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)

      }
    )
    .then(res => set_new_weather_pro(res.data))

  }
  useEffect(
    w_hook,[special_country]
  )
  console.log(weather_pro)
  const temperature = `${weather_pro && weather_pro.main && weather_pro.main.temp ? (weather_pro.main.temp - 273.15).toFixed(2) : 'N/A'} Celcius`
  const wea_picture = weather_pro && weather_pro.weather  ? `https://openweathermap.org/img/wn/${weather_pro.weather[0].icon}.png` : null

  const wind = `${weather_pro && weather_pro.wind && weather_pro.wind.speed ? weather_pro.wind.speed.toFixed(2) : 'N/A'} m/s`

  return(
    <div>
      <h1>
        weather in {special_country.capital}
      </h1>
      <p>
      temperature {temperature}
      </p>
      

      {weather_pro && (
            <img src={wea_picture} style={{
              width: '250px',
              height: '250px',
            }}/>
      )}


      <p>
      wind {wind}
      </p>
    </div>
  )

}





const Extend_dis = ({instance,add_new_special_coutry}) =>{
  console.log("我重复了")
  console.log(instance)
  return(

    <li>
      
      {instance.name.common}
      
          <button onClick={(e)=>{
            
            e.preventDefault()
            Dis_special_country(instance, add_new_special_coutry,e.event)}}>
            show
          </button>
    </li>
  )
}

const Dis_special_country = (instance,add_new_special_coutry) =>{

  add_new_special_coutry(instance)
}

const Show = ({props,add_new_special_coutry}) =>{
  console.log(props)

  if(props === null){

  }
    
    
  else  {
  const end_language = Object.values(props.languages)
  const end_capital = props.capital
  const picture =  props.flags.png
  const area = props.area 



  const list_languages = end_language.map((lan,id) =><li key={id}> {lan}</li>)



  //  console
  return(
    <div>
      <h1>
            {props.name.common}
        
      </h1>

    <p>
        Capital {end_capital}
    </p>

    <p>
       Area {area}
    </p>

    <h2>
      languages
    </h2>

    <ul>
      {list_languages}
    </ul>

    <div>
      <img src={picture}/>
    </div>

    <Show_weather_pro special_country={props}/>

    </div>
  )
}

}



const Display = ({content,add_new_special_coutry,search_content}) =>{
  useEffect(() => {
    if (content.length === 1) {
      add_new_special_coutry(null);
      }  // 当content只有一个国家时，自动选中该国家


  }, [content]);
  if(content.length >=10 && search_content !== ""){
    const end_content =  "Too many matches, specify another filter"

    return(
      <div>
        <li>
          {end_content}
        </li>
      </div>
    )
  }
  else if (content.length === 1){
    const end_language = Object.values(content[0].languages)
    const end_capital = content[0].capital
    const picture =  content[0].flags.png
    const area = content[0].area 



    const list_languages = end_language.map((lan,id) =><li key={id}> {lan}</li>)

    //  console
    return(
      <div>
        <h1>
              {content[0].name.common}
          
        </h1>

      <p>
          Capital {end_capital}
      </p>

      <p>
         Area {area}
      </p>

      <h2>
        languages
      </h2>

      <ul>
        {list_languages}
      </ul>

      <div>
        <img src={picture}/>
      </div>

      <Show_weather_pro special_country={content[0]}/>

      </div>
    )
  }
  else if(search_content === ""){
    return(
      <div>
        Please enter the country name!
      </div>
    )
  }


  else {
    console.log("------",content)

    return(

      <div>
        {content.map((cou,id) => <Extend_dis instance = {cou} add_new_special_coutry = {add_new_special_coutry} key = {id}/> 
       
      )}
      </div>
    )
  }

}

const App = () =>{
  const [country, set_country] = useState([])
  const [new_country,set_new_country] = useState("")
  const [search_content,set_search_content] = useState("")
  const [show_special_country,add_new_special_coutry] = useState(null)


  

  const hook = () =>{
    console.log("test-11111")
    axios
    .get("https://restcountries.com/v3.1/all")
    .then( response =>{
      console.log("debug-22222")
      set_country(response.data)
    }

    )


  }

  useEffect(hook,[])

  const filter_content = (event) =>{
    console.log(event.target.value)
    set_search_content(event.target.value)
  }

  const content = country.filter(cou => cou.name.common.toLowerCase().includes(search_content.toLowerCase()) )
  //const end_content = (content.length<=10)? content : [{name:{common: "Too many matches, specify another filter"}}]

  return(

<div>

<form>
    <input onChange={filter_content}/>

    {/* {end_content.map(cou => <li>{cou.name.common}</li>)} */}

    <Display content ={content} add_new_special_coutry = {add_new_special_coutry} search_content = {search_content}/>

</form>





    <Show props = {show_special_country} add_new_special_coutry= {add_new_special_coutry}/>
    </div>
  )
}

export default App