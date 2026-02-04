import { createClient } from '@supabase/supabase-js'
import { boot } from 'quasar/wrappers'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)
const user = ref(null)

export default boot(async ({ app, router }) => {
  // Check current session
  const {
    data: { session },
  } = await supabase.auth.getSession()
  user.value = session?.user || null

  // Listen for auth changes
  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user || null
    if (!session && router.currentRoute.value.meta.requiresAuth) {
      router.push('/login')
    }
  })

  app.config.globalProperties.$supabase = supabase
  app.config.globalProperties.$user = user
})

export { supabase, user }
