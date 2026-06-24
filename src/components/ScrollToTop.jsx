import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't reset scroll position on navigation by default, so
// without this, clicking through to a new page keeps whatever scroll
// position the previous page was left at. If the link carries a hash (eg.
// nav items like "/#services"), scroll to that section instead of the top —
// otherwise this would override the anchor jump on every navigation.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
