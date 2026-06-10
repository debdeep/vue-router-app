<template>
  <div class="search-container">
    <h1>{{ HOME_PAGE.HEADING }}</h1>
    <input id="searchBar" type="text" :placeholder="SEARCH_BAR.PLACEHOLDER" v-model.trim="searchQuery"
      class="search-input" />
  </div>

  <h2>{{ EMPLOYEE.EMPLOYEES_FOUND }} {{ employeeList.length }}</h2>
  <div class="form-check form-switch" v-show="employeeList.length > 0">
    <input class="form-check-input" type="checkbox" value="" id="checkFemaleFilterSwitch"
      v-model="showFemaleEmployeesOnly" switch>
    <label class="form-check-label" for="checkFemaleFilterSwitch">
      {{ SWITCH.FEMALE_FILTER_TEXT }}
    </label>
  </div>
  <p v-if="message && searchQuery.length < 3">{{ message }}</p>
  <div class="employees" v-if="employeeList.length > 0">
    <EmployeeCard :employeeList="employeeList" @employeeSelected="displayMessage" />
  </div>


  <transition v-else name="fade">
    <EmptyList />
  </transition>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { EMPLOYEE, HOME_PAGE, SEARCH_BAR, SWITCH } from '../utils/constants.js';
import EmptyList from "./EmptyList.vue";
import EmployeeCard from "./EmployeeCard.vue";

const employeeListResponse = ref([]);
const searchQuery = ref("");
const listResponseCount = ref(10);
const showFemaleEmployeesOnly = ref(false);
const message = ref("");

const displayMessage = (employee) => {
  message.value = `Contacted Employee is: ${employee.name}`;
};

onMounted(async () => {
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=${listResponseCount.value}&nat=us`);
    employeeListResponse.value = response?.data?.results;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
});

const employeeList = computed(() => {
  // Mapping the raw API data to clean objects
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

  const query = searchQuery.value?.toLowerCase();

  // 2. Applying search query filter if it has more than 2 characters
  if (query && query.length > 2) {
    list = list.filter(
      (employee) =>
        employee.name.toLowerCase().includes(query) ||
        employee.email.toLowerCase().includes(query)
    );
  }

  // Applying female filter switch if turned on
  if (showFemaleEmployeesOnly.value) {
    list = list.filter((employee) => employee.gender === "female");
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

.search-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.search-input {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding-left: 10px;
}

h1 {
  margin-right: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>