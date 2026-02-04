<template>
  <q-layout view="lHh Lpr lFf" class="text-white">
    <div class="animated-bg-art">
      <div class="starfall-container">
        <div v-for="n in 15" :key="n" class="shooting-star"></div>
      </div>
    </div>
    <q-header
      elevated
      class="bg-glass text-white"
      height-hint="98"
      style="background: rgba(5, 5, 8, 0.8) !important; backdrop-filter: blur(15px)"
    >
      <q-toolbar class="q-py-md q-px-xl">
        <q-btn flat no-caps no-wrap class="q-ml-xs logo-btn" to="/">
          <div class="logo-container">
            <q-icon name="auto_awesome" color="primary" size="32px" class="logo-icon" />
          </div>
          <q-toolbar-title shrink class="text-weight-bold q-ml-sm text-h5 tracking-tighter">
            Nexus<span class="text-gradient">CRM</span>
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="gt-sm row items-center no-wrap nav-links">
          <q-btn flat to="/" label="Home" no-caps class="nav-item" />
          <q-btn flat to="/services" label="Services" no-caps class="nav-item" />
          <q-btn flat to="/pricing" label="Pricing" no-caps class="nav-item" />
          <q-btn flat to="/about" label="About Us" no-caps class="nav-item" />
          <q-btn flat to="/contact" label="Contact" no-caps class="nav-item" />
        </div>

        <q-space />

        <div class="row items-center no-wrap q-gutter-md">
          <template v-if="!user">
            <q-btn flat label="Log In" no-caps to="/login" class="gt-xs text-weight-medium" />
            <q-btn
              unelevated
              color="primary"
              label="Get Started"
              no-caps
              to="/register"
              class="action-btn text-weight-bold q-px-lg"
            />
          </template>
          <template v-else>
            <q-btn-dropdown flat no-caps class="nav-item">
              <template v-slot:label>
                <div class="row items-center no-wrap">
                  <q-avatar size="28px" class="q-mr-sm">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                  <div class="text-weight-bold">{{ user.user_metadata?.full_name || 'User' }}</div>
                </div>
              </template>
              <q-list dark style="min-width: 150px" class="glass-card">
                <q-item clickable v-close-popup to="/dashboard">
                  <q-item-section avatar><q-icon name="dashboard" /></q-item-section>
                  <q-item-section>Dashboard</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="handleLogout">
                  <q-item-section avatar><q-icon name="logout" color="negative" /></q-item-section>
                  <q-item-section class="text-negative">Sign Out</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </template>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Responsive Minimal Footer -->
    <q-footer class="bg-dark text-white q-py-md footer-section">
      <div class="container q-mx-auto q-px-lg">
        <div class="row items-center justify-between q-col-gutter-sm">
          <div class="col-12 col-sm-auto row items-center justify-center justify-sm-start">
            <q-icon name="auto_awesome" color="primary" size="20px" />
            <div class="text-subtitle2 text-weight-bolder q-ml-xs tracking-tighter">
              Nexus<span class="text-gradient">CRM</span>
            </div>
          </div>

          <div
            class="col-12 col-sm-auto row items-center justify-center q-gutter-md text-grey-7 text-caption"
          >
            <router-link to="/features" class="footer-link-minimal">Features</router-link>
            <router-link to="/about" class="footer-link-minimal">About</router-link>
            <div class="gt-xs text-grey-8">|</div>
            <div>© 2026 NexusCRM Tech.</div>
            <div class="row items-center q-ml-md powered-by">
              <span class="q-mr-xs">Powered by</span>
              <span
                class="text-weight-bolder text-white tracking-widest text-uppercase"
                style="font-size: 10px"
                >ASA</span
              >
            </div>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { user, supabase } from 'src/boot/supabase'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()

const handleLogout = async () => {
  const { error } = await supabase.auth.signOut()
  if (!error) {
    $q.notify({
      type: 'info',
      message: 'Signed out successfully',
      position: 'top',
    })
    router.push('/')
  }
}
</script>

<style scoped lang="scss">
.bg-dark-page {
  background: #050508;
}

.bg-glass {
  background: rgba(10, 10, 15, 0.7) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.container {
  max-width: 1400px;
}

.text-gradient {
  background: linear-gradient(135deg, var(--q-primary), var(--q-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-item {
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 0 4px;
  position: relative;

  &:hover {
    color: var(--q-primary) !important;
    background: transparent !important;
  }
}

.action-btn {
  border-radius: 50px;
  background: linear-gradient(135deg, var(--q-primary), var(--q-accent)) !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 77, 255, 0.4);
  }
}

.logo-btn {
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
    background: transparent !important;
  }
}

.tracking-tighter {
  letter-spacing: -0.05em;
}

.tracking-widest {
  letter-spacing: 0.2em;
}

.footer-section {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: #08080c !important;
}

.powered-by {
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-link-minimal {
  text-decoration: none;
  color: #757575;
  transition: color 0.3s ease;
  &:hover {
    color: var(--q-primary);
  }
}

.hover-white:hover {
  color: white;
}

.leading-relaxed {
  line-height: 1.8;
}

.leading-compact {
  line-height: 1.4;
}
</style>
