<script>
import Form from '@/components/Form.vue';
export default {
    props: ['id'],
    components: {Form},
    data(){
        return {
            job: {
                id: '132',
                titre: 'starry',
                description: 'something',
                salaire: 1000000,
                date_de_creation: '2006-03-09',
            }
        };
    },
    methods: {
        edit_job(titre, description, salaire) {
            console.log("here")
            if (salaire <= 0 || titre === '') {
                this.show_error = true
                return
            } else {
                fetch('http://localhost:3000/jobs/' + this.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        titre: titre,
                        salaire: salaire,
                        description: description,
                        date_de_creation: this.job.date_de_creation,
                        id: this.id,
                    }),
                }).then((response) => {
                    if(response.ok){
                        console.log(this.id);
                        console.log("Job modified succesfully")
                        this.$router.push('/');
                    }
                    else{
                        console.log("something went wrong")
                    }
                })
            }
        },
    },
    mounted(){
        console.log("hi");
    fetch("http://localhost:3000/jobs/" + this.id)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch job data');
            }
            return response.json();
        })
        .then((data) => {
            this.job.titre = data.titre;
            this.job.description = data.description;
            this.job.salaire = data.salaire;
            this.job.date_de_creation = data.date_de_creation;
            this.job.id = data.id;
            console.log(this.job); // Moved inside the promise chain
        })
        .catch(error => {
            console.error("Error fetching job data:", error);
        });
    }
}
</script>

<template>
    <Form :t="job.titre" :d="job.description" :s="job.salaire" @add="(titre, description, salaire) =>edit_job(titre, description, salaire)"/>
</template>