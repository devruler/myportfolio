<template>
<div class="skills"  id="skills">
    <div class="container ">
        <h3 class="mb-4">My skills</h3>

        <div class="row justify-content-around">

            <div class="col-12 col-md-6" >
                <div class="row" v-for="skill in skills" :key="skill.id">
                    <div class="col-12" v-if="skill.type === 'development'">
                        <p class="small">{{skill.name}}</p>
                        <progress-bar bar-color="#dc3545" :val="skill.percentage" size="large" style="margin: 5px 0 30px 0;max-width:80%"></progress-bar>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6" >
                <div class="row" v-for="skill in skills" :key="skill.id">
                    <div class="col-12" v-if="skill.type === 'design'">
                        <p class="small">{{skill.name}}</p>
                        <progress-bar bar-color="#dc3545" :val="skill.percentage" size="large" style="margin: 5px 0 30px 0;max-width:80%"></progress-bar>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'
import firebase from "../firebaseConfig"
const db = firebase.firestore()

export default {
    name: 'HeaderComponent',
    components: {
        ProgressBar
    },
    data() {
        return {
            skills: [],
        }
    },
    methods: {
        getSkills() {
            db.collection("skills")
                .orderBy("percentage","desc")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.skills.push({
                            id: doc.id,
                            name: doc.data().name,
                            percentage: doc.data().percentage,
                            type: doc.data().type,
                        });
                        // console.log(doc.id, " => ", doc.data());
                    });
                    return this.skills
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }
    },
    mounted() {
        this.getSkills()
    }
}
</script>

<style scoped>
.skills {
    height: 100%;
    padding: 50px 0px;
}

h3 {
    line-height: 2.5;
}
</style>
