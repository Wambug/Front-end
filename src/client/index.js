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
    console.log(massageData.data.ID)
    return massageData
}
const createSection = async(coursetitle,Section) => {
  let data = await axios.post('/course/'+ coursetitle,{
    Section,
  });
  let messagedata = data
  return messagedata
}

const getCourse = async(id) => {
  let data = await axios.get('/course/'+id,{
  });
  let messageData = data
  return messageData
}

const updateCourse = async (id, Name, Description) => {
  let data = await axios.post('/course/update'+id, { 
    Name, 
    Description
  });  
  let messageData = data //Some data massage
  return messageData
}
 
const deleteCourse = async (id) => {
  let data = await axios.post('/course/'+id, { 
  });  
  let messageData = data //Some data massage
  return messageData
}
//////////////////////////////////////////////////////////////////////
const updateSection  = async (name, Description,sectionid) => {
  let data = await axios.post('/course/'+name+ '/updatesection/'+sectionid, { 
    Description
  });  
  let massageData = data //Some data massage
  return massageData
}

const deleteSection = async (name, Description,sectionid) => {
  let data = await axios.post('/course/'+name+ '/deleteesection/'+sectionid, { 
    Description
  });  
  let massageData = data //Some data massage
  return massageData
}

const createSubsection = async (CourseName,sectionid, Content) => {
  let data = await axios.post('/course/'+CourseName + '/'+ sectionid , { 
    Content
  });  
  let massageData = data //Some data massage
  return massageData
}
///course/:name/update/:sectiontitle/:subsectionid
const updateSubsection = async (coursename,sectiontitle ,subsectionid,Subsection_Title) => {
  let data = await axios.post('/course/'+coursename+'/update/'+sectiontitle +'/'+subsectionid, { 
    Subsection_Title,
  });
  let massageData = data //Some data massage
  return massageData
}
const deleteSubsection =async (Name, Description) => {
  let data = await axios.post('/course', { 
    Name, 
    Description
  });  
  let massageData = data //Some data massage
  return massageData
}
const getCourses =async (page_id,page_size) => {
  let data = await axios.get('/courses?page_id='+ page_id+'&page_size='+ page_size, { 
  });  
  let massageData = data //Some data massage
  console.log(massageData)
  return massageData
}
///courses/:name/section/:subsectionid
const getContent =async (coursename,subsectionid) => {
  let data = await axios.get('/courses/'+ coursename +'/section/'+ subsectionid, { 
  });  
  let massageData = data //Some data massage
  console.log(massageData)
  return massageData
}
//http://localhost:8000/courses?page_id=1&page_size=10
export {createCourse,createSection,updateCourse,deleteCourse,updateSection,deleteSection,createSubsection,getContent,updateSubsection,deleteSubsection,getCourses,getCourse}
