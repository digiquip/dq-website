import React from 'react';
import { useThemeConfig, ErrorCauseBoundary } from '@docusaurus/theme-common';
import NavbarItem from '@theme/NavbarItem';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
                  Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
              ${JSON.stringify(item, null, 2)}`, { cause: error }, ) }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items header-right">{right}</div>
    </div>
  );
}


export default function ContentWrapper(props) {
  const { i18n } = useDocusaurusContext();
  const items = useNavbarItems();
  const mobileSidebar = useNavbarMobileSidebar();
  const [leftItems, rightItems] = splitNavbarItems(items);
  let newNavItemBlog = {
    label: "Blogg",
    position: "left",
    sidebarid: "tutorialSidebar",
    to: "/blog"
  }
  // Add Blog based on local lang, but only if not already present
  if (i18n.currentLocale != 'en' && !leftItems.some(item => item.label === 'Blogg')) {
    leftItems.splice(3, 0, newNavItemBlog);
  }
  return (
    <>

      <NavbarContentLayout
        left={
          // TODO 
          <>
            {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
            <NavbarLogo />

          </>
        }
        right={
          //respective navbar items => more flexible
          <>
            <NavbarItems items={leftItems} />
            <NavbarItems items={rightItems} />
          </>
        }
      />
    </>
  );
}
