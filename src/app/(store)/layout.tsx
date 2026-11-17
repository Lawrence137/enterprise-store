
import type { ReactNode } from "react";

export default function StoreLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#20231F]">
      <div className="bg-[#20231F] px-4 py-2 text-center text-xs text-white">
        Welcome to E-Store — Shop quality products worldwide.
      </div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-10">
          <a href="/" className="text-2xl font-bold tracking-tight">
            E-STORE<span className="text-emerald-600">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="/" className="hover:text-emerald-700">Home</a>
            <a href="/categories" className="hover:text-emerald-700">Categories</a>
            <a href="/products" className="hover:text-emerald-700">Shop</a>
          </nav>

          <div className="flex items-center gap-5">
            <a href="/account" aria-label="Account">
              <span className="text-sm">Account</span>
            </a>
            <a href="/cart" aria-label="Shopping cart">
              <span className="text-sm">Cart (0)</span>
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
          <span className="font-bold tracking-tight">E-STORE.</span>
          <p className="text-sm text-gray-500">
            Quality shopping. Wherever you are.
          </p>
          <p className="text-xs text-gray-400">
            © 2026 E-Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
