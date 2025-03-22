<script>
import Form from '@/components/Form.vue';
import globals from '@/views/count.js'
export default {
    components: {Form},
    data(){
        return{
            id: globals.id,
        }
    },
    methods: {
            add_job(titre, description, sal) {
                console.log("here")
                if (sal <= 0 || titre === '') {
                    this.show_error = true
                    return
                } else {
                    fetch('http://localhost:3000/jobs', {
                        method: 'POST',
                        body: JSON.stringify({
                            titre: titre,
                            salaire: sal,
                            description: description,
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
    <Form @add="(titre, description, sal) => add_job(titre, description, sal)"/>
</template>