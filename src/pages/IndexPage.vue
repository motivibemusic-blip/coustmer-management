<template>
  <q-page class="bg-black text-white">
    <!-- Hero Section -->
    <!-- Hero Section -->
    <section class="min-h-screen flex flex-center relative-position overflow-hidden q-py-xl">
      <!-- Background Effects -->
      <div class="absolute-full bg-gradient-radial"></div>

      <!-- Abstract Animated Shapes -->
      <div class="absolute-top-right q-mr-xl q-mt-xl opacity-20 floating-element">
        <div class="circle-blur bg-primary"></div>
      </div>

      <div class="container relative-position z-10 q-px-md">
        <div class="row items-center q-col-gutter-xl">
          <!-- Text Content (Left) -->
          <div class="col-12 col-md-6 text-left">
            <div class="row items-center q-mb-md">
              <div
                class="bg-red-900 q-px-sm q-py-xs rounded-borders text-caption text-weight-bold text-uppercase q-mr-sm"
                style="
                  background: rgba(216, 0, 39, 0.2);
                  border: 1px solid var(--q-primary);
                  color: #ffeb3b;
                "
              >
                <q-icon name="bolt" size="14px" /> v2.0 Released
              </div>
              <span class="text-grey-5 text-caption">The future of CRM is here</span>
            </div>

            <h1 class="text-h2 text-weight-bolder q-mt-none q-mb-md hero-text leading-tight">
              Data Driven. <br />
              <span class="text-transparent bg-clip-text bg-gradient-text">Customer</span> Focused.
            </h1>

            <p
              class="text-subtitle1 text-grey-4 q-mb-xl"
              style="max-width: 550px; line-height: 1.6; font-size: 1.1rem"
            >
              Manage leads, close deals, and support customers with a platform designed for speed
              and elegance.
            </p>

            <div class="row q-gutter-md">
              <q-btn
                size="lg"
                color="primary"
                text-color="black"
                label="Start Free Trial"
                no-caps
                class="text-weight-bold shadow-10 q-px-xl"
                rounded
                icon-right="arrow_forward"
              />
              <q-btn
                size="lg"
                outline
                color="white"
                label="View Demo"
                no-caps
                class="q-px-lg"
                rounded
              />
            </div>

            <div class="q-mt-lg row items-center text-grey-6 text-caption">
              <q-icon name="check" color="primary" class="q-mr-xs" /> No credit card required
              <q-icon name="check" color="primary" class="q-ml-md q-mr-xs" /> 14-day free trial
            </div>
          </div>

          <!-- Visual/Graphic (Right) -->
          <div class="col-12 col-md-6 relative-position">
            <div class="glass-card q-pa-md relative-position">
              <!-- Floating Elements -->
              <div
                class="absolute-top-right q-ma-md bg-dark text-white q-pa-xs rounded-borders shadow-5 text-caption z-top"
              >
                <div class="row items-center">
                  <div
                    class="q-mr-xs bg-green rounded-circle"
                    style="width: 8px; height: 8px"
                  ></div>
                  Live
                </div>
              </div>

              <q-img
                src="https://cdn.quasar.dev/img/parallax2.jpg"
                class="rounded-borders dashboard-mockup"
                style="mask-image: linear-gradient(to bottom, black 80%, transparent 100%)"
              >
                <div class="absolute-bottom-left q-ma-md">
                  <div class="bg-black-translucent q-pa-sm rounded-borders backdrop-blur">
                    <div class="text-weight-bold">Revenue Growth</div>
                    <div class="text-h4 text-primary">+127%</div>
                  </div>
                </div>
              </q-img>
            </div>

            <!-- Decorative backing -->
            <div
              class="absolute-bottom-right bg-primary opacity-20"
              style="
                width: 300px;
                height: 300px;
                filter: blur(80px);
                z-index: -1;
                transform: translate(20%, 20%);
              "
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners / Trusted By -->
    <section class="q-py-lg bg-dark-2">
      <div class="container text-center">
        <div class="text-grey-6 text-uppercase q-mb-lg letter-spacing-2">
          Trusted by 500+ Companies
        </div>
        <div class="row justify-center items-center q-gutter-xl opacity-50 grayscale hover-color">
          <q-icon name="rocket" size="40px" />
          <q-icon name="spa" size="40px" />
          <q-icon name="change_history" size="40px" />
          <q-icon name="architecture" size="40px" />
          <q-icon name="psychology" size="40px" />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="q-py-xl relative-position">
      <div class="container q-px-md">
        <div class="row q-col-gutter-xl items-center">
          <div class="col-12 col-md-5">
            <h2 class="text-h3 text-weight-bold q-mb-md">
              Everything you need to <span class="text-primary">Succeed</span>.
            </h2>
            <p class="text-h6 text-grey-5 q-mb-lg">
              Stop juggling multiple tools. Our system unifies your entire customer workflow into
              one seamless interface.
            </p>

            <q-list padding class="text-lg">
              <q-item v-for="n in 3" :key="n" class="q-pl-none">
                <q-item-section avatar>
                  <q-icon name="check_circle" color="primary" />
                </q-item-section>
                <q-item-section class="text-h6">
                  {{
                    n === 1
                      ? 'Real-time Analytics Dashboard'
                      : n === 2
                        ? 'Automated Email Marketing'
                        : 'Seamless 3rd Party Integrations'
                  }}
                </q-item-section>
              </q-item>
            </q-list>

            <q-btn flat class="q-mt-md" color="primary" label="View all features ->" />
          </div>

          <div class="col-12 col-md-7">
            <div class="row q-col-gutter-md">
              <div v-for="(feature, index) in features" :key="index" class="col-12 col-sm-6">
                <q-card class="bg-dark-card text-white no-shadow border-gray q-pa-sm hover-effect">
                  <q-card-section>
                    <div class="q-mb-md bg-dark-light rounded-borders inline-block q-pa-sm">
                      <q-icon :name="feature.icon" color="primary" size="30px" />
                    </div>
                    <div class="text-h5 text-weight-bold q-mb-sm">{{ feature.title }}</div>
                    <div class="text-grey-5">{{ feature.desc }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="q-py-xl bg-gradient-red text-white">
      <div class="container text-center">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <div class="text-h2 text-weight-bolder">99%</div>
            <div class="text-subtitle1 text-grey-3">Customer Satisfaction</div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-h2 text-weight-bolder">24/7</div>
            <div class="text-subtitle1 text-grey-3">Support Availability</div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-h2 text-weight-bolder">10k+</div>
            <div class="text-subtitle1 text-grey-3">Active Users</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="q-py-xl q-my-xl">
      <div class="container q-px-md">
        <q-card class="bg-dark-card border-red relative-position overflow-hidden">
          <div
            class="absolute-right full-height w-50 bg-primary opacity-10"
            style="transform: skewX(-20deg) translateX(50px)"
          ></div>

          <q-card-section class="q-pa-xl text-center">
            <h2 class="text-h3 text-weight-bold q-mb-md">Ready to transform your workflow?</h2>
            <p class="text-h6 text-grey-5 q-mb-xl">
              Join thousands of companies managing their customers better.
            </p>
            <q-btn
              size="lg"
              color="primary"
              text-color="black"
              label="Start your 14-day free trial"
              no-caps
              rounded
              class="text-weight-bold"
            />
          </q-card-section>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script setup>
const features = [
  {
    icon: 'manage_accounts',
    title: 'Contact Management',
    desc: 'Centralize your customer data. View history, notes, and preferences in one place.',
  },
  {
    icon: 'bar_chart',
    title: 'Sales Analytics',
    desc: 'Deep dive into your revenue sales funnels with powerful visualization tools.',
  },
  {
    icon: 'support_agent',
    title: 'Help Desk',
    desc: 'Integrated ticketing system to resolve customer issues faster than ever.',
  },
  {
    icon: 'campaign',
    title: 'Marketing Automation',
    desc: 'Set up campaigns that run on autopilot and drive conversion.',
  },
]
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.bg-gradient-radial {
  background: radial-gradient(circle at 50% 0%, #33050a 0%, #000000 70%);
}

.bg-dark-2 {
  background-color: #0a0a0a;
}
.bg-dark-card {
  background-color: #111111;
}

.border-gray {
  border: 1px solid #222;
}

.border-red {
  border: 1px solid var(--q-primary);
}

.hover-effect {
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: var(--q-primary);
    box-shadow: 0 10px 30px rgba(216, 0, 39, 0.1);
  }
}

.hero-text {
  line-height: 1.1;
  font-size: 3.5rem;
  @media (max-width: 600px) {
    font-size: 2.25rem;
  }
}

.letter-spacing-2 {
  letter-spacing: 2px;
}

.grayscale {
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.hover-color:hover .grayscale {
  filter: grayscale(0%);
}

.dashboard-mockup {
  border: 1px solid #333;
  box-shadow: 0 0 50px rgba(216, 0, 39, 0.2);
}
</style>
