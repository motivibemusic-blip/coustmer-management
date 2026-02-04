<template>
  <q-page class="text-white flex flex-center q-pa-md">
    <!-- Animated Blobs -->
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
        <h2 class="text-h5 text-weight-bold text-white q-mt-none">Create Account</h2>
        <p class="text-grey-5">Join 15,000+ teams scaling with NexusCRM</p>
      </div>

      <q-form @submit="handleRegister" class="q-gutter-md">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <q-input
              dark
              outlined
              v-model="regForm.firstName"
              label="First Name"
              color="primary"
              class="modern-input"
              :rules="[(val) => !!val || 'Required']"
            />
          </div>
          <div class="col-12 col-sm-6">
            <q-input
              dark
              outlined
              v-model="regForm.lastName"
              label="Last Name"
              color="primary"
              class="modern-input"
              :rules="[(val) => !!val || 'Required']"
            />
          </div>
        </div>

        <q-input
          dark
          outlined
          v-model="regForm.email"
          label="Email Address"
          type="email"
          color="primary"
          class="modern-input"
          :rules="[(val) => !!val || 'Email is required']"
        />

        <q-input
          dark
          outlined
          v-model="regForm.password"
          label="Create Password"
          :type="showPassword ? 'text' : 'password'"
          color="primary"
          class="modern-input"
          :rules="[(val) => val.length >= 8 || 'Minimum 8 characters']"
        >
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
              color="grey-7"
            />
          </template>
        </q-input>

        <div class="q-mb-md">
          <q-checkbox
            v-model="acceptTerms"
            label="I accept the Terms & Conditions"
            dark
            color="primary"
          />
        </div>

        <q-btn
          unelevated
          color="primary"
          label="Start Free Trial"
          no-caps
          class="full-width auth-submit-btn text-weight-bold"
          size="lg"
          type="submit"
          :disabled="!acceptTerms"
          :loading="loading"
        />

        <div class="text-center q-mt-xl">
          <p class="text-grey-6">
            Already have an account?
            <q-btn flat no-caps label="Sign In" color="primary" to="/login" class="q-px-xs" />
          </p>
        </div>
      </q-form>

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
const acceptTerms = ref(false)
const loading = ref(false)

const regForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const handleRegister = async () => {
  loading.value = true
  try {
    const { error } = await supabase.auth.signUp({
      email: regForm.email,
      password: regForm.password,
      options: {
        data: {
          full_name: `${regForm.firstName} ${regForm.lastName}`,
        },
      },
    })

    if (error) throw error

    $q.notify({
      type: 'positive',
      message: 'Registration successful! Please check your email.',
      position: 'top',
    })
    router.push('/login')
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.message || 'Registration failed',
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
  max-width: 520px;
  border-radius: 32px;
  z-index: 10;
}

.auth-blob {
  position: absolute;
  filter: blur(100px);
  z-index: 1;
  border-radius: 50%;
  opacity: 0.15;
}

.auth-blob-1 {
  width: 350px;
  height: 350px;
  background: var(--q-primary);
  top: -5%;
  right: -5%;
}
.auth-blob-2 {
  width: 350px;
  height: 350px;
  background: var(--q-secondary);
  bottom: -5%;
  left: -5%;
}

.auth-submit-btn {
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--q-primary), var(--q-accent)) !important;
}

.auth-footer-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--q-primary), var(--q-secondary));
}

:deep(.q-field--outlined .q-field__control) {
  border-radius: 12px;
}
</style>
