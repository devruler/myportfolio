<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>
    <HeaderComponent></HeaderComponent>

    <MyWork></MyWork>
    <hr>
    <EducationComponent></EducationComponent>
    <hr>
    <SkillsComponent></SkillsComponent>
    <hr>
    <ContactComponent></ContactComponent>
    
    <FooterComponent></FooterComponent>
    
    <!-- <router-view/> -->
  </div>
</template>

<script>
import NavbarComponent from '@/components/Navbar.vue';
import HeaderComponent from '@/components/Header.vue';
import MyWork from '@/components/MyWork.vue';
import SkillsComponent from '@/components/Skills.vue';
import EducationComponent from '@/components/Education.vue';
import ContactComponent from '@/components/Contact.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  components:{NavbarComponent, HeaderComponent, SkillsComponent,EducationComponent,ContactComponent,FooterComponent,MyWork},
  data(){
    return{

}
  },
  mounted(){

  }
}
</script>

<style>

hr{
  width: 100%;
}

/* #top{
  position: fixed;
  bottom:100px;
  right: 100px;
  font-size:24px
} */
</style>
