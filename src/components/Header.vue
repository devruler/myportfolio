<template>
<div class="header-container mt-5 pt-3">



    <div class="container ">
        
        <div class="row header">
            <div class="col d-flex flex-column justify-content-center">
                <transition name="zoomUp">
                    <h1>Hello, my name is <span id="name">Reda Ifis</span></h1>
                </transition>
                <br>
                <p>I am a <vue-typer :text='iam' erase-style='backspace' :erase-delay='70'></vue-typer>
                </p>
            </div>
        </div>

    </div>

</div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            iam: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
        }
    }
}
</script>

<style scoped>

.header {
    height: 500px;
    text-align: center;
}

#name {
    color: red;
}

</style>
