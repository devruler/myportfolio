<template>
<div>
    <div class="container mywork mb-5"  id="projects">
        <h3 class="mb-5 text-center">My Recent Work</h3>
        <div class="row">
            <div class="col-12 col-md-4 mb-3" v-for="(work,index) in projects" :key="index" @click="selected = work">
                <div class="project rounded shadow-sm" style="cursor: pointer" @mouseover="showDetails = index" @mouseleave="showDetails = null">
                    <img :src="work.img" class="w-100 shadow-sm " alt="project" :class="{'active': showDetails == index}">
                    <div class="details" v-show="showDetails == index">
                        <div class="text-center text-white d-flex flex-column">
                            <h4 class="title mb-3">{{work.title}}</h4>
                            <!-- <p class="description mb-3">{{work.description}}</p> -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div :class="['overlay-project',{'show-project': Object.keys(selected).length > 0}]">
        <i class="fas fa-times closebtn text-danger"  @click="selected = []"></i>
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-12 col-md-6 h-100 py-5 d-flex justify-content-center">
                    <img :src="selected.img" class="h-100 shadow" alt="projects" v-show="selected.img">
                </div>
                <div class="col-12 col-md-6 py-5 d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <h1>{{selected.title}}</h1>
                        <p>{{selected.description}}</p>
                        <p v-show="selected.frameworks">Technologies: <span v-for="(framework, index) in selected.frameworks" :key="index">{{index + 1 === selected.frameworks.length ? framework : framework + ', '}}</span></p>
                        <a class="btn btn-danger btn-sm" :href="selected.github" v-show="selected.github" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import firebase from "@/firebaseConfig"
const db = firebase.firestore()

export default {
    data() {
        return {
            projects: [],
            showDetails: null,
            selected: []
        }
    },
    methods:{
        getProjects(){
            db.collection("projects")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                    this.projects.push({
                        id: doc.id,
                        title: doc.data().title,
                        description: doc.data().description,
                        img: doc.data().img,
                        link: doc.data().link,
                        github: doc.data().github,
                        frameworks: doc.data().frameworks,
                        });
                        // console.log(doc.id, " => ", doc.data());
                    });
                    return this.projects
                })
                .catch((error) => {
                console.log("Error getting documents: ", error);
                });
        }
    },
    mounted(){
        this.getProjects()
    }
}
</script>

<style scoped>
.mywork {
    padding-top: 50px;
    padding-bottom: 50px;
}

.project {
    height: 400px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.9)
}

.project img {
    position: relative;
    transition: .3s ease;
    object-fit: cover;

}

.check {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.active {
    opacity: 0;
}

.details div:nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


/* Overlay */
.overlay-project{
    position: fixed;
    width: 0%;
    height: 100%;
    z-index: 9999;
    background-color: rgb(51,51,51); /* Black fallback color */
    background-color: rgba(0, 0, 0, 0.9); /* Black w/opacity */
    top:0;
    left: 0;
    color:#fff;
    transition: .5s;
    overflow: hidden;
}

.show-project{
    width: 100%!important
    /* height:100%!important */
}

/* Position the close button (top right corner) */
.closebtn {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 999;
    cursor: pointer;
    font-size: 30px !important; /* Override the font-size specified earlier (36px) for all navigation links */
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .closebtn {
    font-size: 20px !important;
    top: 15px;
    right: 35px;
  }
}
</style>
