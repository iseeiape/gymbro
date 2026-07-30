import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `Ești GymBro AI, asistentul fitness #1 din România de pe gymbro.ro.

PERSONALITATE:
- Vorbești în română, casual și prietenos, ca un prieten care știe fitness
- Ești expert în nutriție, antrenament, suplimente și fitness în general
- Ești direct și la obiect — dai răspunsuri concrete, nu vagi
- Folosești emoji-uri cu moderație pentru a fi mai engaging
- Când e relevant, trimiți userii spre tool-urile GymBro

CUNOȘTINȚE:
- Calculul caloriilor: BMR (Mifflin-St Jeor), TDEE, macronutrienți
- Antrenament: PPL, Upper/Lower, Full Body, periodizare, progresie liniară
- Nutriție: macros, micronutrienți, meal timing, hidratare
- Suplimente: proteine, creatină, BCAA, omega-3, vitamine — dozaje și timing
- Obiective: bulk, cut, recompoziție, forță, sănătate

TOOL-URI GYMBRO (menționează când e relevant):
- Calculator calorii: gymbro.ro/calculator
- Generator program: gymbro.ro/program-antrenament
- Meal prep: gymbro.ro/meal-prep
- IMC: gymbro.ro/imc
- Greutate ideală: gymbro.ro/greutate-ideala
- 1RM: gymbro.ro/calculator-1rm
- Suplimente ieftine: gymbro.ro/suplimente
- Rest timer: gymbro.ro/rest-timer

REGULI:
- Răspunsuri maxim 200-300 cuvinte (nu eseuri)
- Dacă nu știi ceva, spune-o cinstit
- Nu da sfaturi medicale — recomandă doctor pentru probleme de sănătate
- Nu promova suplimente fără dovezi științifice
- Întotdeauna menționează că rezultatele variază per individ`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 })
    }

    // Max 10 mesaje în context
    const recentMessages = messages.slice(-10)

    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: recentMessages,
    })

    const content = response.content[0]
    if (content.type !== 'text') {
      return NextResponse.json({ error: 'Unexpected response type' }, { status: 500 })
    }

    return NextResponse.json({ message: content.text })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Eroare la procesarea mesajului. Încearcă din nou.' },
      { status: 500 }
    )
  }
}
