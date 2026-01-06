<template>
  <q-layout view="lHh Lpr lFf" class="bg-black text-white">
    <q-header class="bg-black text-white transparent-header" height-hint="98">
      <q-toolbar class="q-py-md q-px-lg">
        <q-btn flat no-caps no-wrap class="q-ml-xs">
          <q-icon name="dashboard" color="primary" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold q-ml-sm text-h5">
            Cust<span class="text-primary">Mgr</span>
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="gt-sm row items-center no-wrap q-gutter-md">
          <q-btn flat to="/" label="Home" class="text-white hover-red" />
          <q-btn flat to="/features" label="Features" class="text-white hover-red" />
          <q-btn flat to="/pricing" label="Pricing" class="text-white hover-red" />
          <q-btn flat to="/about" label="About Us" class="text-white hover-red" />
        </div>

        <q-space />

        <div class="row items-center no-wrap q-gutter-sm">
          <q-btn flat label="Log In" class="text-white" />
          <q-btn
            unelevated
            color="primary"
            label="Get Started"
            class="text-bold text-black q-px-md border-radius-lg"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Simple Footer -->
    <q-footer class="bg-black text-white q-py-xl">
      <div class="container q-mx-auto q-px-md">
        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-4">
            <div class="row items-center q-mb-md">
              <q-icon name="dashboard" color="primary" size="32px" />
              <div class="text-h5 text-weight-bold q-ml-sm">
                Cust<span class="text-primary">Mgr</span>
              </div>
            </div>
            <div class="text-grey-5">
              The ultimate solution for managing your customer relationships with elegance and
              efficiency.
            </div>
          </div>
          <div class="col-6 col-md-2">
            <div class="text-subtitle1 text-weight-bold q-mb-md">Product</div>
            <div class="text-grey-5 column q-gutter-sm pointer">
              <div>Features</div>
              <div>Pricing</div>
              <div>API</div>
            </div>
          </div>
          <div class="col-6 col-md-2">
            <div class="text-subtitle1 text-weight-bold q-mb-md">Company</div>
            <div class="text-grey-5 column q-gutter-sm pointer">
              <div>About</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-subtitle1 text-weight-bold q-mb-md">Subscribe</div>
            <q-input
              dark
              outlined
              dense
              v-model="email"
              placeholder="Enter your email"
              class="q-mb-sm"
              color="primary"
            >
              <template v-slot:append>
                <q-btn round dense flat icon="send" color="primary" />
              </template>
            </q-input>
          </div>
        </div>
        <q-separator dark class="q-my-lg" />
        <div class="row justify-between text-grey-6 text-caption">
          <div>© 2026 Customer Management System. All rights reserved.</div>
          <div class="q-gutter-sm">
            <q-icon name="facebook" size="20px" />
            <q-icon name="twitter" size="20px" />
            <q-icon name="linkedin" size="20px" />
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
</script>

<style scoped>
.hover-red:hover {
  color: var(--q-primary) !important;
}
.border-radius-lg {
  border-radius: 8px;
}
.transparent-header {
  background: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
