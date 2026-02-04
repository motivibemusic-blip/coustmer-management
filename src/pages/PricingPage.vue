<template>
  <q-page class="text-white q-py-xl">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl q-pt-xl">
        <h1 class="text-h2 text-weight-bolder q-mb-md">
          Simple <span class="text-gradient">Pricing</span>
        </h1>
        <p class="text-h6 text-grey-5 q-mx-auto q-mb-xl" style="max-width: 600px">
          The scaling solutions for teams that refuse to settle. Choose your NexusCRM plan.
        </p>

        <div class="row justify-center items-center q-gutter-md q-mb-xl">
          <span :class="!isAnnual ? 'text-white' : 'text-grey-6'">Monthly</span>
          <q-toggle v-model="isAnnual" color="primary" />
          <span :class="isAnnual ? 'text-white' : 'text-grey-6'">Yearly (Save 20%)</span>
        </div>
      </div>

      <div class="row q-col-gutter-lg justify-center">
        <div v-for="(plan, index) in plans" :key="index" class="col-12 col-sm-6 col-md-4">
          <q-intersection once transition="fade">
            <div class="pricing-card glass-card" :class="{ featured: plan.featured }">
              <div v-if="plan.featured" class="popular-badge">
                <q-icon name="auto_awesome" color="white" size="14px" class="q-mr-xs" />
                Best Value
              </div>
              <h3 class="text-h5 text-weight-bold q-mb-sm text-white">{{ plan.name }}</h3>
              <p class="text-grey-5 q-mb-lg" style="font-size: 0.9rem">{{ plan.subtitle }}</p>

              <div class="price q-mb-xl">
                <span class="text-h6 text-grey-5 text-weight-medium">$</span>
                <span class="text-h2 text-weight-bolder text-white tracking-tighter">{{
                  isAnnual ? plan.annualPrice : plan.monthlyPrice
                }}</span>
                <span class="text-grey-6"> / month</span>
              </div>

              <q-separator dark class="q-mb-xl" style="opacity: 0.05" />

              <q-list class="q-mb-xl feature-list">
                <q-item
                  v-for="feat in plan.features"
                  :key="feat"
                  class="q-px-none q-py-xs min-h-none"
                >
                  <q-item-section avatar class="min-width-0 q-pr-sm">
                    <q-icon name="check_circle" color="primary" size="18px" />
                  </q-item-section>
                  <q-item-section class="text-grey-4" style="font-size: 0.95rem">{{
                    feat
                  }}</q-item-section>
                </q-item>
              </q-list>

              <q-btn
                unelevated
                :color="plan.featured ? 'primary' : 'white'"
                :text-color="plan.featured ? 'white' : 'dark'"
                :label="plan.cta"
                no-caps
                class="full-width text-weight-bold p-btn shadow-btn"
                size="lg"
                @click="initiatePurchase(plan)"
              />
            </div>
          </q-intersection>
        </div>
      </div>

      <!-- Payment Modal -->
      <q-dialog v-model="showPayment" backdrop-filter="blur(10px)">
        <q-card class="payment-card glass-card text-white">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6 text-weight-bold">Complete Your Purchase</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup color="grey-7" />
          </q-card-section>

          <q-card-section class="q-pt-lg text-center">
            <div class="text-subtitle1 text-grey-5 q-mb-xs">Selected Plan</div>
            <div class="text-h5 text-weight-bolder text-gradient q-mb-xl">
              {{ selectedPlan?.name }}
            </div>

            <div class="payment-methods q-gutter-y-md">
              <!-- PayPal Option -->
              <q-btn
                outline
                class="payment-method-btn full-width"
                no-caps
                @click="payWith('PayPal')"
              >
                <div class="row items-center justify-between full-width">
                  <div class="row items-center">
                    <q-icon name="payments" color="blue" size="24px" class="q-mr-md" />
                    <span>Pay with PayPal / Skrill</span>
                  </div>
                  <q-icon name="chevron_right" color="grey-7" />
                </div>
              </q-btn>

              <!-- USDT/Crypto Option -->
              <q-btn outline class="payment-method-btn full-width" no-caps @click="payWith('USDT')">
                <div class="row items-center justify-between full-width">
                  <div class="row items-center">
                    <q-icon name="currency_bitcoin" color="warning" size="24px" class="q-mr-md" />
                    <span>Pay with USDT (Crypto)</span>
                  </div>
                  <q-icon name="chevron_right" color="grey-7" />
                </div>
              </q-btn>
            </div>
          </q-card-section>

          <q-card-section class="q-pa-xl text-center text-caption text-grey-6">
            Payments are secured with 256-bit encryption. <br />
            By continuing, you agree to our Terms of Service.
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- USDT Address Modal -->
      <q-dialog v-model="showUSDTBox">
        <q-card
          class="glass-card text-white q-pa-lg text-center"
          style="max-width: 400px; border-radius: 20px"
        >
          <q-card-section>
            <div class="text-h6 q-mb-md">USDT (TRC20) Address</div>
            <div class="address-box q-pa-md q-mb-lg">
              <code class="text-primary text-weight-bold break-all"
                >TY6hJkR89WvLpM2zXqAnS5d8vN3bLp9Kz</code
              >
            </div>
            <q-btn
              color="primary"
              label="Copy Address"
              unelevated
              no-caps
              class="full-width q-mb-md"
              @click="copyAddress"
            />
            <p class="text-caption text-grey-6">
              Send exactly ${{
                isAnnual ? selectedPlan?.annualPrice : selectedPlan?.monthlyPrice
              }}
              USDT to avoid delays.
            </p>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar, copyToClipboard } from 'quasar'

const $q = useQuasar()
const isAnnual = ref(true)
const showPayment = ref(false)
const showUSDTBox = ref(false)
const selectedPlan = ref(null)

const initiatePurchase = (plan) => {
  selectedPlan.value = plan
  showPayment.value = true
}

const payWith = (method) => {
  if (method === 'PayPal') {
    $q.notify({
      message: 'Redirecting to Secure Gateway...',
      color: 'blue',
      icon: 'sync',
    })
    // In real app: window.location.href = 'paypal_checkout_url'
  } else if (method === 'USDT') {
    showPayment.value = false
    showUSDTBox.value = true
  }
}

const copyAddress = () => {
  copyToClipboard('TY6hJkR89WvLpM2zXqAnS5d8vN3bLp9Kz').then(() => {
    $q.notify({
      message: 'Address Copied!',
      color: 'positive',
      icon: 'content_copy',
    })
  })
}

const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for small teams and startups.',
    monthlyPrice: 29,
    annualPrice: 19,
    features: ['Up to 5 Projects', 'Basic Insights', 'Community Support', '2GB Data Cap'],
    cta: 'Get Started',
    to: '/register',
    featured: false,
  },
  {
    name: 'Nexus Pro',
    subtitle: 'Everything needed for scaling fast.',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      'Unlimited Projects',
      'Advanced AI Predictor',
      'Priority 24/7 Support',
      '50GB Cloud Storage',
      'Full API Access',
    ],
    cta: 'Start Free Trial',
    to: '/register',
    featured: true,
  },
  {
    name: 'Unlimited',
    subtitle: 'Tailored for global enterprises.',
    monthlyPrice: 299,
    annualPrice: 249,
    features: [
      'Custom Infrastructure',
      'Dedicated Architect',
      'Custom Onboarding',
      'Unlimited Cloud Storage',
      'SSO & SAML Login',
    ],
    cta: 'Contact Sales',
    to: '/contact',
    featured: false,
  },
]
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

.pricing-card {
  border-radius: 40px;
  padding: 40px;
  height: 100%;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;

  &.featured {
    background: rgba(124, 77, 255, 0.08) !important;
    border-color: var(--q-primary);
    transform: scale(1.05);
    z-index: 2;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    @media (max-width: 1023px) {
      transform: scale(1);
    }
  }

  &:hover {
    border-color: var(--q-primary);
    transform: translateY(-5px);
  }
}

.popular-badge {
  position: absolute;
  top: 24px;
  right: 24px;
  background: var(--q-primary);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.p-btn {
  border-radius: 16px;
  margin-top: auto;
}

.shadow-btn {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.min-h-none {
  min-height: auto;
}

.feature-list {
  flex-grow: 1;
}

.payment-card {
  width: 100%;
  max-width: 450px;
  border-radius: 32px;
}

.payment-method-btn {
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--q-primary);
  }
}

.address-box {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 1px dashed rgba(255, 255, 255, 0.2);
}

.break-all {
  word-break: break-all;
}
</style>
