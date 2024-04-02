<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>Feel free to contact us for any inquiries or feedback.</p>
    <form class="flex">
      <label>Full Name*</label>
      <input type="text" v-model="fullName" />

      <label>Email*</label>
      <input type="email" v-model="email" />

      <label>Message*</label>
      <textarea type="text" v-model="message"></textarea>

      <button :disabled="isButtonDisabled">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      message: ''
    };
  },
  computed: {
    isButtonDisabled() {
      return !this.fullName || !this.email || !this.message;
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

label {
  margin-bottom: 5px;
}

input, textarea {
  margin-bottom: 15px;
  width: 100%;
  padding: 4px;
  border-radius: 12px;
}

p {
  margin-bottom: 35px;
}

textarea {
  height: 100px;
}

button {
  background-color: #42b983;
  padding: 5px;
  border: 0px;
  border-radius: 12px;
  font-weight: 700;
}
</style>
