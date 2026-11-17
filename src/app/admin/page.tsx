
import {
  Package,
  ShoppingBag,
  Users,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "KES 0",
    description: "No sales recorded yet",
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "0",
    description: "Orders received",
    icon: ShoppingBag,
  },
  {
    title: "Total Products",
    value: "0",
    description: "Products in your catalog",
    icon: Package,
  },
  {
    title: "Total Customers",
    value: "0",
    description: "Registered customers",
    icon: Users,
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-gray-500">
          Welcome to your workspace
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Dashboard Overview
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Monitor and manage your E-Store business.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ title, value, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{title}</p>
              <Icon size={20} className="text-gray-400" />
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              {value}
            </h2>

            <p className="mt-2 text-xs text-gray-400">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Recent Orders</h2>
            <p className="mt-1 text-sm text-gray-500">
              Your latest customer orders will appear here.
            </p>
          </div>
          <ArrowUpRight size={20} className="text-gray-400" />
        </div>

        <div className="flex min-h-52 flex-col items-center justify-center text-center">
          <ShoppingBag size={32} className="text-gray-300" />
          <p className="mt-4 font-medium">No orders yet</p>
          <p className="mt-1 text-sm text-gray-400">
            Orders will appear here once customers start shopping.
          </p>
        </div>
      </div>
    </div>
  );
}
