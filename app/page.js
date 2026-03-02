'use client'
import SuperBotAssistant from '@/components/SuperBotAssistant'

export default function ReussitessClone() {
  return (
    <main style={{ 
      background: '#0f172a', 
      minHeight: '100vh', 
      width: '100vw',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Ton bot avec toutes ses fonctions originales */}
      <SuperBotAssistant />
      
      <style jsx global>{`
        body { margin: 0; padding: 0; background: #0f172a; }
        /* Conservation de l'apparence originale */
      `}</style>
    </main>
  )
}
