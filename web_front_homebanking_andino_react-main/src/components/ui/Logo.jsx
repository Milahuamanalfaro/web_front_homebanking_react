/**
 * Logo de marca de Caja Piura.
 * Isotipo institucional con paleta azul y dorado que acompaña el texto.
 *
 * @param {Object} props
 * @param {number}  [props.size=44]          Tamaño del isotipo en px.
 * @param {boolean} [props.wordmark=true]    Mostrar el texto "Caja Piura".
 * @param {'dark'|'light'} [props.variant='dark'] Color del texto.
 * @param {string}  [props.subtitle='BANCA DIGITAL'] Texto secundario bajo el nombre.
 */

// Pétalos: ángulo de rotación + color (paleta institucional Caja Piura).
const PETALOS = [
  { a: 0, c: '#003b7d' },
  { a: 60, c: '#0076c2' },
  { a: 120, c: '#ffd100' },
  { a: 180, c: '#ffb703' },
  { a: 240, c: '#0098d1' },
  { a: 300, c: '#0059a2' },
]

export default function Logo({
  size = 44,
  wordmark = true,
  variant = 'dark',
  subtitle = 'BANCA DIGITAL',
}) {
  const textColor = variant === 'light' ? '#ffffff' : '#003b7d'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.85)' : '#5c6b85'
  const nameSize = Math.round(size * 0.5)
  const subSize = Math.max(9, Math.round(size * 0.23))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Caja Piura"
        role="img"
      >
        {PETALOS.map((p) => (
          <ellipse
            key={p.a}
            cx="24"
            cy="13"
            rx="6"
            ry="11"
            fill={p.c}
            transform={`rotate(${p.a} 24 24)`}
            opacity="0.95"
          />
        ))}
        <circle cx="24" cy="24" r="7" fill="#ffd100" />
        <circle cx="24" cy="24" r="3.4" fill="#003b7d" />
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.5px',
            }}
          >
            Caja Piura
          </span>
          {subtitle && (
            <span
              style={{
                fontSize: subSize,
                fontWeight: 700,
                color: subColor,
                letterSpacing: '1.2px',
              }}
            >
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}
