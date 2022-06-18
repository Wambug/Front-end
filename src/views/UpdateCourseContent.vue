<template>
    <div class="py-20  h-screen fixed inset-0 bg-gray-600 bg-opacity-50 px-2">
       <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden py-2 md:max-w-lg"> 
          <h3 class="font-bold">{{content.Subsection_Title}}</h3>
            <input type="text" @keyup.enter="updatesubsection"  v-model="content.Subsection_Title" class="h-12 px-3 w-full border-gray-200 border rounded focus:outline-none focus:border-gray-300">
          </div>
          <br>
          <div v-if="content.SubContent" class="max-w-md mx-auto bg-white rounded-lg overflow-hidden py-2 md:max-w-lg">
           <video width="800" height="720" ref="videoPlayer">
                        <source v-if="content.SubContent"
                        :src="content.SubContent"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
          </video>
                      <div>
                        <button class="rounded bg-gray-500 px-2 mr-2" @click="play">play</button>
                        <button class="rounded bg-gray-500 px-2 mr-2" @click="pause">pause</button>
                        <button class="rounded bg-gray-500 px-2 mr-2" @click="stop">stop</button>
                        <button class="rounded bg-gray-500 px-2 mr-2" @click="setSpeed(0.5)">0.5x</button>
                        <button  class="rounded bg-gray-500 px-2 mr-2" @click="setSpeed(1)">1x</button>
                        <button class="rounded bg-gray-500 px-2 mr-2" @click="setSpeed(1.5)">1.5x</button>
                        <button class="rounded bg-gray-500 px-2 mr-2" @click="setSpeed(2)">2x</button>
                      </div>
            </div>
                
          <br>
      <form @submit.prevent="uploadvideo"  enctype="multipart/form-data">
            <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
                <div class="md:flex">
                    <div class="w-full">
                      <div class="p-4 border-b-2">
                        <span class="text-lg font-bold text-gray-600">Add documents</span>
                      </div>
                      <div class="p-3">
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
                                </div> 
                                <input type="file" @change="selectFile" ref="file" accept=" video/*" class="h-full w-full opacity-0" >
                                <label for="file" @change="selectFile"></label>
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
          </form>
        </div>
</template>

<script>
import axios from 'axios'
import {updateSubsection,getContent} from '../client/index'
export default {
    data() {
        return {
            coursename: this.$route.params.name,
            sectiontitle:this.$route.params.sectiontitle,
            subsectionid:this.$route.params.contentid,
            subsectiontitle:'',
            file:'',
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
           if (!this.content.Subsection_Title){
                console.log("error")
            }else{
                  coursename = this.coursename
                  sectiontitle = this.sectiontitle
                  subsectionid = this.subsectionid
                  updateSubsection(coursename,sectiontitle ,subsectionid,this.content.Subsection_Title).
                  then(response => {
                      this.content = response.data
                      this.getcontent()
                      
                      console.log(response.data)
              })
            }
        },
        async uploadvideo(coursename,sectiontitle ,subsectionid){
          coursename = this.coursename
          sectiontitle = this.sectiontitle
          subsectionid = this.subsectionid
          //subsectiontitle = this.content.Subsection_Title
          console.log(this.file)
          const formdata = new FormData();
          formdata.append('file',this.file)
          try{
          await axios.post('/upload/'+coursename+'/'+sectiontitle +'/'+subsectionid,formdata);
          this.getcontent()
          }catch(err){
            console.log(err)
          }
        
            
        },
        getcontent(){
            getContent(this.coursename,this.subsectionid).
            then(response => {
                this.content = response.data
                console.log(response.data)
            })
        },
        selectFile(){
          this.file = this.$refs.file.files[0];
        },
         play() {
      this.$refs.videoPlayer.play();
    },
    pause() {
      this.$refs.videoPlayer.pause();
    },
    stop() {
      const { videoPlayer } = this.$refs;
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    },
    setSpeed(speed) {
      this.$refs.videoPlayer.playbackRate = speed;
    },

    },
} 
</script>