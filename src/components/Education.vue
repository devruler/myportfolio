<template>
<div class="myself" id="education">
    <div class="container ">
        <div class="row">
            <div class="col-12 col-md-6" v-if="profile.length > 0">

                <h3 class="mb-5">About me</h3>
                <p v-for="line in profile[0].about" :key="line.id">{{line}}</p>
                <!-- <p>I am very passionate about creating responsive and adaptable web applications and websites with new technologies.</p> -->
                <p>You can download my resume here:</p>
                <a class="btn btn-danger btn-sm mb-5" href="https://www.doyoubuzz.com/reda-ifis/cv/download">Download <i class="fas fa-cloud-download-alt"></i></a>
            </div>
            <div class="col-12 col-md-6">
                <h3 class="mb-5">Education</h3>
                <div v-for="(item,index) in education" :key="item.id">
                    <p>{{item.diploma}}</p>
                    <small>At {{item.school}}</small><br>
                    <small>{{item.duration}}</small><br>
                    <small>{{item.description}}</small>
                    <hr v-show="education.length !== index + 1">
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import firebase from "../firebaseConfig"
const db = firebase.firestore()

export default {
    data(){
        return{
            education: [],
            profile: []
        }
    },
    methods:{
        getEducation(){

            db.collection("education")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                    this.education.push({
                        id: doc.id,
                        diploma: doc.data().diploma,
                        school: doc.data().school,
                        duration: doc.data().duration,
                        description: doc.data().description,
                        });
                        // console.log(doc.id, " => ", doc.data());
                    });
                    return this.education
                })
                .catch((error) => {
                console.log("Error getting documents: ", error);
                });
        },
        getProfile(){
            db.collection("profile")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                    this.profile.push({
                        id: doc.id,
                        about: doc.data().about,
                        });
                        // console.log(doc.data().about);
                    });
                    return this.profile
                })
                .catch((error) => {
                console.log("Error getting documents: ", error);
                });
        }
    },
    mounted(){
        this.getEducation()
        this.getProfile()
    }
}
</script>

<style scoped>
.myself {
    padding: 50px 0
}

</style>
