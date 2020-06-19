<template>
<div class="container contact mb-5"  id="contact">
    <div class="row justify-content-center">
        <div class="col-12 col-md-6 ">
            <div class="shadow-sm p-3">
            <h3>Contact me</h3>
            <form @submit.prevent="sendEmail" v-show="success == false">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" name="user_name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" name="user_email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea class="form-control" name="message" rows="6" required></textarea>
                </div>
                <button type="submit" class="btn btn-danger btn-sm" :disabled="busy">Send</button>
            </form>

            <div class="conf-modal center success" v-show="success == true">
                <div class="d-flex flex-row align-items-center">
                    <i class="fas fa-check text-success" style="font-size:20px"></i>
                <div class="mx-2"><h4>Success!</h4></div>

                </div>
                <p>Your message has been sent! Thanks.</p>
                
            </div>

            </div>
        </div>
    </div>

    <!-- Modal -->
    
</div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data(){
        return{
            busy: false,
            success: false
        }
    },
    methods:{
        async sendEmail(e){
            this.busy = true
            await emailjs.sendForm('gmail', 'template_YDOpLkbv', e.target, 'user_H0MYvJ0Ljv11f6Vd7tLYH')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                this.success = true
            }, (error) => {
                console.log('FAILED...', error);
            });
            this.busy = false

        }
    },
    mounted(){
       
    }
}
</script>

<style scoped>
.contact{
    padding-top: 50px;
    padding-bottom: 50px
}

h3{
    line-height: 2.5;
}



</style>
