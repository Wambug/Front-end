import axios  from "axios";



window.axios = axios
axios.defaults.withCredentials = false
axios.defaults.baseURL = '//localhost:8000'

const createCourse = async (Name, Description) => {
    let data = await axios.post('/course', { 
      Name, 
      Description
    });  
    let massageData = data //Some data massage
    return massageData
  }
  
  
export {createCourse}