import { ref, watch, onMounted } from 'vue'

type PortfolioType = 'laravel' | 'dotnet'

const currentPortfolio = ref<PortfolioType>('laravel')

export function usePortfolio() {
  // Initialiser depuis l'URL ou localStorage
  const initializePortfolio = () => {
    const params = new URLSearchParams(window.location.search)
    const urlPortfolio = params.get('portfolio') as PortfolioType

    if (urlPortfolio === 'laravel' || urlPortfolio === 'dotnet') {
      currentPortfolio.value = urlPortfolio
    } else {
      const stored = localStorage.getItem('portfolio') as PortfolioType
      currentPortfolio.value = stored === 'laravel' || stored === 'dotnet' ? stored : 'laravel'
    }
  }

  // Mettre à jour l'URL quand le portfolio change
  const updateURL = (portfolio: PortfolioType) => {
    const url = new URL(window.location.href)
    url.searchParams.set('portfolio', portfolio)
    window.history.pushState({}, '', url)
  }

  const togglePortfolio = () => {
    currentPortfolio.value = currentPortfolio.value === 'laravel' ? 'dotnet' : 'laravel'
  }

  const setPortfolio = (type: PortfolioType) => {
    currentPortfolio.value = type
  }

  // Synchroniser localStorage et URL à chaque changement
  watch(currentPortfolio, (newValue) => {
    localStorage.setItem('portfolio', newValue)
    updateURL(newValue)
  })

  // Initialiser au montage
  onMounted(() => {
    initializePortfolio()
  })

  return {
    currentPortfolio,
    togglePortfolio,
    setPortfolio,
    initializePortfolio,
    isLaravel: () => currentPortfolio.value === 'laravel',
    isDotnet: () => currentPortfolio.value === 'dotnet',
  }
}
