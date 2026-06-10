<template>
    <div class="card" v-for="employee in employeeList" :key="employee.id" style="width: 18rem;">
        <img :src="employee.image" class="card-img-top" :alt="employee.name" />
        <div class="card-body">
            <h3 class="card-title">{{ employee.name }}</h3>
            <div class="card-text">
                <p><strong>{{ EMPLOYEE.DOB }}</strong> {{ employee.dob }}</p>
                <p><strong>{{ EMPLOYEE.AGE }}</strong> {{ employee.age }}</p>
                <p><strong>{{ EMPLOYEE.GENDER }}</strong> {{ genderFormat(employee.gender) }}</p>
                <p><strong>{{ EMPLOYEE.ADDRESS }}</strong> {{ employee.address }}</p>
                <p><strong>{{ EMPLOYEE.EMAIL }}</strong> {{ employee.email }}</p>
            </div>
            <a :href="`mailto:${employee.email}`" class="btn btn-primary"
                @click="() => selectedEmployee(employee)">Contact Employee</a>
        </div>
    </div>
</template>

<script setup>
import { EMPLOYEE } from '../utils/constants';


const emit = defineEmits(['employeeSelected']);
const props = defineProps({
    employeeList: {
        type: Array,
        required: true
    }
});

const genderFormat = (gender) => {
    if (gender) {
        return gender.charAt(0).toLocaleUpperCase() + gender.slice(1);
    }
    return "NA";
}
const selectedEmployee = (employee) => {
    emit('employeeSelected', employee);
}
</script>

<style scoped>
.card {
    flex: 1 1 250px;
    max-width: 18rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.card img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
</style>
