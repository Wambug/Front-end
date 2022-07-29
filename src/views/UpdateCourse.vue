<template>
<div>
    <div class="mt-10p px-4 py-5 border-gray-900  sm:mt-0">
        <div  class="md:grid md:grid-cols-3 md:gap-6">
            <div   class="mt-5 md:mt-0 md:col-span-2">
                <form @submit.prevent="updatecourse">
                <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-4">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Course Title:{{course.name}}</label>
                        <input   v-model="course.name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 p-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <label for="last-name" class="block text-sm font-medium text-gray-700">Description</label>
                        <textarea v-model="course.description" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 p-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                        <label for="email-address" class="block text-sm font-medium text-gray-700">Course objectives</label>
                        <textarea type="text" name="email-address" id="email-address" autocomplete="email" class="p-2 mb-6 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                        <label for="country" class="block text-sm font-medium text-gray-700">Course type</label>
                        <select id="country" name="country" autocomplete="country-name" class=" p-2 mb-6 mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Development</option>
                        <option>Finance</option>
                        <option>Development</option>
                        </select>
                    </div>

                    <div class="col-span-6">
                        <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                        <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 p-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>

                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 p-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                        <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 p-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 p-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                    </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">UpdateCourse</button>
                </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    <div class="rounded border shadow-xl border-gray-300 px-4 ml-4 mt-10p w-2/3 py-5">
        <h3 class="ml-2 mt-1">Curriculum</h3>
        <hr>
        <br>
        <div class="flex ml-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 ml-16 mt-2 w-6 absolute" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <input @keyup.enter="createSection" v-model="sectiontitle" placeholder="Create a new course section" class="w-1/2  text-center ml-8 p-2  text-gray-700 border-b-2 border-gray-500 outline-none focus:bg-gray-300" type="text" name="username">
        </div>
        <br>
        <br>
        <h3 class="ml-2 mt-1">Details</h3>
        <div v-for="section in course.Section" :key="section.id"  class="ml-6 border border-gray-900">
            <h3 class="ml-3 font-bold">{{section.Title}}</h3>
            <br>
            <hr>
            <br>
            <div v-if="section.Content" class="flex ml-14 rounded w-3/4 flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table   class="min-w-full">
                        <thead class="bg-gray-400 border-b">
                            <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Subsection Title
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            </th>
                            </tr>
                        </thead>
                        <tbody v-for="content in section.Content" :key="content.id" >
                            <tr class="">
                            <td class="px-6 py-4 whitespace-nowrap bg-gray-100 text-sm font-medium text-gray-900">{{content.Subsection_Title}}</td>
                            <td class="px-6 py-4 whitespace-nowrap bg-gray-100 text-sm font-medium text-gray-900"> 
                                <router-link  :to="{name:'UpdateCourseContent',params:{name:course.name,sectiontitle:section.Title,contentid:content.ID}}" >
                                    <button    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                </router-link>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap bg-gray-100 text-sm font-medium text-gray-900"> 
                                
                                <button  @click="deletesubsection(course.name,section.Title,content.ID)"  class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            <button  @click="deletesection(course.name,section.ID)" href="#" class="font-medium  text-red-600 dark:text-blue-500 hover:underline">Delete</button>
            <br>
            <section>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 ml-16 mt-2 w-6 absolute" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <input required autofocus @keyup.enter="( createsubsection(course.name,section.ID))"  v-model="subsectiontitle" placeholder="Add a new Subsection " class="border-2 transition ml-16 duration-500 placeholder-gray-700 focus:placeholder-transparent border-gray-700 w-3/4 py-2 text-center text-gray-500 bg-transparent focus:outline-none ">
            </section>
            <br>
            <hr  class="border border-gray-900">
            <br>  
        </div>
    </div>

    
</div>

</template>


<script>
import {createSection,deleteSection,deleteSubsection,getCourse,createSubsection,updateCourse} from '../client/index'
export default {
    data(){
        return{
            description:'',
            sectiontitle:'',
            error:null,
            successmessage:'',
            id: this.$route.params.id,
            course:{},
            subsectiontitle:'', 
        }
    },  
    mounted() {
        this.getcourse()
        document.addEventListener("keydown", (e) => {
        // If  ESC key was pressed
        if (e.key === "enter") {
            this.showvideoform=false
            
            // or if you have created a dialog as a custom component, emit an event
            // this.$emit('closeDialog')
        }
    });
    },
    methods: {
        createSection(coursename,Section){
            coursename = this.course.name,
            Section = [{"Title":this.sectiontitle}]
            if (!this.sectiontitle){
                console.log("error")
            }else{
            createSection(coursename,Section).
            then(()  => {
                console.log("Success")
                this.successmessage="Course creation successful!"
                setTimeout(() => this.successmessage = '', 5000)
                this.sectiontitle = ''
                this.getcourse(this.id)
                
            }).catch(err => {
                this.error = err.response.data.error
                setTimeout(() => this.error = '', 5000)
            })
            }
        },
        getcourse(id){
            id = this.id
            getCourse(id).
            then(response =>{
                this.course = response.data
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            })
        },
        createsubsection(CourseName,sectionid){
            var Content = [{"Subsection_Title":this.subsectiontitle}]
            if (!this.subsectiontitle){
                console.log("error")
            }else{
            createSubsection(CourseName,sectionid,Content).
            then(()  => {
                console.log("Success")
                this.successmessage="Course creation successful!"
                setTimeout(() => this.successmessage = '', 5000)
                 this.subsectiontitle = ''
                 this.getcourse(this.id)
            }).catch(err => {
                this.error = err.response.data.error
                setTimeout(() => this.error = '', 5000)
            })
        }
        },
        updatecourse(){
                 if (!this.course.name && !this.course.description){
                console.log("error")
                }else{
                    updateCourse(this.id,this.course.name,this.course.description).
                    then(response =>{
                        console.log("Success",response)
                        this.successmessage="Course creation successful!"
                        setTimeout(() => this.successmessage = '', 5000)
                        this.getcourse(this.id)
                    }).catch(err =>{
                        this.error = err.response.data.error
                        setTimeout(() => this.error = '', 5000)
                    })
                }
        },
        deletesection(coursename,sectionid){
            deleteSection(coursename,sectionid).
            then(response =>{
                console.log("Success",response)
                this.successmessage="Course creation successful!"
                setTimeout(() => this.successmessage = '', 5000)
                this.getcourse(this.id)
            }).catch(err =>{
                this.error = err.response.data.error
                setTimeout(() => this.error = '', 5000)
            })
        },
        deletesubsection(coursename,sectiontitle,subsectionid){
            deleteSubsection(coursename,sectiontitle,subsectionid).
             then(response =>{
                console.log("Success",response)
                this.successmessage="Course creation successful!"
                setTimeout(() => this.successmessage = '', 5000)
                this.getcourse(this.id)
            }).catch(err =>{
                this.error = err.response.data.error
                setTimeout(() => this.error = '', 5000)
            })
        }
    },
}
</script>