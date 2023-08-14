<template>
  <section class="bg-blue-grey-lighten-5">
    <v-container fluid>
      <v-row align-content="center" justify="center" style="height: 100vh">
        <v-col md="4" lg="4" cols="12">
          <v-card class="pa-6">
            <div class="text-center">
              <!-- <img src="../assets/icons/PillBox-logo.svg" width="150" /> -->
              <h2 class="text-center font-weight-bold text-primary">
                Pill Box
              </h2>
            </div>
            <h3 class="text-center">Sign in</h3>
            <p class="text-center text-grey-darken-1">
              A verification code will be send to your number
            </p>
            <form @submit.prevent="submit" class="mt-4">
              <v-text-field
                v-model="phoneNumber.value.value"
                :error-messages="phoneNumber.errorMessage.value"
                label="Phone Number"
                variant="underlined"
                color="primary"
                type="number"
                class="inputPrice"
                hide-spin-buttons
              ></v-text-field>
              <div class="d-flex justify-center mt-4">
                <v-btn class="me-4" color="primary" type="submit">
                  Send OTP code
                </v-btn>
              </div>
            </form>
            <div id="recaptcha-container"></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div id="recaptcha-container"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useField, useForm } from "vee-validate";
// import { getAuth } from "firebase/auth";
import firebase from "../../firebase.js";

const { handleSubmit } = useForm({
  validationSchema: {
    phoneNumber(value) {
      if (!!value) return true;
      return "Phone number is required";
    },
  },
});

const recaptchaVerifier = ref(null);
const recaptchaWidgetId = ref(null);
const confirmResult = ref(null);
const smsSent = ref(false);

const phoneNumber = useField("phoneNumber");

onMounted(() => {
  firebase.auth().useDeviceLanguage();
  recaptchaVerifier.value = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  recaptchaVerifier.value.render().then((widgetId) => {
    recaptchaWidgetId.value = widgetId;
  });
});

const submit = handleSubmit( async (values) => {
  console.log("value====", values.phoneNumber);
  const phoneNumberValue = `+91${values.phoneNumber}`;
    const appVerifier = recaptchaVerifier.value;
try{
    const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumberValue, appVerifier);

    confirmResult.value = confirmationResult;
    console.log('confirmationResult', confirmResult.value);
    // Proceed with verification code input and signing in
  } catch (error) {
    console.error("Error sending verification code", error);
  }
});
</script>

<style scoped>
.v-application {
  background-color: #00a86b;
}
.inputPrice >>> input::-webkit-outer-spin-button,
.inputPrice >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
