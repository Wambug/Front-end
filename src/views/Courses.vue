<template>
    <div class="overflow-hidden">
        <br>
        <br>
        <router-link :to="{name: 'CreateCourse'}">
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Create Course
        </button>
        </router-link>
    <div v-if="courses"  class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
            <table class="min-w-full text-center">
            <thead class="border-b bg-gray-800">
                    <tr>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Course ID
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Title
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        Price
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        No.of Students
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                        
                    </th>
                    </tr>
            </thead >
            <tbody>
                <tr  v-for="course in courses" :key="course.ID" class="bg-white border-b">
                <td  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{course.ID}}</td>
                <td  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{course.name}}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                </td>
                <td v-if="course.StudentsEnrolled"   class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {{course.StudentsEnrolled.length}}
                </td>
                <td v-else  class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    0
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <router-link :to="{name:'UpdateCourse',params:{id:course.ID}}">
                        <button class="bg-green-600 border-b-4 py-2 px-4 rounded">Edit</button>
                    </router-link>
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button class="bg-red-600 py-2 border-b-4 px-4 rounded">Delete</button>
                </td>
                </tr>
            </tbody>
            </table>
            <tailwindpagination
            :current="currentPage"
            :total="total"
            :per-page="records"
            @page-changed="pageChange($event)"
            ></tailwindpagination>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import tailwindpagination from '@ocrv/vue-tailwind-pagination'
import '@ocrv/vue-tailwind-pagination/dist/style.css'
import {deleteCourse,getCourses,gettotalnoCoursesbyUser} from '../client/index'
export default {
    components:{tailwindpagination},
    data() {
        return {
            courses:[],
            currentPage:1,
            total:0,
            records:10
        }

    },
    mounted() {
       this.pageChange(this.currentPage)
       this.totalcourses()
    },
    methods: {
                getcourses(page_id,page_size) {
                getCourses(page_id, page_size).
                then(response  => {
                    console.log(response.data)
                    this.courses = response.data
                    console.log("Success",this.courses)
                    this.successmessage="Course creation successful!"
                    setTimeout(() => this.successmessage = '', 5000)
                    console.log(localStorage.getItem('user'))
                    
                    this.totalcourses("ok")
                    return response.data
                }).catch(err => {
                    this.error = err.response.data.error
                    setTimeout(() => this.error = '', 5000)
                })
                },
                deletecourse(id) {
                    id=1,
                    deleteCourse(id).
                    then(()  => {
                        console.log("Success")
                        this.successmessage="Course deletion successful!"
                        setTimeout(() => this.successmessage = '', 5000)
                        
                    }).catch(err => {
                        this.error = err.response.data.error
                        setTimeout(() => this.error = '', 5000)
                    })
                },
                pageChange(pageNumber){
                    this.currentPage = pageNumber
                    this.getcourses(this.currentPage,10)
                },
                totalcourses(){
                    const user = localStorage.getItem('user')
                    var entry = JSON.parse(user);
                    console.log("mzee",entry.user.Username)
                gettotalnoCoursesbyUser(entry.user.Username).
                then(response => {
                    this.total = response.data
                }).catch(err => {
                    this.error = err.response.data.error
                    setTimeout(() => this.error = '', 5000)
                })
                }
                
    },
            
}
</script>