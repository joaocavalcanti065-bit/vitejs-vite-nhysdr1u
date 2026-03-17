import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A1F36' }}>
      {/* NAVBAR */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E2E6F0',
          padding: '0 5%',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 68,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                background: '#1B2D6B',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFC107',
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              R
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  color: '#1B2D6B',
                  letterSpacing: '-0.02em',
                }}
              >
                RASTRO
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: '#9BA3BC',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Inteligência Logística
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 32 }}>
            <a
              href="#funcionalidades"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#5A6380',
                textDecoration: 'none',
              }}
            >
              Funcionalidades
            </a>
            <a
              href="#como-funciona"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#5A6380',
                textDecoration: 'none',
              }}
            >
              Como funciona
            </a>
            <a
              href="#impacto"
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#5A6380',
                textDecoration: 'none',
              }}
            >
              Impacto
            </a>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={() => navigate('/login')}
              style={{
                padding: '9px 20px',
                border: '1.5px solid #1B2D6B',
                color: '#1B2D6B',
                background: 'transparent',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Entrar
            </button>
            <button
              onClick={() => navigate('/cadastro')}
              style={{
                padding: '9px 20px',
                background: '#1B2D6B',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Criar conta
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 5% 80px',
          background: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#F0F2F8',
                border: '1px solid #E2E6F0',
                borderRadius: 100,
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 600,
                color: '#1B2D6B',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  background: '#FFC107',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              ></span>
              Gestão inteligente de frotas
            </div>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 56,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#0F1B45',
                marginBottom: 24,
              }}
            >
              Cada pneu.
              <br />
              Cada real.
              <br />
              <span style={{ color: '#FFC107' }}>Sob controle.</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.65,
                color: '#5A6380',
                marginBottom: 40,
                maxWidth: 480,
              }}
            >
              Rastreie cada pneu da sua frota, reduza custos com combustível e
              elimine perdas no estoque — tudo em tempo real, sem planilhas.
            </p>
            <div style={{ display: 'flex', gap: 16, marginBottom: 40 }}>
              <button
                onClick={() => navigate('/cadastro')}
                style={{
                  padding: '16px 32px',
                  background: '#1B2D6B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Começar gratuitamente
              </button>
              <button
                style={{
                  padding: '16px 32px',
                  border: '1.5px solid #E2E6F0',
                  color: '#5A6380',
                  background: 'transparent',
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                Ver demonstração →
              </button>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              {[
                'Sem fidelidade',
                'Configuração em minutos',
                'Suporte incluso',
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 13,
                    color: '#9BA3BC',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      background: '#1B2D6B',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: 10,
                    }}
                  >
                    ✓
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* MOCKUP */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #E2E6F0',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(27,45,107,0.12)',
              transform: 'perspective(1200px) rotateY(-6deg) rotateX(3deg)',
            }}
          >
            <div
              style={{
                background: '#1B2D6B',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#ff5f57',
                  display: 'inline-block',
                }}
              ></span>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#febc2e',
                  display: 'inline-block',
                }}
              ></span>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#28c840',
                  display: 'inline-block',
                }}
              ></span>
              <span
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.6)',
                  marginLeft: 8,
                }}
              >
                Rastro — Dashboard
              </span>
            </div>
            <div style={{ padding: 20 }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3,1fr)',
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                {[
                  { label: 'Patrimônio', val: 'R$ 48k', color: '#1B2D6B' },
                  { label: 'Economia/ano', val: 'R$ 12k', color: '#16A34A' },
                  { label: 'Alertas', val: '2', color: '#E5A800' },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      background: '#F7F8FC',
                      borderRadius: 8,
                      padding: 12,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        color: '#9BA3BC',
                        marginBottom: 4,
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: m.color,
                      }}
                    >
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: '#F7F8FC',
                  borderRadius: 8,
                  padding: 14,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{ fontSize: 10, color: '#9BA3BC', marginBottom: 10 }}
                >
                  Inspeções por mês
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 6,
                    height: 48,
                  }}
                >
                  {[30, 50, 70, 40, 90, 60, 75].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: i === 4 ? '#FFC107' : '#1B2D6B',
                        opacity: i === 4 ? 1 : i === 2 ? 1 : 0.3,
                        borderRadius: '3px 3px 0 0',
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3,1fr)',
                  gap: 8,
                }}
              >
                {[
                  { id: '001P', status: 'OK', color: '#16A34A', bg: '#DCFCE7' },
                  {
                    id: '002P',
                    status: 'Atenção',
                    color: '#CA8A04',
                    bg: '#FEF9C3',
                  },
                  {
                    id: '003P',
                    status: 'Crítico',
                    color: '#DC2626',
                    bg: '#FEE2E2',
                  },
                ].map((t) => (
                  <div
                    key={t.id}
                    style={{
                      background: '#F7F8FC',
                      borderRadius: 6,
                      padding: 10,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#1B2D6B',
                      }}
                    >
                      {t.id}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        padding: '2px 6px',
                        borderRadius: 4,
                        fontWeight: 600,
                        background: t.bg,
                        color: t.color,
                      }}
                    >
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section
        id="funcionalidades"
        style={{ padding: '100px 5%', background: '#F7F8FC' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1B2D6B',
              background: '#E2E6F0',
              borderRadius: 4,
              padding: '4px 10px',
              marginBottom: 16,
            }}
          >
            Funcionalidades
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 40,
              fontWeight: 800,
              color: '#0F1B45',
              marginBottom: 16,
            }}
          >
            Tudo que sua frota precisa
          </h2>
          <p style={{ fontSize: 18, color: '#5A6380', marginBottom: 60 }}>
            Do cadastro do pneu ao relatório executivo — sem planilhas, sem
            achismos.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 24,
            }}
          >
            {[
              {
                icon: '🔵',
                title: 'Cadastro individual de pneus',
                desc: 'Cada pneu tem um ID único com histórico completo de PSI, sulco, posição e quilometragem rodada.',
              },
              {
                icon: '📊',
                title: 'Telemetria e inspeções',
                desc: 'Registre inspeções periódicas e acompanhe a evolução de cada pneu com gráficos claros.',
              },
              {
                icon: '🚛',
                title: 'Controle de movimentações',
                desc: 'Saiba exatamente qual pneu está em qual veículo, eixo e posição em tempo real.',
              },
              {
                icon: '♻️',
                title: 'Economia circular',
                desc: 'Maximize a vida útil da carcaça com controle de recapagens e descarte no momento certo.',
              },
              {
                icon: '🔔',
                title: 'Alertas inteligentes',
                desc: 'Receba alertas automáticos de pressão crítica, sulco baixo e inspeções atrasadas.',
              },
              {
                icon: '📋',
                title: 'Relatório executivo',
                desc: 'Relatório mensal em linguagem simples mostrando economia gerada e recomendações.',
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: '#fff',
                  border: '1px solid #E2E6F0',
                  borderRadius: 14,
                  padding: 32,
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 20 }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#0F1B45',
                    marginBottom: 10,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, color: '#5A6380', lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        style={{ padding: '100px 5%', background: '#fff' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1B2D6B',
              background: '#E2E6F0',
              borderRadius: 4,
              padding: '4px 10px',
              marginBottom: 16,
            }}
          >
            Como funciona
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 40,
              fontWeight: 800,
              color: '#0F1B45',
              marginBottom: 60,
            }}
          >
            Simples de usar. Poderoso nos resultados.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 40,
            }}
          >
            {[
              {
                n: '1',
                title: 'Cadastre a frota',
                desc: 'Registre seus veículos e cada pneu com suas medidas, marca e condição inicial.',
                color: '#1B2D6B',
              },
              {
                n: '2',
                title: 'Registre inspeções',
                desc: 'O responsável registra PSI e sulco a cada inspeção. Leva menos de 2 minutos.',
                color: '#2A3F8F',
              },
              {
                n: '3',
                title: 'Receba alertas',
                desc: 'O Rastro avisa automaticamente quando um pneu está fora do padrão.',
                color: '#FFC107',
              },
              {
                n: '4',
                title: 'Veja a economia',
                desc: 'Acompanhe em tempo real quanto sua frota está economizando.',
                color: '#16A34A',
              },
            ].map((s) => (
              <div key={s.n} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: s.color,
                    color: s.color === '#FFC107' ? '#1B2D6B' : '#fff',
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 20,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  {s.n}
                </div>
                <h4
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#0F1B45',
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h4>
                <p style={{ fontSize: 13, color: '#5A6380', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section
        id="impacto"
        style={{ padding: '100px 5%', background: '#1B2D6B' }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#FFC107',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 4,
                padding: '4px 10px',
                marginBottom: 16,
              }}
            >
              Impacto financeiro
            </div>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 40,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 16,
              }}
            >
              Números reais. Economia real.
            </h2>
            <p
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.65)',
                marginBottom: 40,
              }}
            >
              Transportadoras que mantêm calibragem correta reduzem consumo e
              estendem a vida dos pneus.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
              }}
            >
              {[
                {
                  val: '3%',
                  label:
                    'de redução no consumo de combustível por pneu calibrado',
                },
                {
                  val: '+30%',
                  label: 'mais vida útil com calibragem e gestão de recapagens',
                },
                {
                  val: '0',
                  label:
                    'desvios de estoque com rastreabilidade por ID individual',
                },
                {
                  val: '2min',
                  label: 'para registrar uma inspeção completa no sistema',
                },
              ].map((s) => (
                <div
                  key={s.val}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 36,
                      fontWeight: 800,
                      color: '#FFC107',
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.55)',
                      marginTop: 8,
                      lineHeight: 1.5,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16,
              padding: 32,
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 500,
                marginBottom: 24,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Comparativo mensal
            </div>
            {[
              {
                label: 'Sem Rastro',
                val: 'R$ 8.400',
                width: '100%',
                bg: 'rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.5)',
              },
              {
                label: 'Com Rastro',
                val: 'R$ 6.050',
                width: '72%',
                bg: '#FFC107',
                color: '#1B2D6B',
              },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.6)',
                    width: 100,
                    textAlign: 'right',
                    flexShrink: 0,
                  }}
                >
                  {b.label}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 28,
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 6,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: b.width,
                      height: '100%',
                      background: b.bg,
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: 12,
                      fontSize: 12,
                      fontWeight: 700,
                      color: b.color,
                    }}
                  >
                    {b.val}
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: 24,
                paddingTop: 20,
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: 6,
                }}
              >
                Economia estimada/mês
              </div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#4ADE80',
                }}
              >
                R$ 2.350
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: 4,
                }}
              >
                por frota de 10 caminhões
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 5%',
          background: '#F7F8FC',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 48,
              fontWeight: 800,
              color: '#0F1B45',
              marginBottom: 16,
            }}
          >
            Pare de perder dinheiro hoje.
          </h2>
          <p style={{ fontSize: 18, color: '#5A6380', marginBottom: 40 }}>
            Cadastre sua frota em minutos e veja quanto está perdendo por falta
            de gestão de pneus.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <button
              onClick={() => navigate('/cadastro')}
              style={{
                padding: '18px 40px',
                background: '#1B2D6B',
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Criar conta gratuita
            </button>
            <button
              style={{
                padding: '18px 40px',
                background: '#FFC107',
                color: '#1B2D6B',
                border: 'none',
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Falar com a equipe
            </button>
          </div>
          <p style={{ fontSize: 13, color: '#9BA3BC' }}>
            Sem cartão de crédito · Configuração em minutos · Suporte em
            português
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0F1B45', padding: '48px 5%' }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: '#fff',
            }}
          >
            RASTRO<span style={{ color: '#FFC107' }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: 28 }}>
            {['Funcionalidades', 'Privacidade', 'Termos', 'Contato'].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                  }}
                >
                  {l}
                </a>
              )
            )}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Rastro. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
