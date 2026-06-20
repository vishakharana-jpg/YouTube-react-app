import React from "react";
import { useSelector } from "react-redux";

const SidebarItem = ({ icon, label, active }) => (
  <li
    className={`flex items-center gap-4 px-3 py-2 rounded-xl cursor-pointer text-sm font-medium transition-all duration-150
      ${active
        ? "bg-gray-100 text-gray-900 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
      }`}
  >
    <span className="text-lg w-5 text-center">{icon}</span>
    <span>{label}</span>
  </li>
);

const SidebarSection = ({ title, items }) => (
  <div className="py-2">
    {title && (
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
        {title}
      </h2>
    )}
    <ul className="space-y-0.5">
      {items.map((item) => (
        <SidebarItem key={item.label} {...item} />
      ))}
    </ul>
  </div>
);

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  const mainItems = [
    { icon: "🏠", label: "Home", active: true },
    { icon: "🩳", label: "Shorts" },
    { icon: "📹", label: "Videos" },
    { icon: "🔴", label: "Live" },
  ];

  const subscriptions = [
    { icon: "🎵", label: "Music" },
    { icon: "⚽", label: "Sports" },
    { icon: "🎮", label: "Gaming" },
    { icon: "🎬", label: "Movies" },
  ];

  const watchLater = [
    { icon: "🎵", label: "Music" },
    { icon: "⚽", label: "Sports" },
    { icon: "🎮", label: "Gaming" },
    { icon: "🎬", label: "Movies" },
  ];

  return (
    <aside className="w-60 h-full bg-white px-2 py-3 overflow-y-auto">
      <SidebarSection items={mainItems} />
      <hr className="border-gray-100 mx-3" />
      <SidebarSection title="Subscriptions" items={subscriptions} />
      <hr className="border-gray-100 mx-3" />
      <SidebarSection title="Watch Later" items={watchLater} />

      {/* Footer */}
      <div className="px-3 pt-4 pb-2">
        <p className="text-xs text-gray-400 leading-relaxed">
          © 2026 YouTube Clone
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;