import { computed } from 'vue'
import { useStore } from 'vuex'

export const useLanguage = () => {
  const { state, commit } = useStore()

  const activeLanguage = computed(() => state.activeLanguage)

  const setActiveLanguage = (language) => {
    commit('setActiveLanguage', language)
  }

  return {
    activeLanguage,
    setActiveLanguage
  }
}
