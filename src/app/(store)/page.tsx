
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const categories = [
  { name: "Electronics", description: "Technology for modern living", number: "01" },
  { name: "Fashion", description: "Style that makes a statement", number: "02" },
  { name: "Home & Living", description: "Make your space beautiful", number: "03" },
  { name: "Beauty", description: "Everyday essentials and more", number: "04" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Discover something better
            </span>

            <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] md:text-7xl">
              Everything you love.{" "}
              <span className="text-emerald-700">One destination.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-8 text-gray-500">
              Explore a thoughtfully curated collection of products
              across technology, fashion, lifestyle and more.
              Shopping made effortless.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 bg-[#20231F] px-7 py-4 text-sm font-medium text-white transition hover:bg-emerald-800"
              >
                Explore collection <ArrowRight size={17} />
              </Link>

              <Link
                href="/categories"
                className="inline-flex items-center gap-2 border border-gray-300 px-7 py-4 text-sm font-medium transition hover:border-black"
              >
                Browse categories
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-gray-200 pt-7">
              <div>
                <p className="text-xl font-semibold">Quality</p>
                <p className="mt-1 text-xs text-gray-500">Curated products</p>
              </div>
              <div>
                <p className="text-xl font-semibold">Global</p>
                <p className="mt-1 text-xs text-gray-500">Shopping experience</p>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#EAECE5] p-10 md:min-h-[560px]">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
            <div className="relative max-w-sm text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                The E-Store edit
              </span>
              <div className="my-8 text-8xl font-light tracking-tighter text-[#394B3C]">
                E.
              </div>
              <p className="text-2xl font-medium tracking-tight">
                A better way to shop.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Discover products for every part of your life.
              </p>
            </div>
            <div className="absolute bottom-6 right-6">
              <ArrowUpRight className="text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Explore E-Store
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Shop by category
              </h2>
            </div>
            <Link
              href="/categories"
              className="hidden items-center gap-2 text-sm font-medium md:flex"
            >
              All categories <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.number}
                href="/categories"
                className="group border border-gray-200 p-7 transition duration-300 hover:border-emerald-700 hover:bg-[#F8FAF7]"
              >
                <span className="text-xs text-gray-400">
                  {category.number}
                </span>
                <div className="mb-12 mt-8 flex justify-between">
                  <h3 className="text-xl font-medium">{category.name}</h3>
                  <ArrowUpRight
                    size={19}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
                <p className="text-sm text-gray-500">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:grid-cols-3 lg:px-10">
        {[
          { icon: Truck, title: "Worldwide delivery", description: "Shopping beyond borders." },
          { icon: ShieldCheck, title: "Secure shopping", description: "A shopping experience you can trust." },
          { icon: Headphones, title: "Customer support", description: "Here when you need us." },
        ].map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex gap-4">
            <Icon size={24} strokeWidth={1.5} />
            <div>
              <h3 className="text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
