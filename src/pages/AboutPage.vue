<template>
  <q-page class="text-white q-py-xl">
    <!-- Hero -->
    <div class="container q-px-md q-pt-xl">
      <div class="row items-center q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-intersection once transition="fade">
            <h1 class="text-h2 text-weight-bolder q-mb-md">
              We're on a <span class="text-gradient">Mission</span> to Humanize CRM.
            </h1>
            <p class="text-h6 text-grey-5 leading-relaxed q-mb-xl">
              Founded in 2020, NexusCRM set out to bridge the gap between complex enterprise
              software and intuitive user experience. We believe that managing relationships
              shouldn't feel like a chore.
            </p>
            <div class="row q-gutter-md">
              <div class="stat-mini">
                <div class="text-h4 text-weight-bold">50+</div>
                <div class="text-grey-6">Employees</div>
              </div>
              <div class="stat-mini">
                <div class="text-h4 text-weight-bold">12</div>
                <div class="text-grey-6">Global Offices</div>
              </div>
            </div>
          </q-intersection>
        </div>
        <div class="col-12 col-md-6">
          <q-img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            class="rounded-24 shadow-24"
          />
        </div>
      </div>
    </div>

    <!-- Values -->
    <div class="container q-px-md q-py-100">
      <div class="text-center q-mb-xl">
        <h2 class="text-h3 text-weight-bold">Our Core <span class="text-gradient">Values</span></h2>
      </div>
      <div class="row q-col-gutter-lg">
        <div v-for="val in values" :key="val.title" class="col-12 col-md-4">
          <div class="value-card glass-card">
            <q-icon :name="val.icon" color="primary" size="40px" class="q-mb-md" />
            <h3 class="text-h5 text-weight-bold q-mb-sm">{{ val.title }}</h3>
            <p class="text-grey-5">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const values = [
  {
    icon: 'favorite',
    title: 'Customer First',
    desc: 'Every feature we build starts with a customer problem.',
  },
  {
    icon: 'psychology',
    title: 'Deep Simplicity',
    desc: 'Complexity is easy. Simplicity is hard work, but worth it.',
  },
  {
    icon: 'public',
    title: 'Radial Transparency',
    desc: 'We value honesty and open communication in everything we do.',
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
.rounded-24 {
  border-radius: 24px;
}
.q-py-100 {
  padding: 100px 0;
}

.value-card {
  padding: 40px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  height: 100%;
}

.leading-relaxed {
  line-height: 1.8;
}
</style>
