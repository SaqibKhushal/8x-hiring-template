'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useAuth } from './auth-context'
import { supabase } from '@/lib/supabase/client'
import type { SubscriptionTier } from '@/types/database'

interface ProfileData {
  subscription_tier: SubscriptionTier
  credits_remaining: number
}

interface SubscriptionContextType {
  tier: SubscriptionTier
  creditsRemaining: number
  loading: boolean
  refreshSubscription: () => Promise<void>
  canGenerate: boolean
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [tier, setTier] = useState<SubscriptionTier>('free')
  const [creditsRemaining, setCreditsRemaining] = useState(0)
  const [loading, setLoading] = useState(true)

  const refreshSubscription = async () => {
    if (!user) {
      setTier('free')
      setCreditsRemaining(0)
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('subscription_tier, credits_remaining')
        .eq('id', user.id)
        .single<ProfileData>()

      if (error) throw error

      if (data) {
        setTier(data.subscription_tier as SubscriptionTier)
        setCreditsRemaining(data.credits_remaining)
      }
    } catch (error) {
      console.error('Error fetching subscription:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshSubscription()
  }, [user])

  const canGenerate = tier === 'pro' || creditsRemaining > 0

  const value = {
    tier,
    creditsRemaining,
    loading,
    refreshSubscription,
    canGenerate,
  }

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
}