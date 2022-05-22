<template>
    <div class="py-20  h-screen fixed inset-0 bg-gray-600 bg-opacity-50 px-2">
            <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
                <div class="md:flex">
                    <div class="w-full">
                      <div class="p-4 border-b-2">
                        <span class="text-lg font-bold text-gray-600">Add documents</span>
                      </div>
                      <div class="p-3">
                        <div class="mb-2"> 
                            <h3 class="font-bold">{{content.Subsection_Title}}</h3>
                          <input type="text" @keyup.enter="updatesubsection"  v-model="content.Subsection_Title" class="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300"> 
                        </div>
                        <div class="mb-2"> 
                          <span>Attachments</span>
                            <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                                <div class="absolute">
                                    <div class="flex flex-col items-center "> 
                                      <i class="fa fa-cloud-upload fa-3x text-gray-200"></i> 
                                      <span class="block text-gray-400 font-normal">Attach you files here</span> 
                                      <span class="block text-gray-400 font-normal">or</span>
                                    
                                       <span class="block text-blue-400 font-normal">Browse files</span>
                                    
                                    </div>
                                </div> <input type="file" class="h-full w-full opacity-0" name="">
                            </div>
                            <div class="flex justify-between items-center text-gray-400">
                              <span>Accepted file type:.mp4 only</span>
                              <span class="flex items-center "><i class="fa fa-lock mr-1"></i> secure</span>
                            </div>
                        </div>
                        <div class="mt-3 text-center pb-3">
                          <button class="w-full h-12 text-lg  bg-blue-600 rounded text-white hover:bg-blue-700">Create</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {updateSubsection,getContent} from '../client/index'
export default {
    data() {
        return {
            coursename: this.$route.params.name,
            sectiontitle:this.$route.params.sectiontitle,
            subsectionid:this.$route.params.contentid,
            subsectiontitle:'',
            content: {},
        }
    },
    mounted() {
        console.log(this.coursename,this.sectiontitle,this.subsectionid)
        this.getcontent()
    },
    methods: {
        ////courses/:name/:sectiontitle/:contentid
        updatesubsection(coursename,sectiontitle ,subsectionid){
            coursename = this.coursename
            sectiontitle = this.sectiontitle
            subsectionid = this.subsectionid
            updateSubsection(coursename,sectiontitle ,subsectionid,this.content.Subsection_Title).
            then(response => {
                this.content = response.data
                this.getcontent()
                
                console.log(response.data)
        })
        },
        getcontent(){
            getContent(this.coursename,this.subsectionid).
            then(response => {
                this.content = response.data
                console.log(response.data)
            })
        }
    },
} 
</script>