// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, asunto, mensaje } = body

    // Validación básica
    if (!nombre || !email || !telefono || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Enviar email
    const data = await resend.emails.send({
      from: 'SIIP Contacto <onboarding@resend.dev>', // Cambiar cuando tengas dominio verificado
      to: ['laureanoselmi400@gmail.com'], // Tu email de destino
      replyTo: email, // Email del cliente
      subject: `Nuevo contacto: ${asunto}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #000; margin-bottom: 20px;">Nueva consulta desde el sitio web</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 10px 0;"><strong>Nombre/Empresa:</strong> ${nombre}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${telefono}</p>
            <p style="margin: 10px 0;"><strong>Asunto:</strong> ${asunto}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #000; margin-bottom: 20px;">
            <h3 style="color: #000; margin-top: 0;">Mensaje:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Este mensaje fue enviado desde el formulario de contacto de SIIP
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Error al enviar email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    )
  }
}
