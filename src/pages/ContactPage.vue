<template>
  <q-page class="text-white q-py-xl">
    <div class="container q-px-md q-pt-xl">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-5">
          <q-intersection once transition="fade">
            <h1 class="text-h2 text-weight-bolder q-mb-md">
              Get in <span class="text-gradient">Touch</span>
            </h1>
            <p class="text-h6 text-grey-5 leading-relaxed q-mb-xl">
              Have questions or need a custom solution? Our team is ready to help you scale.
            </p>

            <div class="contact-info q-gutter-lg">
              <div class="row items-center">
                <div class="icon-circle q-mr-md"><q-icon name="email" color="primary" /></div>
                <div>
                  <div class="text-grey-6 text-caption text-uppercase">Email Us</div>
                  <div class="text-subtitle1">hello@nexuscrm.io</div>
                </div>
              </div>
              <div class="row items-center">
                <div class="icon-circle q-mr-md"><q-icon name="phone" color="secondary" /></div>
                <div>
                  <div class="text-grey-6 text-caption text-uppercase">Call Us</div>
                  <div class="text-subtitle1">+1 (888) NEXUS-CRM</div>
                </div>
              </div>
              <div class="row items-center">
                <div class="icon-circle q-mr-md"><q-icon name="location_on" color="accent" /></div>
                <div>
                  <div class="text-grey-6 text-caption text-uppercase">Visit Us</div>
                  <div class="text-subtitle1">123 Tech Avenue, San Francisco, CA</div>
                </div>
              </div>
            </div>
          </q-intersection>
        </div>

        <div class="col-12 col-md-7">
          <div class="contact-card glass-card">
            <q-form @submit="onSubmit" class="q-gutter-md">
              <div class="row q-col-gutter-md">
                <div class="col-12 col-sm-6">
                  <q-input dark outlined v-model="form.name" label="Full Name" />
                </div>
                <div class="col-12 col-sm-6">
                  <q-input dark outlined v-model="form.email" label="Email Address" type="email" />
                </div>
              </div>
              <q-select dark outlined v-model="form.subject" :options="subjects" label="Subject" />
              <q-input
                dark
                outlined
                v-model="form.message"
                label="Message"
                type="textarea"
                rows="5"
              />

              <q-btn
                unelevated
                color="primary"
                label="Send Message"
                no-caps
                class="full-width text-weight-bold q-py-md"
                size="lg"
                type="submit"
              />
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: 'General Inquiry',
  message: '',
})

const subjects = ['General Inquiry', 'Sales', 'Technical Support', 'Partnership']

const onSubmit = () => {
  // Handle form submission
  alert('Thank you! Your message has been sent.')
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.text-gradient {
  background: linear-gradient(135deg, var(--q-primary), var(--q-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-card {
  padding: 48px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.leading-relaxed {
  line-height: 1.8;
}
</style>
