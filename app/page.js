'use client'
import SuperBotAssistant from '@/components/SuperBotAssistant'

export default function ReussitessAIApp() {
  return (
    <main style={{ background: '#0f172a', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <SuperBotAssistant />
      <style jsx global>{`
        body { margin: 0; padding: 0; background: #0f172a; overflow: hidden; }
      `}</style>
    </main>
  )
}
