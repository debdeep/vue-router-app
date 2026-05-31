<template>
  <div class="search-container">
    <h1>Welcome to Employee Directory</h1>
    <input
      type="text"
      placeholder="Search By Name or Email..."
      v-model="searchQuery"
      class="search-input"
    />
  </div>
  <h2>Employees Details:</h2>

  <!-- Show cards if data exists -->
  <div class="employees" v-if="employeeList.length > 0">
    <div class="card" v-for="employee in employeeList" :key="employee.id">
      <img :src="employee.image" class="card-img-top" :alt="employee.name" />
      <div class="card-body">
        <h3 class="card-title">{{ employee.name }}</h3>
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

  <!-- Fade-in message if no data -->
  <transition v-else name="fade">
    <p class="no-data">No Records Found</p>
  </transition>
</template>


<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";

let employeeListResponse = ref([]);
const searchQuery = ref("");

onMounted(async () => {
  let response = await axios.get("https://randomuser.me/api/?results=5&nat=us");
  employeeListResponse.value = response.data.results;
});

const employeeList = computed(() => {
  let list = employeeListResponse.value.map((employee) => ({
    id: employee.login.uuid,
    name: `${employee.name.first} ${employee.name.last}`,
    dob: employee.dob.date?.split("T")[0],
    age: employee.dob.age,
    gender: employee.gender,
    email: employee.email,
    address: `${employee.location.street.number}, ${employee.location.street.name}, ${employee.location.postcode}, ${employee.location.state}, ${employee.location.country}`,
    image: employee.picture.large || employee.picture.medium,
  }));

  if (searchQuery.value && searchQuery.value?.length > 2) {
    list = list.filter(
      (employee) =>
        employee.name
          .toLowerCase()
          .includes(searchQuery.value?.trim()?.toLowerCase()) ||
        employee.email
          .toLowerCase()
          .includes(searchQuery.value?.trim()?.toLowerCase())
    );
  }
  return list;
});
</script>


<style scoped>
.employees {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background: rgb(200, 225, 241);
}

.card {
  flex: 1 1 250px;
  max-width: 18rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.no-data {
  text-align: center;
  font-weight: bold;
  color: rgb(222, 100, 100);
  margin-top: 1rem;
}
.search-container {
  display: flex;
  justify-content: flex-end; /* pushes input to right */
  margin-bottom: 1rem;
}
.search-input {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 250px;
  padding-left: 10px;
}
h1 {
  margin-right: auto; /* pushes heading to left */
}
</style>
