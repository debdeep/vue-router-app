<template>
  <h2>Employees Details:</h2>
  <div class="employees" v-if="employeeListResponse.length > 1">
    <div class="card" v-for="employee in employeeList" :key="employee.id">
      <img :src="employee.image" class="card-img-top" :alt="employee.name" />
      <div class="card-body">
        <h5 class="card-title">{{ employee.name }}</h5>
        <div class="card-text">
          <p><strong>DOB:</strong> {{ employee.dob }}</p>
          <p><strong>Age:</strong> {{ employee.age }}</p>
          <p><strong>Gender:</strong> {{ employee.gender }}</p>
          <p><strong>Address:</strong> {{ employee.address }}</p>
          <p><strong>Email:</strong> {{ employee.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed, reactive } from "vue";

let employeeListResponse = ref([]);

onMounted(async () => {
  let response = await axios.get("https://randomuser.me/api/?results=5&nat=us");
  employeeListResponse.value = response.data.results;
  console.log(employeeListResponse.value);
});

const employeeList = computed(() => {
  return employeeListResponse?.value.map((employee) => ({
    id: employee.login.uuid,
    name: `${employee.name.first} ${employee.name.last}`,
    dob: employee.dob.date?.split("T")[0],
    age: employee.dob.age,
    gender: employee.gender,
    email: employee.email,
    address: `${employee.location.street.number}, ${employee.location.street.name}, ${employee.location.postcode}, ${employee.location.state}, ${employee.location.country}`,
    image: employee.picture.large
      ? employee.picture.large
      : employee.picture.medium,
  }));
});
</script>
//want side by side card
<style scoped>
.employees {
  display: flex;
  flex-wrap: wrap; /* allows wrapping to next line */
  gap: 1rem; /* spacing between cards */
  justify-content: center; /* center align cards */
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background: rgb(200, 225, 241);
}

.card {
  flex: 1 1 250px; /* flexible width, min 250px */
  max-width: 18rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
.card img {
  width: 100%; /* fill card width */
  height: 200px; /* fixed height for consistency */
  object-fit: cover; /* crop/scale nicely */
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
@media (max-width: 768px) {
  .card img {
    height: 150px; /* smaller height on tablets/mobiles */
  }
}

@media (max-width: 480px) {
  .card img {
    height: 120px; /* even smaller on phones */
  }
}
</style>