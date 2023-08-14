<template>
  <section class="bg-blue-grey-lighten-5">
    <v-container fluid>
      <v-row align-content="center" justify="center" style="height: 100vh">
        <v-col md="4" lg="4" cols="12">
          <v-card class="pa-4">
            <div class="text-center">
              <!-- <img src="../assets/icons/PillBox-logo.svg" width="150" /> -->
              <h2 class="text-center font-weight-bold text-primary">
                Verify Your Account
              </h2>
              <p class="text-grey-darken-1">
                We are sending a OTP to validate your mobile number
              </p>
            </div>
            <form @submit.prevent="submitOtp" class="mt-4">
              <v-text-field
                class="mt-2"
                v-model="otp"
                label="OTP"
                variant="underlined"
                color="primary"
              ></v-text-field>
              <div class="d-flex justify-center mt-4">
                <v-btn class="me-4" color="primary" type="submit" id="log-in">
                  Verify
                </v-btn>
              </div>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const otp = ref(null);

const submitOtp = () => {
  console.log("call submit===", otp.value);
};
</script>