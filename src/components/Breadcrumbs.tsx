import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <span className="text-gray-300 select-none">/</span>}
            {i < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-purple-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className="text-gray-700 font-medium line-clamp-1 max-w-[240px]"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
