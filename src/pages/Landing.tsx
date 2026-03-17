import { useNavigate } from 'react-router-dom'

const LOGO = 'https://i.imgur.com/MwZWtw9.jpeg'
const IMG_TRUCK = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80'
const IMG_TIRE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
const IMG_OWNER = 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&q=80'

const Icon = ({ d, size = 24, color = '#1B2D6B' }: { d: string, size?: number, color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1A1F36', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
        a { text-decoration: none; color: inherit; }
        button { font-family: 'Inter', sans-serif; cursor: pointer; transition: all 0.18s ease; }
        button:hover { opacity: 0.88; transform: translateY(-1px); }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #E8ECF4', padding: '0 6%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <img src={LOGO} alt="Rastro" style={{ height: 48, objectFit: 'contain' }} />
          <div style={{ display: 'flex', gap: 36 }}>
            {[['#dados','Dados de mercado'],['#funcionalidades','Funcionalidades'],['#como-funciona','Como funciona']].map(([href,label]) => (
              <a key={href} href={href} style={{ fontSize: 14, fontWeight: 500, color: '#4A5568', letterSpacing: '-0.01em' }}>{label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => navigate('/login')} style={{ padding: '10px 22px', border: '1.5px solid #1B2D6B', color: '#1B2D6B', background: 'transparent', borderRadius: 8, fontSize: 14, fontWeight: 600 }}>Entrar</button>
            <button onClick={() => navigate('/cadastro')} style={{ padding: '10px 22px', background: '#1B2D6B', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600 }}>Criar conta</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '130px 6% 90px', background: 'linear-gradient(135deg, #fff 60%, #EEF2FF 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: 100, padding: '6px 16px', fontSize: 11, fontWeight: 700, color: '#1B2D6B', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, background: '#FFC107', borderRadius: '50%', display: 'inline-block' }}></span>
              Gestão inteligente de pneus
            </div>
            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 54, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: '#0D1B3E', marginBottom: 22 }}>
              Cada pneu.<br />Cada real.<br />
              <span style={{ color: '#FFC107' }}>Sob controle.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.72, color: '#4A5568', marginBottom: 38, maxWidth: 460 }}>
              Gestão de pneus baseada em dados reais — reduza custos com combustível, elimine desvios de estoque e aumente a vida útil da sua frota.
            </p>
            <div style={{ display: 'flex', gap: 14, marginBottom: 36 }}>
              <button onClick={() => navigate('/cadastro')} style={{ padding: '15px 30px', background: '#1B2D6B', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 600 }}>Começar gratuitamente</button>
              <button style={{ padding: '15px 30px', border: '1.5px solid #E2E8F0', color: '#4A5568', background: 'transparent', borderRadius: 10, fontSize: 15, fontWeight: 500 }}>Ver demonstração →</button>
            </div>
            <div style={{ display: 'flex', gap: 22 }}>
              {['Sem fidelidade', 'Setup em minutos', 'Suporte em português'].map(t => (
                <span key={t} style={{ fontSize: 13, color: '#718096', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 17, height: 17, background: '#1B2D6B', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 9, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* MOCKUP */}
          <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 18, overflow: 'hidden', boxShadow: '0 24px 80px rgba(27,45,107,0.13)', transform: 'perspective(1200px) rotateY(-5deg) rotateX(2deg)' }}>
            <div style={{ background: '#1B2D6B', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }}></span>)}
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginLeft: 8 }}>Rastro — Dashboard</span>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 16 }}>
                {[{label:'Patrimônio',val:'R$ 48k',color:'#1B2D6B'},{label:'Economia/ano',val:'R$ 12k',color:'#16A34A'},{label:'Alertas',val:'2',color:'#D97706'}].map(m => (
                  <div key={m.label} style={{ background: '#F8FAFC', borderRadius: 8, padding: 12 }}>
                    <div style={{ fontSize: 10, color: '#94A3B8', marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 18, fontWeight: 700, color: m.color }}>{m.val}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#F8FAFC', borderRadius: 8, padding: 14, marginBottom: 16 }}>
                <div style={{ fontSize: 10, color: '#94A3B8', marginBottom: 10 }}>Inspeções por mês</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 48 }}>
                  {[30,50,70,40,90,60,75].map((h,idx) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: idx===4?'#FFC107':'#1B2D6B', opacity: idx===4?1:idx===2?1:0.22, borderRadius: '3px 3px 0 0' }}></div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                {[{id:'001P',status:'OK',color:'#16A34A',bg:'#DCFCE7'},{id:'002P',status:'Atenção',color:'#D97706',bg:'#FEF3C7'},{id:'003P',status:'Crítico',color:'#DC2626',bg:'#FEE2E2'}].map(t => (
                  <div key={t.id} style={{ background: '#F8FAFC', borderRadius: 6, padding: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#1B2D6B' }}>{t.id}</span>
                    <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 4, fontWeight: 600, background: t.bg, color: t.color }}>{t.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: '#1B2D6B', padding: '40px 6%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40, textAlign: 'center' }}>
          {[{val:'34%',label:'dos pneus circulam com pressão incorreta (Continental, 2023)'},{val:'30%',label:'do combustível é influenciado pelos pneus (Michelin)'},{val:'0,3%',label:'de aumento no consumo por libra abaixo do ideal (APTA)'},{val:'7%',label:'de redução na vida útil por desalinhamento de 1mm'}].map(s => (
            <div key={s.val}>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 36, fontWeight: 800, color: '#FFC107', marginBottom: 6 }}>{s.val}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DADOS DE MERCADO */}
      <section id="dados" style={{ padding: '100px 6%', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1B2D6B', background: '#E8EDF8', borderRadius: 4, padding: '4px 12px', marginBottom: 16 }}>Dados de mercado</div>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 38, fontWeight: 800, color: '#0D1B3E', marginBottom: 16, letterSpacing: '-0.02em' }}>O problema custa caro. Os dados provam.</h2>
            <p style={{ fontSize: 16, color: '#4A5568', maxWidth: 540, margin: '0 auto', lineHeight: 1.72 }}>Pesquisas de fabricantes e institutos do setor mostram o impacto direto da gestão de pneus nos custos operacionais.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 24 }}>
            {[
              { fonte: 'Continental Pneus — Pesquisa com 14.000 pneus', dado: '34% dos pneus estavam com pressão incorreta', impacto: 'Pneus apenas 3 PSI abaixo do ideal aumentam o consumo de combustível em 2% — o equivalente a perder um tanque cheio por ano.', cor: '#1B2D6B' },
              { fonte: 'Michelin — Pro Fleet Solutions', dado: 'Pneus respondem por até 30% do consumo de combustível', impacto: 'A cada litro que um caminhão consome, 300ml estão diretamente relacionados ao estado e calibragem dos pneus.', cor: '#1B2D6B' },
              { fonte: 'APTA Caminhões — Análise técnica', dado: 'Cada libra a menos aumenta o consumo em 0,3% por km', impacto: 'Em 600 km com pneus descalibrados, o consumo pode dobrar — apenas por não calibrar corretamente antes da viagem.', cor: '#1B2D6B' },
            ].map(d => (
              <div key={d.fonte} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 14, padding: 28, borderTop: `3px solid ${d.cor}` }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>{d.fonte}</div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, fontWeight: 700, color: '#0D1B3E', marginBottom: 10, lineHeight: 1.4 }}>{d.dado}</div>
                <p style={{ fontSize: 14, color: '#4A5568', lineHeight: 1.68 }}>{d.impacto}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            {[
              { fonte: 'Prolog App — Gestão de frotas', dado: 'Desalinhamento de 1mm reduz a vida útil do pneu em 7%', impacto: 'Além do consumo extra por fricção com o asfalto, o desalinhamento inviabiliza a recapagem e obriga a troca prematura.', cor: '#FFC107' },
              { fonte: 'FlatOut Brasil / Continental — Testes práticos', dado: 'Pneus 40% abaixo da calibragem geram até R$ 200/mês em desperdício', impacto: 'Em 3 anos, uma frota descalibrada pode acumular R$ 7.000 ou mais em combustível desperdiçado — por veículo.', cor: '#FFC107' },
            ].map(d => (
              <div key={d.fonte} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 14, padding: 28, borderTop: `3px solid ${d.cor}` }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>{d.fonte}</div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, fontWeight: 700, color: '#0D1B3E', marginBottom: 10, lineHeight: 1.4 }}>{d.dado}</div>
                <p style={{ fontSize: 14, color: '#4A5568', lineHeight: 1.68 }}>{d.impacto}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#1B2D6B', borderRadius: 16, padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40 }}>
            <div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8 }}>A Rastro transforma esses dados em ação.</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', maxWidth: 540, lineHeight: 1.68 }}>Com rastreabilidade individual por pneu, alertas de calibragem e relatórios automáticos, sua frota para de perder dinheiro.</p>
            </div>
            <button onClick={() => navigate('/cadastro')} style={{ padding: '14px 28px', background: '#FFC107', color: '#1B2D6B', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 }}>Começar agora →</button>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section style={{ padding: '100px 6%', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1B2D6B', background: '#E8EDF8', borderRadius: 4, padding: '4px 12px', marginBottom: 16 }}>Para quem é</div>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 38, fontWeight: 800, color: '#0D1B3E', letterSpacing: '-0.02em' }}>Feito para quem vive de estrada</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {[
              { img: IMG_OWNER, title: 'Donos de transportadora', desc: 'Visibilidade total dos custos com pneus e decisões baseadas em dados reais, não em achismo.' },
              { img: IMG_TIRE, title: 'Gestores de frota', desc: 'Controle cada pneu, cada movimentação e cada inspeção em um único sistema integrado.' },
              { img: IMG_TRUCK, title: 'Empresas em crescimento', desc: 'Escale sua operação sem perder controle. O Rastro cresce junto com a sua frota.' },
            ].map(c => (
              <div key={c.title} style={{ background: '#F8FAFC', borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                <img src={c.img} alt={c.title} style={{ width: '100%', height: 210, objectFit: 'cover' }} />
                <div style={{ padding: 28 }}>
                  <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 17, fontWeight: 700, color: '#0D1B3E', marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: '#4A5568', lineHeight: 1.68 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" style={{ padding: '100px 6%', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1B2D6B', background: '#E8EDF8', borderRadius: 4, padding: '4px 12px', marginBottom: 16 }}>Funcionalidades</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 38, fontWeight: 800, color: '#0D1B3E', maxWidth: 360, letterSpacing: '-0.02em' }}>Tudo que sua frota precisa</h2>
            <p style={{ fontSize: 15, color: '#4A5568', maxWidth: 360, lineHeight: 1.68 }}>Do cadastro ao relatório executivo — sem planilhas, sem achismos.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {[
              { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', title: 'Cadastro individual de pneus', desc: 'Cada pneu tem um ID único com histórico completo de PSI, sulco, posição e quilometragem.' },
              { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Telemetria e inspeções', desc: 'Registre inspeções periódicas e acompanhe a evolução de cada pneu com gráficos claros.' },
              { icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', title: 'Controle de movimentações', desc: 'Saiba exatamente qual pneu está em qual veículo, eixo e posição em tempo real.' },
              { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: 'Economia circular', desc: 'Maximize a vida útil da carcaça com controle de recapagens e descarte no momento certo.' },
              { icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', title: 'Alertas inteligentes', desc: 'Alertas automáticos de pressão crítica, sulco baixo e inspeções atrasadas.' },
              { icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Relatório executivo', desc: 'Relatório mensal em linguagem simples com economia gerada e recomendações.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: 28 }}>
                <div style={{ width: 44, height: 44, background: '#EEF2FF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon d={f.icon} size={20} color="#1B2D6B" />
                </div>
                <h3 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, fontWeight: 700, color: '#0D1B3E', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#4A5568', lineHeight: 1.68 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" style={{ padding: '100px 6%', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1B2D6B', background: '#E8EDF8', borderRadius: 4, padding: '4px 12px', marginBottom: 16 }}>Como funciona</div>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 38, fontWeight: 800, color: '#0D1B3E', marginBottom: 64, letterSpacing: '-0.02em' }}>Simples de usar. Poderoso nos resultados.</h2>
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40 }}>
            <div style={{ position: 'absolute', top: 26, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(to right, #1B2D6B, #2A3F8F, #FFC107, #16A34A)', borderRadius: 2, zIndex: 0 }}></div>
            {[
              { n: '1', title: 'Cadastre a frota', desc: 'Registre seus veículos e cada pneu com medidas, marca e condição inicial.', color: '#1B2D6B', bg: '#EEF2FF' },
              { n: '2', title: 'Registre inspeções', desc: 'PSI e sulco a cada inspeção. Menos de 2 minutos por pneu.', color: '#2A3F8F', bg: '#EEF2FF' },
              { n: '3', title: 'Receba alertas', desc: 'O Rastro avisa quando um pneu está fora do padrão antes que vire problema.', color: '#1B2D6B', bg: '#FEF9C3' },
              { n: '4', title: 'Veja a economia', desc: 'Acompanhe em tempo real quanto sua frota está economizando.', color: '#fff', bg: '#16A34A' },
            ].map((s, i) => (
              <div key={s.n} style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: s.bg, border: `2px solid ${s.color === '#fff' ? '#16A34A' : s.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: "'Manrope', sans-serif", fontSize: 18, fontWeight: 800, color: s.color === '#fff' ? '#fff' : s.color }}>{s.n}</div>
                <h4 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, fontWeight: 700, color: '#0D1B3E', marginBottom: 8 }}>{s.title}</h4>
                <p style={{ fontSize: 13, color: '#4A5568', lineHeight: 1.68 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section style={{ padding: '100px 6%', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1B2D6B', background: '#E8EDF8', borderRadius: 4, padding: '4px 12px', marginBottom: 16 }}>Depoimentos</div>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 38, fontWeight: 800, color: '#0D1B3E', letterSpacing: '-0.02em' }}>Quem usa, recomenda</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { name: 'Carlos Mendes', role: 'Dono — Transportadora Mendes', text: 'Em 3 meses com o Rastro reduzi meu gasto com pneus em quase 28%. O controle de estoque acabou com os desvios que eu tinha na operação.' },
              { name: 'Roberto Silva', role: 'Gestor de frota — LogBrasil', text: 'Antes eu não sabia nem quantos pneus tinha em estoque. Hoje tenho o histórico completo de cada um. É outra realidade operacional.' },
              { name: 'Ana Paula Costa', role: 'Diretora — Transportes Costa', text: 'O relatório executivo que o sistema gera é o que apresento para meus sócios toda semana. Profissional, objetivo e embasado em dados.' },
            ].map(d => (
              <div key={d.name} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 14, padding: 32 }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[1,2,3,4,5].map( <span key={i} style={{ color: '#FFC107', fontSize: 16 }}>★</span>)}
                </div>
                <p style={{ fontSize: 15, color: '#2D3748', lineHeight: 1.72, marginBottom: 24 }}>{d.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid #F1F5F9' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1B2D6B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFC107', fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{d.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: '#0D1B3E' }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 2 }}>{d.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section id="impacto" style={{ padding: '100px 6%', background: '#1B2D6B' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FFC107', background: 'rgba(255,255,255,0.08)', borderRadius: 4, padding: '4px 12px', marginBottom: 16 }}>Impacto financeiro</div>
            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 38, fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.02em' }}>Números reais. Economia real.</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 40, lineHeight: 1.72 }}>Baseado em dados da Michelin, Continental e APTA — não em estimativas.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[{val:'3%',label:'redução no combustível por pneu calibrado'},{val:'+30%',label:'mais vida útil com gestão de recapagens'},{val:'0',label:'desvios com rastreabilidade por ID'},{val:'2min',label:'para registrar uma inspeção completa'}].map(s => (
                <div key={s.val} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 22 }}>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 32, fontWeight: 800, color: '#FFC107' }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 6, lineHeight: 1.55 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32 }}>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 700, marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.09em' }}>Comparativo mensal — frota de 10 caminhões</div>
            {[{label:'Sem Rastro',val:'R$ 8.400',width:'100%',bg:'rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.45)'},{label:'Com Rastro',val:'R$ 6.050',width:'72%',bg:'#FFC107',color:'#1B2D6B'}].map(b => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', width: 90, textAlign: 'right', flexShrink: 0 }}>{b.label}</div>
                <div style={{ flex: 1, height: 30, background: 'rgba(255,255,255,0.05)', borderRadius: 6, overflow: 'hidden' }}>
                  <div style={{ width: b.width, height: '100%', background: b.bg, borderRadius: 6, display: 'flex', alignItems: 'center', paddingLeft: 12, fontSize: 12, fontWeight: 700, color: b.color }}>{b.val}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>Economia estimada/mês</div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 32, fontWeight: 800, color: '#4ADE80' }}>R$ 2.350</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>*baseado em dados da Michelin e Continental</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 6%', background: '#F8FAFC', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <img src={LOGO} alt="Rastro" style={{ height: 52, objectFit: 'contain', marginBottom: 28 }} />
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontSize: 44, fontWeight: 800, color: '#0D1B3E', marginBottom: 14, letterSpacing: '-0.02em' }}>Pare de perder dinheiro hoje.</h2>
          <p style={{ fontSize: 17, color: '#4A5568', marginBottom: 36, lineHeight: 1.72 }}>Cadastre sua frota em minutos e veja quanto está perdendo por falta de gestão de pneus.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 18 }}>
            <button onClick={() => navigate('/cadastro')} style={{ padding: '16px 36px', background: '#1B2D6B', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700 }}>Criar conta gratuita</button>
            <button style={{ padding: '16px 36px', background: '#FFC107', color: '#1B2D6B', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700 }}>Falar com a equipe</button>
          </div>
          <p style={{ fontSize: 13, color: '#94A3B8' }}>Sem cartão de crédito · Configuração em minutos · Suporte em português</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0D1B3E', padding: '56px 6% 36px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
            <div>
              <img src={LOGO} alt="Rastro" style={{ height: 44, objectFit: 'contain', marginBottom: 16, background: '#fff', borderRadius: 8, padding: '4px 8px' }} />
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.68, maxWidth: 280 }}>Sistema de gestão inteligente de pneus para transportadoras. Reduza custos, elimine desvios e aumente a vida útil da sua frota.</p>
            </div>
            <div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Produto</div>
              {['Funcionalidades', 'Como funciona', 'Preços', 'Demonstração'].map(l => (
                <div key={l} style={{ marginBottom: 10 }}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}>{l}</a></div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Empresa</div>
              {['Sobre nós', 'Blog', 'Carreiras', 'Contato'].map(l => (
                <div key={l} style={{ marginBottom: 10 }}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>{l}</a></div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Legal</div>
              {['Privacidade', 'Termos de uso', 'Cookies', 'LGPD'].map(l => (
                <div key={l} style={{ marginBottom: 10 }}><a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>{l}</a></div>
              ))}
            </div>
          </div>
          <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>© 2026 Rastro Gestão de Pneus. Todos os direitos reservados.</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#1B2D6B','#2A3F8F','#FFC107'].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, display: 'inline-block', opacity: 0.6 }}></span>)}
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}