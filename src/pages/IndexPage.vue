<template>
  <q-page class="text-white overflow-hidden">
    <!-- Hero Section -->
    <section class="hero-section min-h-screen flex flex-center relative-position">
      <!-- Animated Background Blobs -->
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>

      <div class="container relative-position z-10 q-px-md">
        <div class="row items-center q-col-gutter-xl">
          <div class="col-12 col-md-7">
            <transition appear enter-active-class="animated fadeInUp">
              <div class="hero-badge q-mb-lg">
                <q-icon name="stars" color="primary" size="20px" class="q-mr-sm" />
                <span>Next-Gen CRM is Live</span>
              </div>
            </transition>

            <h1 class="hero-title text-weight-bolder q-mt-none q-mb-md leading-tight">
              Scale Your <br />
              <span class="text-gradient">Customer</span> Base <br />
              With Precision.
            </h1>

            <p class="hero-subtitle text-grey-4 q-mb-xl">
              The only platform that combines intelligent automation with intuitive design. Built
              for teams who refuse to settle for average.
            </p>

            <div class="row q-gutter-md items-center justify-center justify-md-start">
              <q-btn
                unelevated
                label="Launch NexusCRM"
                no-caps
                to="/register"
                class="main-cta-btn q-px-xl text-weight-bold full-width-mobile"
                size="lg"
              />
              <q-btn
                outline
                color="white"
                label="Watch Demo"
                no-caps
                class="secondary-cta-btn q-px-xl text-weight-bold full-width-mobile"
                size="lg"
                icon="play_circle_outline"
                @click="showDemo = true"
              />
            </div>

            <div
              class="q-mt-xl row items-center text-grey-6 text-caption tracking-widest text-uppercase"
            >
              <div class="q-mr-lg">
                <q-icon name="check" color="secondary" class="q-mr-xs" /> Free Forever Tier
              </div>
              <div><q-icon name="check" color="secondary" class="q-mr-xs" /> No Login Required</div>
            </div>
          </div>

          <div class="col-12 col-md-5">
            <transition appear enter-active-class="animated zoomIn">
              <div class="hero-visual">
                <div class="glass-mockup">
                  <div class="mockup-header row items-center q-pa-sm q-gutter-xs">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                  </div>
                  <q-img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    class="mockup-content"
                  />
                  <!-- Floating UI Elements -->
                  <div class="floating-card lead-card">
                    <div class="text-caption text-grey-5">Monthly Active Leads</div>
                    <div class="text-h6 text-weight-bold">+4,230</div>
                  </div>
                  <div class="floating-card sales-card">
                    <div class="row items-center">
                      <q-icon name="trending_up" color="secondary" size="24px" class="q-mr-sm" />
                      <div class="text-h6 text-weight-bold">$12,400</div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By Section -->
    <section class="q-py-xl border-y">
      <div class="container">
        <div class="text-center q-mb-xl text-grey-6 text-uppercase tracking-widest text-caption">
          Powering the World's Most Ambitious Teams
        </div>
        <div
          class="row justify-center items-center q-gutter-xl opacity-40 grayscale-filter logo-row"
        >
          <q-icon name="fab fa-google" size="32px" />
          <q-icon name="fab fa-amazon" size="32px" />
          <q-icon name="fab fa-microsoft" size="32px" />
          <q-icon name="fab fa-spotify" size="32px" />
          <q-icon name="fab fa-slack" size="32px" />
          <q-icon name="fab fa-airbnb" size="32px" />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="q-py-100 relative-position">
      <div class="container q-px-md">
        <div class="text-center q-mb-80">
          <h2 class="section-title text-h2 text-weight-bold q-mb-md">
            Built for the <span class="text-gradient">Modern</span> Web
          </h2>
          <p class="section-subtitle text-grey-5 text-h6 q-mx-auto" style="max-width: 700px">
            Focus on what matters most. Our tools take care of the rest with seamless automation and
            real-time insights.
          </p>
        </div>

        <div class="row q-col-gutter-xl">
          <div v-for="(feature, index) in features" :key="index" class="col-12 col-sm-6 col-md-4">
            <q-intersection once transition="fade">
              <div
                class="feature-card glass-card h-full cursor-pointer"
                @click="openFeature(feature)"
              >
                <div class="icon-box q-mb-lg">
                  <q-icon :name="feature.icon" :color="feature.color" size="32px" />
                </div>
                <h3 class="text-h5 text-weight-bold q-mb-md">{{ feature.title }}</h3>
                <p class="text-grey-5 leading-relaxed">{{ feature.desc }}</p>
                <q-btn
                  flat
                  dense
                  color="primary"
                  label="Learn more"
                  icon-right="chevron_right"
                  class="q-mt-md no-caps"
                />
              </div>
            </q-intersection>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section class="q-py-100 bg-dark-page relative-position">
      <div class="container q-px-md">
        <div class="text-center q-mb-80">
          <h2 class="section-title text-h2 text-weight-bold q-mb-md">
            How it <span class="text-gradient">Works</span>
          </h2>
          <p class="text-h6 text-grey-5 q-mx-auto" style="max-width: 600px">
            Get up and running in minutes. Our platform is designed for rapid deployment.
          </p>
        </div>

        <div class="row q-col-gutter-xl">
          <div v-for="(step, index) in steps" :key="index" class="col-12 col-md-4">
            <q-intersection once transition="fade">
              <div class="step-item text-center">
                <div class="step-number q-mb-lg text-h4 text-weight-bold flex flex-center">
                  {{ index + 1 }}
                </div>
                <h3 class="text-h5 text-weight-bold q-mb-md">{{ step.title }}</h3>
                <p class="text-grey-5 leading-relaxed">{{ step.desc }}</p>
              </div>
            </q-intersection>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="q-py-100">
      <div class="container q-px-md">
        <div class="text-center q-mb-80">
          <h2 class="text-h2 text-weight-bold">
            Common <span class="text-gradient">Questions</span>
          </h2>
        </div>
        <div class="row justify-center">
          <div class="col-12 col-md-8">
            <q-list dark bordered separator class="rounded-24 overflow-hidden border-rgba">
              <q-expansion-item
                v-for="(faq, index) in faqs"
                :key="index"
                :label="faq.q"
                header-class="text-weight-bold q-py-lg text-subtitle1"
                expand-icon-class="text-primary"
              >
                <q-card dark class="bg-transparent">
                  <q-card-section class="text-grey-5 q-pb-lg">
                    {{ faq.a }}
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="q-py-100 bg-dark-page relative-position">
      <div class="stats-bg-gradient"></div>
      <div class="container q-px-md relative-position">
        <div class="row q-col-gutter-lg justify-center">
          <div v-for="(stat, index) in stats" :key="index" class="col-12 col-md-3 text-center">
            <q-intersection once transition="scale">
              <div class="stat-item">
                <div class="text-h2 text-weight-bolder text-gradient q-mb-sm">{{ stat.value }}</div>
                <div
                  class="text-subtitle1 text-grey-4 text-weight-medium text-uppercase tracking-widest"
                >
                  {{ stat.label }}
                </div>
              </div>
            </q-intersection>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="q-py-100">
      <div class="container q-px-md">
        <div class="cta-banner relative-position overflow-hidden q-pa-xl rounded-24">
          <div class="cta-gradient-overlay"></div>
          <div class="row items-center relative-position z-10 q-col-gutter-xl">
            <div class="col-12 col-md-8">
              <h2 class="text-h3 text-weight-bold q-mb-md leading-tight">
                Ready to revolutionize your workflow?
              </h2>
              <p class="text-h6 text-white-8 q-mb-none">
                Join 15,000+ companies using NexusCRM today.
              </p>
            </div>
            <div class="col-12 col-md-4 text-center">
              <q-btn
                unelevated
                color="white"
                text-color="primary"
                label="Get Started Now"
                no-caps
                class="cta-final-btn text-weight-bold q-px-xl"
                size="lg"
              />
              <div class="text-caption text-white-5 q-mt-md">
                30 days free trial • No CC required
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Modal / Smart Guideline -->
    <q-dialog v-model="showDemo" backdrop-filter="blur(10px)">
      <q-card class="demo-card glass-card text-white">
        <q-card-section class="row items-center q-pb-none flex-fixed">
          <div class="text-h5 text-weight-bold text-gradient">NexusCRM Walkthrough</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup color="grey-7" />
        </q-card-section>

        <q-card-section class="q-pa-xl scroll">
          <div class="row q-col-gutter-lg">
            <div v-for="(step, idx) in demoSteps" :key="idx" class="col-12">
              <div class="demo-step-item row no-wrap">
                <div
                  class="demo-icon-wrapper flex flex-center q-mr-lg"
                  :style="{ background: step.color }"
                >
                  <q-icon :name="step.icon" size="24px" color="white" />
                </div>
                <div>
                  <div class="text-h6 text-weight-bold q-mb-xs">{{ step.title }}</div>
                  <p class="text-grey-5 text-body2 leading-relaxed q-mb-none">{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pa-lg bg-dark-light text-center">
          <q-btn
            unelevated
            color="primary"
            label="Get Started for Free"
            no-caps
            to="/register"
            class="q-px-xl text-weight-bold"
            rounded
          />
          <div class="text-caption text-grey-6 q-mt-sm">
            No credit card required • Instant setup
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Feature Detail Modal -->
    <q-dialog v-model="showFeatureDialog" backdrop-filter="blur(15px)">
      <q-card class="feature-detail-card glass-card text-white">
        <div
          class="card-glow"
          :style="{
            background: `radial-gradient(circle at top right, var(--q-${selectedFeature.color}), transparent)`,
          }"
        ></div>
        <q-card-section class="row items-center q-pb-none relative-position flex-fixed">
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup color="white" class="close-btn" />
        </q-card-section>

        <q-card-section class="q-pa-xl relative-position scroll">
          <div class="icon-box-large q-mb-xl" :class="`bg-${selectedFeature.color}`">
            <q-icon :name="selectedFeature.icon" size="40px" color="white" />
          </div>

          <h2 class="text-h3 text-weight-bolder q-mb-md">{{ selectedFeature.title }}</h2>
          <p class="text-h6 text-grey-4 q-mb-xl leading-relaxed">
            {{ selectedFeature.longDesc }}
          </p>

          <div class="row q-col-gutter-md">
            <div v-for="benefit in selectedFeature.benefits" :key="benefit" class="col-12 col-sm-6">
              <div class="benefit-item row items-center no-wrap">
                <q-icon
                  name="check_circle"
                  :color="selectedFeature.color"
                  size="24px"
                  class="q-mr-sm"
                />
                <span class="text-subtitle1 text-grey-3">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pa-lg text-center bg-black-opacity">
          <q-btn
            unelevated
            color="primary"
            label="Try this feature"
            no-caps
            to="/register"
            class="q-px-xl text-weight-bold"
            rounded
            size="lg"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const showDemo = ref(false)
const showFeatureDialog = ref(false)
const selectedFeature = ref({})

const openFeature = (feature) => {
  selectedFeature.value = feature
  showFeatureDialog.value = true
}

const demoSteps = [
  {
    title: 'The Intelligent Dashboard',
    desc: 'Our AI-powered engine automatically analyzes your sales metrics, projecting revenue and identifying trends before they happen.',
    icon: 'dashboard',
    color: 'linear-gradient(135deg, #7c4dff, #651fff)',
  },
  {
    title: 'Seamless Data Integration',
    desc: 'Connect your existing workflow tools like Slack, Shopify, and Mailchimp with zero code. Everything stays in sync automatically.',
    icon: 'hub',
    color: 'linear-gradient(135deg, #00bcd4, #00acc1)',
  },
  {
    title: 'Automated Retention Loops',
    desc: 'Custom workflows detect inactive customers and automatically trigger personalized engagement loops to minimize churn.',
    icon: 'loop',
    color: 'linear-gradient(135deg, #ff4081, #f50057)',
  },
  {
    title: 'Bank-Level Security',
    desc: 'Every piece of data is protected with military-grade encryption, ensuring your business and your customers are always safe.',
    icon: 'verified_user',
    color: 'linear-gradient(135deg, #4caf50, #43a047)',
  },
]
const features = [
  {
    icon: 'insights',
    title: 'Advanced Analytics',
    desc: 'Deep dive into your customer behavior with AI-driven analytics.',
    longDesc:
      "Our analytics engine doesn't just show what happened—it tells you why. Using neural networks, we identify patterns in customer behavior that humans often miss.",
    color: 'primary',
    benefits: ['Real-time Tracking', 'Neural Predictions', 'Custom Reporting', 'Behavioral Maps'],
  },
  {
    icon: 'hub',
    title: 'Smart Integrations',
    desc: 'Connect NexusCRM with 500+ apps your team already uses.',
    longDesc:
      'NexusCRM acts as the nervous system of your business. We bridge the gap between your CRM, marketing, and support tools with sub-second sync latency.',
    color: 'secondary',
    benefits: ['One-click Connect', 'Bidirectional Sync', 'Error Handling', 'API Access'],
  },
  {
    icon: 'security',
    title: 'Enterprise Security',
    desc: 'Military-grade encryption and SOC2 compliance to keep data safe.',
    longDesc:
      "Security isn't an afterthought at NexusCRM. We employ Zero-Trust architecture and end-to-end encryption for every transaction and data point.",
    color: 'accent',
    benefits: ['AES-256 Encryption', 'SOC2 Certified', 'Multi-Factor Auth', 'Audit Logs'],
  },
  {
    icon: 'bolt',
    title: 'Workflow Automation',
    desc: 'Automate repetitive tasks and focus on building relationships.',
    longDesc:
      'Stop wasting time on manual data entry. Our drag-and-drop automation builder lets you create complex logic flows in minutes, not days.',
    color: 'warning',
    benefits: ['Visual Builder', 'Conditional Logic', 'Time-based Triggers', 'Custom Hooks'],
  },
  {
    icon: 'devices',
    title: 'Omnichannel Presence',
    desc: 'Manage customers across web, mobile, and social from one place.',
    longDesc:
      'Your customers are everywhere, so you should be too. Centralize conversations from WhatsApp, Email, Instagram, and Web Chat into a single stream.',
    color: 'info',
    benefits: ['Unified Inbox', 'Device Syncing', 'Push Notifications', 'Social CRM'],
  },
  {
    icon: 'support_agent',
    title: '24/7 Global Support',
    desc: 'Our dedicated team of experts is here to help you around the clock.',
    longDesc:
      'When you grow, we grow. Our support engineers are available via chat, phone, or video call anywhere in the world, 24 hours a day.',
    color: 'positive',
    benefits: ['Instant Chat', 'Screen Sharing', 'Uptime Guarantee', 'Priority SLA'],
  },
]

const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '150M+', label: 'Monthly Leads' },
  { value: '180+', label: 'Countries' },
  { value: '24/7', label: 'Support' },
]

const steps = [
  {
    title: 'Connect Data',
    desc: 'Sync your data sources in one click with our pre-built connectors.',
  },
  {
    title: 'AI Discovery',
    desc: 'Let our engine analyze your data and identify growth opportunities.',
  },
  { title: 'Scale Growth', desc: 'Execute automated workflows and see your business thrive.' },
]

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes, we offer a 14-day free trial on all paid plans. No credit card required.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. You can cancel, upgrade, or downgrade your plan at any time from your dashboard.',
  },
  {
    q: 'Is my data secure?',
    a: 'We use military-grade encryption and are SOC2 Type II compliant to ensure your security.',
  },
  {
    q: 'Do you offer custom plans?',
    a: 'Yes, for large organizations we offer tailored enterprise solutions. Contact our sales team.',
  },
]
</script>

<style lang="scss" scoped>
.hero-section {
  padding-top: 100px;
}

.hero-title {
  font-size: 5rem;
  letter-spacing: -2px;
  line-height: 1.1;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 600px;
}

.text-gradient {
  background: linear-gradient(135deg, var(--q-primary), var(--q-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(124, 77, 255, 0.1);
  padding: 8px 16px;
  border-radius: 50px;
  border: 1px solid rgba(124, 77, 255, 0.2);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--q-primary);
}

.main-cta-btn {
  background: linear-gradient(135deg, var(--q-primary), var(--q-accent)) !important;
  border-radius: 12px;
  height: 56px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(124, 77, 255, 0.5);
  }
}

.secondary-cta-btn {
  border-radius: 12px;
  height: 56px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
}

// Blobs
.blob {
  position: absolute;
  filter: blur(80px);
  z-index: 1;
  border-radius: 50%;
  opacity: 0.3;
}
.blob-1 {
  width: 400px;
  height: 400px;
  background: var(--q-primary);
  top: -100px;
  right: -50px;
  animation: move 20s infinite alternate;
}
.blob-2 {
  width: 300px;
  height: 300px;
  background: var(--q-secondary);
  bottom: 0px;
  left: -50px;
  animation: move 25s infinite alternate-reverse;
}
.blob-3 {
  width: 250px;
  height: 250px;
  background: var(--q-accent);
  top: 40%;
  right: 20%;
  opacity: 0.15;
}

@keyframes move {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(50px, 50px) scale(1.1);
  }
}

// Mockup
.glass-mockup {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: visible;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.red {
  background: #ff5f57;
}
.yellow {
  background: #ffbd2e;
}
.green {
  background: #28c940;
}

.mockup-content {
  border-radius: 16px;
  height: 400px;
}

.floating-card {
  position: absolute;
  background: rgba(20, 20, 25, 0.8);
  backdrop-filter: blur(10px);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 20;
}

.lead-card {
  top: 20%;
  left: -60px;
}
.sales-card {
  bottom: 10%;
  right: -30px;
}

// Features
.q-py-100 {
  padding: 100px 0;
}
.q-mb-80 {
  margin-bottom: 80px;
}

.feature-card {
  padding: 40px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;

  &:hover {
    transform: translateY(-12px);
    background: rgba(255, 255, 255, 0.04);
    border-color: var(--q-primary);
    box-shadow: 0 20px 40px rgba(124, 77, 255, 0.1);
  }
}

.icon-box {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
}

.step-number {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  background: rgba(124, 77, 255, 0.1);
  border: 2px solid var(--q-primary);
  color: var(--q-primary);
  border-radius: 50%;
}

.border-rgba {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

.border-y {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.grayscale-filter {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  &:hover {
    filter: grayscale(0%);
  }
}

.stats-bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(124, 77, 255, 0.05) 0%, transparent 70%);
}

.cta-banner {
  background: linear-gradient(135deg, var(--q-primary), var(--q-accent));
  border-radius: 32px;
}

.rounded-24 {
  border-radius: 24px;
}
.white-8 {
  color: rgba(255, 255, 255, 0.8);
}
.white-5 {
  color: rgba(255, 255, 255, 0.5);
}

.cta-final-btn {
  border-radius: 12px;
  &:hover {
    transform: scale(1.05);
  }
}

.leading-relaxed {
  line-height: 1.8;
}

.demo-card {
  width: 100%;
  max-width: 600px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-height: 85vh;
  display: flex;
  flex-direction: column;
}

.demo-icon-wrapper {
  min-width: 50px;
  height: 50px;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.demo-step-item {
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
}

.bg-dark-light {
  background: rgba(0, 0, 0, 0.2);
}

.feature-detail-card {
  width: 100%;
  max-width: 800px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
}

.flex-fixed {
  flex: 0 0 auto;
}

.card-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
}

.icon-box-large {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.benefit-item {
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.bg-black-opacity {
  background: rgba(0, 0, 0, 0.3);
}

.close-btn {
  z-index: 100;
  background: rgba(255, 255, 255, 0.05);
}

@media (max-width: 600px) {
  .full-width-mobile {
    width: 100% !important;
  }
  .q-py-100 {
    padding: 60px 0 !important;
  }
  .hero-subtitle {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .section-title {
    font-size: 2.2rem !important;
    line-height: 1.2 !important;
  }
  .hero-title {
    text-align: center;
  }
}
</style>
