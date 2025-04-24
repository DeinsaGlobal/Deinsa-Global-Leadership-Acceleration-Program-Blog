import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';

export default function ChangeThemeButton() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations('Header');
  return (
    <button
      className="rounded border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? t('lightMode') : t('darkMode')}
    </button>
  );
}
