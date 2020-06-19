<template>
<div class="navbar-holder fixed-top bg-white shadow-sm">

    <!-- The overlay Menu -->
    <div id="myNav" :class="['overlay h-100',{'show-menu': showMenu}]">

        <!-- Button to close the overlay navigation -->
        <i class="fas fa-times closebtn text-danger" @click="showMenu = !showMenu"></i>

        <!-- Overlay content -->
        <div class="overlay-content">
            <a href="#projects" @click="showMenu = !showMenu">My Work</a>
            <a href="#education" @click="showMenu = !showMenu">About X Education</a>
            <a href="#skills" @click="showMenu = !showMenu">Skills</a>
            <a href="#contact" @click="showMenu = !showMenu">Contact</a>
            
        </div>
        

    </div>

    <div class="container">

        <nav class="navbar navbar-expand-lg navbar-light px-0 d-flex justify-content-between">

            <a href="#"><span class="nav-brand text-dark"><strong class="text-danger">R</strong>e</span></a>

            <div>
                <!-- <button type="button" class="btn btn-light menu-toggler text-danger btn-sm border-none" style="outline:none;focus:none" @click="showMenu = !showMenu"> -->
                <i class="fas fa-bars text-danger" style="cursor:pointer;font-size:24px" @click="showMenu = !showMenu"></i>
                <!-- </button> -->
                <!-- <div :class="['menu shadow-sm bg-white',showMenu ? 'open': '']" >
                    <ul class="text-right px-4 py-3">
                        <li class="py-2"><a href="#projects" class="text-dark">My Work <i class="fas fa-angle-left ml-3 text-danger"></i></a></li>
                        <li class="py-2"><a href="#education" class="text-dark">About X Education <i class="fas fa-angle-left ml-3 text-danger"></i></a></li>
                        <li class="py-2"><a href="#skills" class="text-dark">Skills <i class="fas fa-angle-left ml-3 text-danger"></i></a></li>
                        <li class="pt-2"><a href="#contact" class="text-dark">Contact <i class="fas fa-angle-left ml-3 text-danger"></i></a></li>
                    </ul>
                </div> -->
            </div>

        </nav>
    </div>

</div>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data() {
        return {
            logoToggler: false,
            window: {
                width: 0,
                height: 0
            },
            showMenu: false,
        }
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>

<style scoped>
.navbar-collapse {
    width: 300px
}

.nav-brand {
    text-decoration: none;
    font-size: 24px
}

.nav-item a {
    position: relative;
    color: #555;
}

.nav-item a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '.';
    color: transparent;
    background: red;
    height: 1px;
}

.nav-item a:hover:after {
    width: 100%;
    transition: all .5s;
}

a,
a:hover {
    text-decoration: none;
}

/* ----- Menu ------ */

.menu-toggler {
    position: relative;
    background: transparent;
    outline: none;
    box-shadow: none;
}

.menu {
    position: absolute;
    top: 80px;
    right: 0;
    z-index: 10;
    opacity: 0;
    transition: .2s ease;
}

.open {
    opacity: 1;
    transition: .2s ease;

}

.menu ul {
    list-style: none;
}

li a {
    text-decoration: none;
    /* color: #dc3545 */
}



/* Overlay menu */
/* The Overlay (background) */
.overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */
    width: 0%;
    height: 100%;
    position: fixed;
    /* Stay in place */
    z-index: 999999;
    /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(51, 51, 51);
    /* Black fallback color */
    background-color: rgba(0, 0, 0, 0.9);
    /* Black w/opacity */
    overflow-y: hidden;
    transition: 0.5s;
}

.show-menu {
    width: 100% !important
}

/* Position the content inside the overlay */
.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    /* Centered text/links */
    margin-top: 30px;
    /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
    padding: 15px 8px;
    text-decoration: none;
    font-size: 30px;
    color: #fff !important;
    display: block;
    /* Display block instead of inline */
    transition: 0.3s;
    /* Transition effects on hover (color) */
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
    color: #999 !important;
}

/* Position the close button (top right corner) */
.closebtn {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    font-size: 30px !important;
    z-index: 999;
    /* Override the font-size specified earlier (36px) for all navigation links */
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
    .overlay {
        overflow-y: auto;
    }

    .overlay a {
        font-size: 13px!important
    }

    .closebtn {
        font-size: 20px !important;
        top: 15px;
        right: 35px;
    }
}
</style>
