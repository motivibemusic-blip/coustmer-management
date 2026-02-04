<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div class="glass-card q-pa-xl" style="border-radius: 40px; max-width: 500px">
      <div style="font-size: 15vh" class="text-weight-bolder text-gradient q-mb-md">404</div>

      <div class="text-h4 text-weight-bold q-mb-md">Lost in Space?</div>
      <p class="text-grey-5 q-mb-xl">
        The page you're looking for has drifted away into the nebula. Let's get you back to the
        command center.
      </p>

      <q-btn
        class="q-px-xl text-weight-bold"
        color="primary"
        unelevated
        to="/"
        label="Back to Mission Control"
        no-caps
        rounded
        size="lg"
      />
    </div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, var(--q-primary), var(--q-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
