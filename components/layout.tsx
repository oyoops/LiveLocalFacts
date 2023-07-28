interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png">
        <link rel="manifest" href="/public/site.webmanifest">
        <link rel="mask-icon" href="/public/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="/public/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="/public/browserconfig.xml">
        <meta name="theme-color" content="#cad2f3">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6 space-x-4"> {/* Added space-x-4 for spacing between links */}
            <a href="https://oyoops.com" className="hover:text-slate-600 cursor-pointer">
              Home
            </a>
            <a href="https://twitter.com/oyoops" className="hover:text-slate-600 cursor-pointer">
              Twitter
            </a>
            <a href="https://munigpt.xyz" className="hover:text-slate-600 cursor-pointer">
              MuniGPT
            </a>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
