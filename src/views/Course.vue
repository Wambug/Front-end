<template>
    <div class="flex min-h-screen">
        <TransitionRoot :show="sidebarOpened">
        <!--Mobile-->
            <Dialog as="div"  @close="sidebarOpened=false" class="fixed inset-0 z-40" >
                <TransitionChild as="template"
                enter="transition ease-in-out duration-200 transform"
                enter-from="-translate-x-full"
                enter-to="translate-x-0"
                leave="transition ease-in-out duration-200 transform"
                leave-from="translate-x-0"
                leave-to="-translate-x-full"
                >
                    <div class="flex flex-col md:hidden relative z-10 h-full w-72 bg-opacity-100   text-white bg-gray-800 border-r border-gray-200">
                        <button type="button" value="Close sidebar"
                        @click="sidebarOpened=false"
                        class="absolute px-2 top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div class="pt-8 pb-4  px-6">
                            <router-link :to="{name:'Instructor'}" class="flex px-6 py-2.5 hover:text-white items-center group" >
                            <span class="flex items-center mb-2" >
                        
                            Elearning</span>
                            </router-link>
                        </div>
                        <div class="overflow-y-auto flex-1">
                            <div class="mb-10">
                                <router-link :to="{name:'Courses'}" class="flex px-6 py-2.5 hover:text-white items-center group" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:text-white text-gray-500 mr-2 group" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <h3 class="text-xs group-hover:text-white text-gray-400 uppercase tracking-widest">Courses</h3>
                                </router-link>
                            </div>
                            <div class="mb-10">
                                <router-link :to="{name:'Perfomance'}" class="flex px-6 py-2.5 hover:text-white items-center group" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:text-white text-gray-500 mr-2 group" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>  
                                    <h3 class="text-xs group-hover:text-white text-gray-400 uppercase tracking-widest">Perfomance</h3>
                                </router-link >
                            </div>
                            <div class="mb-10">
                                <router-link :to="{name:'Communication'}" class="flex px-6 py-2.5 hover:text-white items-center group" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:text-white text-gray-500 mr-2 group" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                    <h3 class="text-xs group-hover:text-white text-gray-400 uppercase tracking-widest">Communication</h3>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </TransitionChild>
                <TransitionChild 
                enter="transition-opacity ease-linear duration-200"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="transition-opacity ease-linear duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
                as="template">
                    <DialogOverlay class="md:hidden fixed inset-0 bg-gray-600 bg-opacity-50"></DialogOverlay>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>

    <!--Desktop--> 
    <div class="hidden md:block w-64 bg-opacity-100   text-white bg-gray-800 border-r border-gray-200">
                <div class="py-4 px-6">
                    <router-link :to="{name:'Instructor'}" >
                    <span class="flex uppercase tracking-widest text-lg items-center mb-2" >
                    {{course.name}}</span>
                    </router-link>
                </div>
                <div  v-for="section in course.Section" :key="section.id" class="mb-10">

                   <router-link :to="{name:'Courses'}" class="flex px-6 py-2.5 hover:text-white items-center group" >
                        <h3 class="text-xs group-hover:text-white text-gray-400 uppercase tracking-widest">{{section.Title}}</h3>
                   </router-link>
                   <div  v-for="content in section.Content" :key="content.id" >
                     <h5 class="flex items-center px-10 py-2.5 text-gray-500" >{{content.Subsection_Title}}</h5>
                   </div>
                </div>
        </div> 
        <div class="flex-1" >
            <div class="">
                <button type="button" value="Open sidebar"
                @click="sidebarOpened = true"
                class="mr-3 px-2 py-2 md:hidden flex-shrink-0 flex items-center justify-center  w-10 h-10 rounded-full text-gray-600 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                </button>
                <Pmenu class="px-2 py-4 float-right"> </Pmenu>
                <router-link :to="{name:'Home'}" class="px-2 py-6 float-right hover:text-blue-900">Student Dashboard</router-link>
                
            </div>
             <br>
             <br>
             <br>
             <router-view/>
        </div>
    </div>
</template>


<script>
import { getCourse } from "../client"
import Pmenu from "../components/Menu.vue"
import{TransitionRoot,TransitionChild,Dialog,DialogOverlay} from '@headlessui/vue'
//import router from "../router"
export default {
    components:{TransitionRoot,TransitionChild,Dialog,DialogOverlay,Pmenu},
    data() {
        return {
            sidebarOpened:false,
            courseid: this.$route.params.id,
            course:'',
        }
    },
    mounted() {
        this.getcourse()
    },
    methods: {
        getcourse(id){
            id = this.courseid
            getCourse(id).
            then(response =>{
                this.course = response.data
                this.course = response.data
                console.log(response.data)
                console.log(this.course)
            }).catch(err => {
                console.log(err)
            })
        },
    },
}
</script>