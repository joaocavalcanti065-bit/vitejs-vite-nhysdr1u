import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

const LOGO = 'https://i.imgur.com/MwZWtw9.jpeg'
const IMG_BG = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'

export default function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const [form, setForm] = useState({ email: '', senha: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErro('')
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro('')

    if (!form.email || !form.senha) {
      setErro('Preencha email e senha.')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.senha,
    })

    setLoading(false)

    if (error) {
      if (error.message === 'Email not confirmed') {
        setErro('Confirme seu email antes de entrar. Verifique sua caixa de entrada.')
      } else if (error.message === 'Invalid login credentials') {
        setErro('Email ou senha incorretos.')
      } else {
        setErro('Erro ao entrar. Tente novamente.')
      }
      return
    }

    navigate('/dashboard')
  }

  const estiloInput = {
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid #E2E8F0',
    borderRadius: 8,
    fontSize: 15,
    fontFamily: "'Inter', sans-serif",
    color: '#1A1F36',
    outline: 'none',
    background: '#fff',
    boxSizing: 'border-box' as const,
  }

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap');`}</style>

      {/* LADO ESQUERDO */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={IMG_BG} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0D1B3E 0%, #1B2D6B 60%, rgba(27,45,107,0.85) 100%)' }}></div>
        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '48px' }}>
          <img src={LOGO} alt="Rastro" style={{ height: 48, objectFit: 'contain', filter: 'brightness(0) invert(1)', alignSelf: 'flex-start' }} />
          <div>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>Bem-vindo de volta.</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40 }}>Acesse sua conta e continue gerenciando sua frota com inteligência.</p>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: 24 }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
                {[1,2,3,4,5].map(star => <span key={star} style={{ color: '#FFC107', fontSize: 18 }}>★</span>)}
              </div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 16, fontStyle: 'italic' }}>
                "Em 3 meses com o Rastro reduzi meu gasto com pneus em quase 28%. O controle de estoque acabou com os desvios que eu tinha."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#FFC107', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1B2D6B', fontWeight: 800, fontSize: 14 }}>C</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Carlos Mendes</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>Dono — Transportadora Mendes</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>© 2026 Rastro. Todos os direitos reservados.</div>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '48px 64px' }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 28, fontWeight: 800, color: '#0D1B3E', marginBottom: 8 }}>Entrar na sua conta</h1>
          <p style={{ fontSize: 15, color: '#4A5568', marginBottom: 32 }}>
            Não tem conta?{' '}
            <span onClick={() => navigate('/cadastro')} style={{ color: '#1B2D6B', fontWeight: 600, cursor: 'pointer' }}>Criar conta gratuita</span>
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6, display: 'block' }}>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="joao@empresa.com" style={estiloInput} />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>Senha</label>
                <span style={{ fontSize: 13, color: '#1B2D6B', cursor: 'pointer', fontWeight: 500 }}>Esqueci minha senha</span>
              </div>
              <input name="senha" type="password" value={form.senha} onChange={handleChange} placeholder="Sua senha" style={estiloInput} />
            </div>

            {erro && (
              <div style={{ background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 16px', fontSize: 14, color: '#DC2626' }}>
                {erro}
              </div>
            )}

            <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: loading ? '#94A3B8' : '#1B2D6B', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: "'Inter', sans-serif" }}>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}