<script>
export default{}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Tasks App</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" to="/" replace="true">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/add" replace="true">Add task</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" @click.prevent="$emit('edit')">Edit Task</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" @click.prevent="$emit('delete')">Delete Task</a>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>
