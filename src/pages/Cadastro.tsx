import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

const LOGO = 'https://i.imgur.com/MwZWtw9.jpeg'
const IMG_BG = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'

export default function Cadastro() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    empresa: '',
    telefone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErro('')
  }

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro('')

    if (!form.nome || !form.email || !form.senha || !form.empresa) {
      setErro('Preencha todos os campos obrigatórios.')
      return
    }

    if (form.senha !== form.confirmarSenha) {
      setErro('As senhas não coincidem.')
      return
    }

    if (form.senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.senha,
      options: {
        data: {
          nome: form.nome,
          empresa: form.empresa,
          telefone: form.telefone,
        }
      }
    })

    setLoading(false)

    if (error) {
      setErro(error.message === 'User already registered' ? 'Este email já está cadastrado.' : 'Erro ao criar conta. Tente novamente.')
      return
    }

    setSucesso(true)
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

  if (sucesso) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ textAlign: 'center', maxWidth: 480, padding: '0 24px' }}>
          <div style={{ width: 72, height: 72, background: '#DCFCE7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 32 }}>✓</div>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 28, fontWeight: 800, color: '#0D1B3E', marginBottom: 12 }}>Verifique seu email!</h2>
          <p style={{ fontSize: 16, color: '#4A5568', lineHeight: 1.7, marginBottom: 32 }}>
            Enviamos um link de confirmação para <strong>{form.email}</strong>. Clique no link para ativar sua conta e começar a usar o Rastro.
          </p>
          <p style={{ fontSize: 13, color: '#94A3B8', marginBottom: 24 }}>Não recebeu? Verifique sua caixa de spam.</p>
          <button onClick={() => navigate('/login')} style={{ padding: '14px 32px', background: '#1B2D6B', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
            Ir para o Login
          </button>
        </div>
      </div>
    )
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
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>Comece a economizar hoje.</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40 }}>Cadastre sua frota em minutos e veja quanto está perdendo por falta de gestão de pneus.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '✓', text: 'Cadastro gratuito — sem cartão de crédito' },
                { icon: '✓', text: 'Configuração em menos de 5 minutos' },
                { icon: '✓', text: 'Suporte em português incluído' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 24, height: 24, background: '#FFC107', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1B2D6B', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{item.icon}</div>
                  <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>© 2026 Rastro. Todos os direitos reservados.</div>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '48px 64px' }}>
        <div style={{ width: '100%', maxWidth: 420 }}>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 28, fontWeight: 800, color: '#0D1B3E', marginBottom: 8 }}>Criar sua conta</h1>
          <p style={{ fontSize: 15, color: '#4A5568', marginBottom: 32 }}>
            Já tem uma conta?{' '}
            <span onClick={() => navigate('/login')} style={{ color: '#1B2D6B', fontWeight: 600, cursor: 'pointer' }}>Entrar</span>
          </p>

          <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6, display: 'block' }}>Nome completo *</label>
              <input name="nome" value={form.nome} onChange={handleChange} placeholder="João Silva" style={estiloInput} />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6, display: 'block' }}>Nome da empresa *</label>
              <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Transportadora Silva" style={estiloInput} />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6, display: 'block' }}>Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="joao@empresa.com" style={estiloInput} />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6, display: 'block' }}>Telefone</label>
              <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="(11) 99999-9999" style={estiloInput} />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6, display: 'block' }}>Senha *</label>
              <input name="senha" type="password" value={form.senha} onChange={handleChange} placeholder="Mínimo 6 caracteres" style={estiloInput} />
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6, display: 'block' }}>Confirmar senha *</label>
              <input name="confirmarSenha" type="password" value={form.confirmarSenha} onChange={handleChange} placeholder="Repita a senha" style={estiloInput} />
            </div>

            {erro && (
              <div style={{ background: '#FEE2E2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 16px', fontSize: 14, color: '#DC2626' }}>
                {erro}
              </div>
            )}

            <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: loading ? '#94A3B8' : '#1B2D6B', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: "'Inter', sans-serif", marginTop: 8 }}>
              {loading ? 'Criando conta...' : 'Criar conta gratuita'}
            </button>

            <p style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', lineHeight: 1.6 }}>
              Ao criar uma conta, você concorda com nossos{' '}
              <span style={{ color: '#1B2D6B', cursor: 'pointer' }}>Termos de Uso</span>
              {' '}e{' '}
              <span style={{ color: '#1B2D6B', cursor: 'pointer' }}>Política de Privacidade</span>.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}