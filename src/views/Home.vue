<template>
  <div class="home">
<div class="bg-white">
 
   <div  class="px-4 flex-grow w-full py-4 sm:py-16 mx-auto ">
      <h1 class="text-center text-3xl mb-4 uppercase bg-white text-gray-700 mx-auto px-2">
      Courses
      </h1>
      <div class="mx-auto w-full md:w-4/5 px-4">
        <div class="container ">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-3xl font-medium">
              Best Selling Courses
              <a href="#" class=""
                ><span
                  class="text-salmon font-medium text-lg ml-2 hover:underline"
                  >See all
                </span></a
              >
            </h2>
            <div>
              <button
                class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"
              >
              </button>
              <button
                class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"
              >
              </button>
            </div>
          </div>
          <div
            id="scrollContainer"
            class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
          >
            <div  v-for="course in enrolledCourses" :key="course.ID"
              class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg"
            >
            <div  v-if="course.StudentsEnrolled">
            
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      {{course.name}}
                    </h3>

                    <h2 class="py-2 uppercase tracking-widest text-xs">No .of Students: {{course.StudentsEnrolled.length}}</h2>
                    <h2 class="py-2 uppercase tracking-widest text-xs">Author: {{course.author}}</h2>
                  </div>
                  <div class="text-lg">
                    <p class="overflow-hidden">
                      {{course.description}}
                    </p>
                    <router-link :to="{name:'Course',params:{id:course.ID}}">
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      View<span class="text-indigo-600">&hellip;</span>
                    </p>
                    </router-link>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right" @click="Enroll(course.name)">Enroll</button>
                  </div>
                </div>
            </div>

            <div  v-else>
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      {{course.name}}
                    </h3>
                     <h2 class="py-2 uppercase tracking-widest text-xs">No .of Students: {{course.StudentsEnrolled.length}}</h2>
                  </div>
                  <div class="text-lg">
                    <p class="overflow-hidden">
                      {{course.description}}
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                     <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right" @click="Enroll(course.name)">Enroll</button>
                  </div>
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full md:w-4/5 px-4">
        <div class="container ">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-3xl font-medium">
              Other Courses
              <a href="#" class=""
                ><span
                  class="text-salmon font-medium text-lg ml-2 hover:underline"
                  >See all
                </span></a
              >
            </h2>
            <div>
              <button
                class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"
              >
              </button>
              <button
                class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"
              >
              </button>
            </div>
          </div>
          <div
            id="scrollContainer"
            class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
          >
            <div  v-for="course in unenrolledCourses" :key="course.ID"
              class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg"
            >
            <div>
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      {{course.name}}
                    </h3>
                    <h2 class="py-2 uppercase tracking-widest text-xs">No .of Students: 0</h2>
                  </div>
                  <div class="text-lg">
                    <p class="overflow-hidden">
                      {{course.description}}
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded float-right" @click="Enroll(course.name)">Enroll</button>
                  </div>
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</div>

</template>
<script>
// @ is an alias to /src
import { getAllCourses,enroll } from '../client'
export default {
  // <div v-for="course in courses" :key="course.ID"  class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  name: 'Home',
  data() {
    return {
      courses:[],
      error:'',
    }
  },
  mounted() {
    this.getCourses()
    
  },
  computed: {
  enrolledCourses() {
    let enrolledcoures = this.courses
    
    enrolledcoures = this.courses.filter((item) => {
      return (item.StudentsEnrolled != null )
    })

    console.log("ok",enrolledcoures)
    
    return enrolledcoures;
  },
  unenrolledCourses() {
    let unenrolledcoures = this.courses
    
    unenrolledcoures = this.courses.filter((item) => {
      return (item.StudentsEnrolled == null )
    })

    console.log("ok",unenrolledcoures)
    
    return unenrolledcoures;
  }
},
  methods: {
    getCourses(){
      getAllCourses()
      .then(response =>{
            console.log("Success",response)
            
            this.courses = response.data
            this.enrolledcoures = this.enrolledCourses
            this.unenrolledcoures = this.unenrolledCourses
            console.log("mf",this.enrolledcoures,this.unenrolledcoures)
            this.successmessage="Course creation successful!"
            setTimeout(() => this.successmessage = '', 5000)
            this.getcourse(this.id)
      }).catch(err =>{
              this.error = err.response.data.error
              setTimeout(() => this.error = '', 5000)
      })
    },
    Enroll(coursetitle){
      username
      const user = localStorage.getItem('user')
      var entry = JSON.parse(user);
      var username = entry.user.Username
      console.log("mzee",entry.user.Username)
      console.log("wee",username)
      enroll(coursetitle,username).then(response =>{
        console.log("success",response)
      }).catch(err =>{
        console.log(err)
      })
    }
  },
}
</script>
