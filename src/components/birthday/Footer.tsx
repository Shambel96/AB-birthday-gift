export function Footer({ name }: { name: string }) {
  return (
    <footer className="relative px-6 pt-8 pb-14 text-center">
      <p className="text-base font-medium text-foreground/90">በተለይ ለ{name} በ❤️ የተሰራ</p>
      <p className="mt-2 text-sm text-muted-foreground">ምክንያቱም አንዳንድ ሰዎች ከልደት መልእክትም በላይ ይገባቸዋል።</p>
    </footer>
  );
}
