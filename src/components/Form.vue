<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name:'Form',
    components: { Navbar },
    props:{
        t: {
            require: true,
            default: '',
        },
        d: {
            require: true,
            default: '',
        },
        s: {
            require: true,
            default: 0,
        }
    },
    data() {
        return {
            titre: this.t,
            description: this.d,
            sal: this.s,
            show_error: false,
            
        }
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
        <button type="button" @click="$emit('add', titre, description, sal)" class="float-end btn btn-primary">Post</button>
    </div>
</template>
