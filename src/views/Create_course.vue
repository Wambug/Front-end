<template>
    <div class="mt-10p px-4 py-5 border-gray-900  sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-2">
            <form @submit.prevent="createcourse">
            <p class="text-red-700"> {{ error }}</p>
            <p class="text-blue-700"> {{ successmessage }}</p> 
                <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-4">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Course Name</label>
                        <input v-model="coursename" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 p-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                        <label for="last-name" class="block text-sm font-medium text-gray-700">Description</label>
                        <textarea v-model="description" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 p-2 mb-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
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
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">CreateCourse</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>


<script>
import {createCourse,createSection} from '../client/index'
export default {
    data(){
        return{
            coursename:'',
            description:'',
            error:null,
            successmessage:'',
        }
    },  
    methods: {
        createcourse(coursename, coursedescrition) {
            coursename = this.coursename,
            coursedescrition = this.description
            createCourse(coursename, coursedescrition).
            then(response  => {
                console.log("Success")
                console.log(response.data)
                this.successmessage="Course creation successful!"
                setTimeout(() => this.successmessage = '', 10000)
                this.$router.push({ name:'Courses'})

            }).catch(err => {
                this.error = err.response.data.error
                setTimeout(() => this.error = '', 5000)
            })
        },
        createSection(coursename,Section){
            coursename = "Woo",
            Section = [{"Title":"ok"}],
            createSection(coursename,Section).
            then(()  => {
                console.log("Success")
                this.successmessage="Course creation successful!"
                setTimeout(() => this.successmessage = '', 5000)
            }).catch(err => {
                this.error = err.response.data.error
                setTimeout(() => this.error = '', 5000)
            })
        }
    },
}
</script>