<template>
  <q-page class="text-white q-pa-lg">
    <div class="container q-mx-auto">
      <!-- Dashboard Header -->
      <div class="row items-center justify-between q-mb-xl animate-fade">
        <div>
          <h1 class="text-h4 text-weight-bolder q-ma-none">
            Welcome Back,
            <span class="text-gradient">{{ user?.user_metadata?.full_name || 'User' }}</span>
          </h1>
          <p class="text-grey-5 q-mt-xs">Here's what is happening with your customers today.</p>
        </div>
        <div class="row q-gutter-md">
          <q-btn
            unelevated
            color="white"
            text-color="dark"
            label="Export Data"
            no-caps
            class="rounded-12"
            icon="download"
          />
          <q-btn
            unelevated
            color="primary"
            label="Add New Customer"
            no-caps
            class="rounded-12"
            icon="add"
          />
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="row q-col-gutter-lg q-mb-xl">
        <div v-for="stat in quickStats" :key="stat.label" class="col-12 col-sm-6 col-md-3">
          <q-card class="stat-card glass-card q-pa-lg">
            <div class="row items-center justify-between q-mb-md">
              <div class="icon-box-small" :style="{ background: stat.bg }">
                <q-icon :name="stat.icon" color="white" size="24px" />
              </div>
              <div class="text-green text-body2 text-weight-bold">{{ stat.trend }}</div>
            </div>
            <div class="text-h4 text-weight-bolder">{{ stat.value }}</div>
            <div class="text-grey-6 text-caption text-uppercase tracking-widest">
              {{ stat.label }}
            </div>
          </q-card>
        </div>
      </div>

      <!-- Activity & Charts -->
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-8">
          <q-card class="glass-card q-pa-xl h-full">
            <div class="row items-center justify-between q-mb-xl">
              <h3 class="text-h6 text-weight-bold q-ma-none">Revenue Growth</h3>
              <q-btn-dropdown
                flat
                no-caps
                label="Last 7 Days"
                color="grey-7"
                class="text-caption"
              />
            </div>
            <!-- Mock Chart Area -->
            <div class="mock-chart-container flex flex-center">
              <div class="chart-visual">
                <div
                  v-for="n in 7"
                  :key="n"
                  class="bar"
                  :style="{ height: 20 + Math.random() * 80 + '%' }"
                ></div>
              </div>
            </div>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="glass-card q-pa-xl h-full">
            <h3 class="text-h6 text-weight-bold q-mb-xl">Recent Customers</h3>

            <div v-if="loading" class="flex flex-center q-pa-xl">
              <q-spinner-dots color="primary" size="40px" />
            </div>

            <q-list v-else dark separator class="q-gutter-sm">
              <q-item v-for="customer in customers" :key="customer.id" class="q-px-none">
                <q-item-section avatar>
                  <q-avatar
                    size="40px"
                    font-size="20px"
                    :color="customer.avatar_color || 'primary'"
                    text-color="white"
                  >
                    {{ customer.name.charAt(0) }}
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-white">{{
                    customer.name
                  }}</q-item-label>
                  <q-item-label caption class="text-grey-6">{{ customer.status }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <div class="text-white text-weight-bold">${{ customer.total_spent }}</div>
                </q-item-section>
              </q-item>

              <div v-if="customers.length === 0" class="text-center text-grey-6 q-pa-md">
                No customers found.
              </div>
            </q-list>
            <q-btn
              flat
              color="primary"
              label="View All Transactions"
              class="full-width q-mt-xl no-caps"
            />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'src/boot/supabase'

const loading = ref(true)
const customers = ref([])

const quickStats = [
  {
    label: 'Total Revenue',
    value: '$124,500',
    icon: 'payments',
    trend: '+12%',
    bg: 'linear-gradient(135deg, #7c4dff, #651fff)',
  },
  {
    label: 'Active Leads',
    value: '1,240',
    icon: 'hub',
    trend: '+8%',
    bg: 'linear-gradient(135deg, #00d2d3, #00bcd4)',
  },
  {
    label: 'Close Rate',
    value: '24%',
    icon: 'trending_up',
    trend: '+4%',
    bg: 'linear-gradient(135deg, #ff9f43, #ff6b6b)',
  },
  {
    label: 'Avg Deal',
    value: '$4,200',
    icon: 'stars',
    trend: '+2%',
    bg: 'linear-gradient(135deg, #2ecc71, #27ae60)',
  },
]

const fetchCustomers = async () => {
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)

    if (error) throw error
    customers.value = data
  } catch (error) {
    console.error('Error fetching customers:', error.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCustomers()
})
</script>

<style lang="scss" scoped>
.container {
  max-width: 1300px;
}
.rounded-12 {
  border-radius: 12px;
}

.stat-card {
  border-radius: 24px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
}

.icon-box-small {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mock-chart-container {
  height: 300px;
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
}

.chart-visual {
  display: flex;
  align-items: flex-end;
  gap: 15px;
  height: 150px;
}

.bar {
  width: 30px;
  background: linear-gradient(to top, var(--q-primary), var(--q-secondary));
  border-radius: 8px 8px 0 0;
  transition: height 1s ease;
}

.h-full {
  height: 100%;
}

.animate-fade {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
