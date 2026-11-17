
import type { ReactNode } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Warehouse,
  Tags,
  Settings,
  BarChart3,
} from "lucide-react";

const navigation = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { label: "Customers", href: "/admin/customers", icon: Users },
  { label: "Inventory", href: "/admin/inventory", icon: Warehouse },
  { label: "Promotions", href: "/admin/promotions", icon: Tags },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-gray-900 md:flex">
      <aside className="w-full border-r border-gray-200 bg-white md:min-h-screen md:w-64 md:shrink-0">
        <div className="border-b border-gray-100 px-6 py-7">
          <Link href="/admin" className="text-xl font-bold tracking-tight">
            E-STORE<span className="text-emerald-600">.</span>
          </Link>
          <p className="mt-1 text-xs text-gray-400">Administration</p>
        </div>

        <nav className="flex gap-1 overflow-x-auto p-3 md:flex-col">
          {navigation.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
            >
              <Icon size={18} strokeWidth={1.8} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
          <span className="text-sm font-medium">Store Management</span>
          <span className="text-sm text-gray-500">Admin workspace</span>
        </header>

        <main className="p-5 md:p-8">{children}</main>
      </div>
    </div>
  );
}
