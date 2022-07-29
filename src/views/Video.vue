<template>
    <div>
       <br>
        <br>
        <br>
        <div>
            <div class="bg-gray-600 md:w-3/4  text-xs  group-hover:text-white text-gray-400 uppercase tracking-widest">
            <h3>{{content.Subsection_Title}}</h3>
            <br>
            <div  v-if="content.SubContent"  class="flex">
            <video class=" aspect-auto" muted controls 
            :poster="content.Thumbnail"
                width="800" height="720" data-setup="{}">
                <source v-if="content.SubContent"
                :src="content.SubContent"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
                </video>
                <div>
                    <h3>fala</h3>
                </div>
            </div>
            <hr>
            </div>
        </div>
        
            
    </div>
</template>
<script>
//import axios from 'axios'
import {getContent} from '../client/index'
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
        getcontent(){
            getContent(this.coursename,this.subsectionid).
            then(response => {
                this.content = response.data
                console.log(response.data)
            })
        },
    },
} 
</script>