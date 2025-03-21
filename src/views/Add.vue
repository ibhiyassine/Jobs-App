<script>
import Navbar from '@/components/Navbar.vue'
import globals from '@/views/count.js'
export default {
    components: { Navbar },
    data() {
        return {
            id: globals.id,
            titre: '',
            description: '',
            sal: 0,
            show_error: false,
        }
    },
    methods: {
        add_job() {
            console.log("here")
            if (this.sal <= 0 || this.titre === '') {
                this.show_error = true
                return
            } else {
                fetch('http://localhost:3000/jobs', {
                    method: 'POST',
                    body: JSON.stringify({
                        titre: this.titre,
                        salaire: this.sal,
                        description: this.description,
                        date_de_creation: new Date().toISOString().split('T')[0],
                        id: this.id,
                    }),
                }).then((response) => {
                    if(response.ok){
                        globals.id = (Number.parseInt(globals.id) + 1).toString();
                        console.log(this.id);
                        console.log("Job added succesfully")
                        this.$router.push('/');
                    }
                    else{
                        console.log("something went wrong")
                    }
                })
            }
        },
    },
}
</script>

<template>
    <Navbar />
    <div class="fs-1 fw-bold text-center m-5">Post a job offer!</div>
    <div id="form">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
                Job Title (*)
                <span class="text-danger" :class="{'d-none': !show_error}"> A title is required </span>
            </label>
            <input
                v-model="titre"
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Full-Stack Developer"
            />
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
                Salary (*)
                <span class="text-danger" :class="{'d-none': !show_error}"> A positive salary is required </span>
            </label>
            <input v-model="sal" type="number" class="form-control" id="exampleFormControlInput1" />
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea
                class="form-control"
                v-model="description"
                id="exampleFormControlTextarea1"
                rows="3"
            ></textarea>
        </div>
        <button type="button" @click="add_job()" class="float-end btn btn-primary">Post</button>
    </div>
</template>
