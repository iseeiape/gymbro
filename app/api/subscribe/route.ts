import { NextRequest, NextResponse } from 'next/server'

const BREVO_KEY = process.env.BREVO_API_KEY || ''

const tagMap: Record<string, string> = {
  'plan-alimentar': 'lead-plan-alimentar',
  'ghid-sala': 'lead-ghid-sala',
  'cheat-sheet': 'lead-cheat-sheet',
}

// Template IDs create în Brevo
const templateMap: Record<string, number> = {
  'plan-alimentar': 1,
  'ghid-sala': 2,
  'cheat-sheet': 3,
}

export async function POST(req: NextRequest) {
  const { email, leadMagnet } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email invalid' }, { status: 400 })
  }

  try {
    // 1. Adaugă contact în Brevo
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': BREVO_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        attributes: { LEAD_MAGNET: leadMagnet || 'general' },
        tags: [tagMap[leadMagnet] || 'lead-general'],
        updateEnabled: true,
      }),
    })

    if (!contactRes.ok && contactRes.status !== 204) {
      const err = await contactRes.json().catch(() => ({}))
      if ((err as { code?: string })?.code !== 'duplicate_parameter') {
        throw new Error((err as { message?: string })?.message || 'Brevo error')
      }
    }

    // 2. Trimite email welcome cu template-ul corespunzător
    const templateId = templateMap[leadMagnet] || 1
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email }],
        templateId,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Eroare server'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
