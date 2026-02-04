<template>
  <q-page class="bg-dark-page flex flex-center q-pa-md">
    <!-- Animated Blobs for Auth Page -->
    <div class="auth-blob auth-blob-1"></div>
    <div class="auth-blob auth-blob-2"></div>

    <q-card class="auth-card glass-card q-pa-xl relative-position overflow-hidden">
      <div class="text-center q-mb-xl">
        <div class="row items-center justify-center q-mb-md">
          <q-icon name="auto_awesome" color="primary" size="32px" />
          <div class="text-h4 text-weight-bolder q-ml-sm tracking-tighter text-white">
            Nexus<span class="text-gradient">CRM</span>
          </div>
        </div>
        <h2 class="text-h5 text-weight-bold text-white q-mt-none">Welcome Back</h2>
        <p class="text-grey-5">Login to access your high-performance dashboard</p>
      </div>

      <q-form @submit="handleLogin" class="q-gutter-md">
        <q-input
          dark
          outlined
          v-model="loginForm.email"
          label="Email Address"
          type="email"
          color="primary"
          class="modern-input"
          :rules="[(val) => !!val || 'Email is required']"
        >
          <template v-slot:prepend>
            <q-icon name="email" color="grey-7" />
          </template>
        </q-input>

        <q-input
          dark
          outlined
          v-model="loginForm.password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          color="primary"
          class="modern-input"
          :rules="[(val) => !!val || 'Password is required']"
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="grey-7" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
              color="grey-7"
            />
          </template>
        </q-input>

        <div class="row justify-between items-center q-mb-md">
          <q-checkbox v-model="rememberMe" label="Remember me" dark color="primary" />
          <q-btn flat dense no-caps label="Forgot password?" color="primary" class="text-caption" />
        </div>

        <q-btn
          unelevated
          color="primary"
          label="Secure Login"
          no-caps
          class="full-width auth-submit-btn text-weight-bold"
          :loading="loading"
          size="lg"
          type="submit"
        />

        <div class="text-center q-mt-xl">
          <p class="text-grey-6">
            Don't have an account?
            <q-btn
              flat
              no-caps
              label="Get Started"
              color="primary"
              to="/register"
              class="q-px-xs"
            />
          </p>
        </div>
      </q-form>

      <!-- Decorative line -->
      <div class="auth-footer-line"></div>
    </q-card>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from 'src/boot/supabase'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)

const loginForm = reactive({
  email: '',
  password: '',
})

const handleLogin = async () => {
  loading.value = true
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password,
    })

    if (error) throw error

    $q.notify({
      type: 'positive',
      message: 'Welcome to NexusCRM!',
      position: 'top',
    })
    router.push('/dashboard')
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.message || 'Login failed',
      position: 'top',
    })
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.auth-card {
  width: 100%;
  max-width: 480px;
  border-radius: 32px;
  z-index: 10;
  border-color: rgba(124, 77, 255, 0.2);
}

.auth-blob {
  position: absolute;
  filter: blur(100px);
  z-index: 1;
  border-radius: 50%;
  opacity: 0.2;
}

.auth-blob-1 {
  width: 300px;
  height: 300px;
  background: var(--q-primary);
  top: 10%;
  left: 10%;
}

.auth-blob-2 {
  width: 400px;
  height: 400px;
  background: var(--q-secondary);
  bottom: 10%;
  right: 10%;
}

.auth-submit-btn {
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--q-primary), var(--q-accent)) !important;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 77, 255, 0.4);
  }
}

.auth-footer-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--q-primary), var(--q-secondary));
  opacity: 0.5;
}

:deep(.q-field--outlined .q-field__control) {
  border-radius: 12px;
}
</style>
