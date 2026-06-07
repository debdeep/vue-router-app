<template>
    <div class="card" v-for="employee in employeeList" :key="employee.id" style="width: 18rem;">
        <img :src="employee.image" class="card-img-top" :alt="employee.name" />
        <div class="card-body">
            <h5 class="card-title">{{ employee.name }}</h5>
            <div class="card-text">
                <p><strong>{{ EMPLOYEE.DOB }}</strong> {{ employee.dob }}</p>
                <p><strong>{{ EMPLOYEE.AGE }}</strong> {{ employee.age }}</p>
                <p><strong>{{ EMPLOYEE.GENDER }}</strong> {{ genderFormat(employee.gender) }}</p>
                <p><strong>{{ EMPLOYEE.ADDRESS }}</strong> {{ employee.address }}</p>
                <p><strong>{{ EMPLOYEE.EMAIL }}</strong> {{ employee.email }}</p>
            </div>
            <a :href="`mailto:${employee.email}`" class="btn btn-primary">Contact Employee</a>
        </div>
    </div>
</template>

<script setup>
import { EMPLOYEE } from '../utils/constants';

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
</script>