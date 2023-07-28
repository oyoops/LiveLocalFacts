interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
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
        <main className="mainContent">
          {children}
        </main>
      </div>
    </div>
  );
}
