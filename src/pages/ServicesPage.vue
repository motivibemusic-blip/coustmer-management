<template>
  <q-page class="text-white q-py-xl">
    <div class="container q-px-md">
      <div class="text-center q-mb-xl q-pt-xl">
        <h1 class="text-h2 text-weight-bolder q-mb-md">
          Our <span class="text-gradient">Services</span>
        </h1>
        <p class="text-h6 text-grey-5 q-mx-auto" style="max-width: 700px">
          Comprehensive solutions tailored to elevate your business performance and customer
          satisfaction.
        </p>
      </div>

      <div class="row q-col-gutter-xl">
        <div v-for="(service, index) in services" :key="index" class="col-12 col-md-4">
          <q-intersection once transition="fade">
            <div class="service-card glass-card">
              <div class="icon-wrapper q-mb-lg" :style="{ background: service.bg }">
                <q-icon :name="service.icon" color="white" size="32px" />
              </div>
              <h3 class="text-h5 text-weight-bold q-mb-md">{{ service.title }}</h3>
              <p class="text-grey-5 leading-relaxed q-mb-lg">{{ service.desc }}</p>
              <q-list dense dark class="q-gutter-sm">
                <q-item v-for="feature in service.features" :key="feature" class="q-pa-none">
                  <q-item-section avatar class="min-width-0 q-pr-sm">
                    <q-icon name="check_circle" color="secondary" size="18px" />
                  </q-item-section>
                  <q-item-section class="text-caption text-grey-4">{{ feature }}</q-item-section>
                </q-item>
              </q-list>
            </div>
          </q-intersection>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const services = [
  {
    title: 'Customer Analytics',
    icon: 'bar_chart',
    bg: 'linear-gradient(135deg, #7c4dff, #651fff)',
    desc: 'Uncover hidden patterns in your customer data with our proprietary AI engine.',
    features: [
      'Behavioral Analysis',
      'Predictive Retention',
      'Custom Reporting',
      'Real-time Dashboards',
    ],
  },
  {
    title: 'Marketing Automation',
    icon: 'auto_fix_high',
    bg: 'linear-gradient(135deg, #00d2d3, #00bcd4)',
    desc: 'Run multi-channel campaigns on autopilot while maintaining a personal touch.',
    features: ['Dynamic Email Flows', 'SMS Marketing', 'Social Ad Management', 'Lead Scoring'],
  },
  {
    title: 'Sales CRM',
    icon: 'payments',
    bg: 'linear-gradient(135deg, #ff9f43, #ff6b6b)',
    desc: 'Close deals faster with a visual pipeline and automated follow-ups.',
    features: [
      'Pipeline Management',
      'E-signature Integration',
      'Proposal Generation',
      'Call Tracking',
    ],
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

.service-card {
  padding: 40px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    border-color: var(--q-primary);
    background: rgba(255, 255, 255, 0.05);
  }
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.min-width-0 {
  min-width: 30px;
}
.leading-relaxed {
  line-height: 1.6;
}
</style>
