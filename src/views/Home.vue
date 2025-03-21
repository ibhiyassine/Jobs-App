<script>
import Navbar from '../components/Navbar.vue'
import Filters from '../components/Filters.vue'
import Task from '../components/Task.vue'
export default {
    name: 'Home',
    components: { Navbar, Filters, Task },
    data() {
        return {
            jobs: [],
            search_name: '',
            pricefilter: 0,
            lower_bound: '',
            higher_bound: '',
            deletable: false,
        }
    },
    computed: {
        filtered() {
            let selected = [
                ...this.jobs.filter((element) => {
                    let sal = element.salaire
                    let verdict = true
                    if (this.lower_bound) {
                        verdict &= sal >= (this.lower_bound)
                    }
                    if (this.higher_bound) {
                        verdict &= sal <= (this.higher_bound)
                    }
                    return verdict
                }),
            ]
            // Apply name filter if exists
            if (this.search_name) {
                selected = selected.filter((job) =>
                    job.titre.toLowerCase().includes(this.search_name.toLowerCase()),
                )
            }

            // Apply price filter
            if (this.pricefilter == 1) {
                selected.sort((a, b) => a.salaire - b.salaire) // Sort ascending
            } else if (this.pricefilter == -1) {
                selected.sort((a, b) => b.salaire - a.salaire) // Sort descending
            }

            return selected
        },
    },
    mounted() {
        fetch('http://localhost:3000/jobs/')
            .then((respose) => respose.json())
            .then((data) => (this.jobs = data))
    },
    methods :{
        remove(id){
            console.log("I am here")
            fetch(`http://localhost:3000/jobs/${id}`, {method: 'DELETE'})
                .then(response => {
                    if (response.ok) {
                        this.jobs = this.jobs.filter(job => job.id !== id)
                        this.$emit('delete', id)
                    }
                })
        }
    }
}
</script>

<template>
    <Navbar @delete="deletable = !deletable"/>
    <div class="d-flex p-2 flex-row">
        <Filters
            @search="(input) => (search_name = input)"
            @pricefilter="(value) => (pricefilter = value)"
            @low="(val) => (lower_bound = val)"
            @high="(val) => (higher_bound = val)"
            style="width: 25%"
        />
        <div class="d-flex p-2 flex-wrap" style="width: 75%">
            <Task v-for="element of filtered" :key="element.id" v-bind="element" :is-deletable="deletable" class="m-1" @remove="(id) => {remove(id)}"/>
        </div>
    </div>
</template>

<style scoped></style>
