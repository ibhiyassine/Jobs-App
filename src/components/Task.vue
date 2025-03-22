<script>
export default {
    props: {
        id: Number,
        titre: String,
        description: String,
        salaire: Number,
        date_de_creation: String,
        isDeletable: Boolean,
        editable: Boolean,
    },
    methods: {
        moredetails() {
            this.focus = !this.focus
        },
    },
    computed: {
        info() {
            if (this.focus) {
                return 'Less Info'
            } else {
                return 'More Info'
            }
        },
        show_desc() {
            if (this.focus) {
                return this.description;
            } else {
                return this.description.substring(0, 50) + '...';
            }
        }
    },
    data() {
        return {
            focus: false,
        }
    },
}
</script>

<template>
    <div :class="focus ? 'fullsize' : 'normal'">
        <div class="card" :class="focus ? 'biggercard' : 'normalcard'">
            <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ titre }}</h5>
                <img @click="$emit('remove', id)" src="../assets/trash.png" style="width: 20px; height: 20px;" :class="isDeletable ? 'show' : 'none'">
            </div>
                <h6 class="card-title">{{ salaire }}</h6>
                <p class="card-text">
                    {{ date_de_creation }}
                </p>
                <p class="card-text flex-fill">{{ show_desc }}</p>
                <div class="d-flex justify-content-end gap-3 align-items-center">
                    <img @click="$emit('edit', id)" src="../assets/editing.png" style="width: 20px; height: 20px;" v-show="editable">
                    <button class="btn btn-info" @click="moredetails()">{{ info }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fullsize {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
}
.normal {
    position: inherit;
}
.biggercard {
    position: relative;
    width: 42rem;
    height: 42rem;
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    margin: auto;
}
.normalcard {
    width: 18rem;
    height: 18rem;
}
.show{
    display: block;
}
.none{
    display: none;
}
.show:hover{
    cursor: pointer;
}
.none:hover{
    cursor: pointer;
}
</style>
