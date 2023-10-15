import { useRouter } from 'next/router'

export const LanguagesSwitch = () => {
  const router = useRouter()

  return (
    <div>
      <ul>
        {router.locales.map(locale => (
          <li key={locale}>
            <button
              type="button"
              onClick={() => {
                router.push('/', '/', { locale })
              }}
            >
              {locale.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}