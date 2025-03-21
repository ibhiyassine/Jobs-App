<script>
export default {
    data() {
        return {
            input: '',
            lower_bound: '',
            upper_bound: '',
            filter: 0,
        }
    },
}
</script>

<template>
    <div class="bd-highlight border filter p-4">
        <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                v-model="input"
                @keyup="$emit('search', input)"
            />
            <span class="input-group-text" id="basic-addon2">Search</span>
        </div>
        <div class="d-flex flex-row mb-3">
            <input type="text" placeholder="min" v-model="lower_bound" class="form-control" 
            @change="$emit('low', lower_bound)"/>
            <span class="input-group-text fs-5" style="border: 0; background-color: transparent"
                >≤ Price ≤</span
            >
            <input type="text" v-model="upper_bound" placeholder="max" class="form-control" 
            @change="$emit('high', upper_bound)"/>
        </div>
        <div id="trier">
            <select v-model="filter" class="form-select" @change="$emit('pricefilter', filter)">
                <option value="0">Pas de filtres</option>
                <option value="1">Trier par ordre de salaire croissant</option>
                <option value="2">Trier par ordre de salaire décroissant</option>
            </select>
        </div>
    </div>
</template>

<style scoped></style>
