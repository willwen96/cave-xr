<template>
  <div>
    <input type="file" ref="fileInput" />
    <button @click="submitFile">Submit</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const fileInput = ref(null);

const submitFile = async () => {
  const file = fileInput.value.files[0];

  if (!file) {
    console.error("No file selected");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    const endpoint = "http://localhost:3000/upload";
    const response = await axios.post(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
