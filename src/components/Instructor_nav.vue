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
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 py-0.5 " viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
                            </svg>
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
                    <span class="flex items-center mb-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 py-0.5 " viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
                    </svg>
                    Elearning</span>
                    </router-link>
                </div>
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
                    </router-link>
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
import Pmenu from "./Menu.vue"
import{TransitionRoot,TransitionChild,Dialog,DialogOverlay} from '@headlessui/vue'
export default {
    components:{TransitionRoot,TransitionChild,Dialog,DialogOverlay,Pmenu},
    data() {
        return {
            sidebarOpened:false,
        }
    },
}
</script>