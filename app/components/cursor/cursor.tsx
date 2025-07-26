'use client';
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    // Move the cursor
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${y - cursor.offsetHeight / 2}px`;
    };

    // Handle link hover
    const handleLinkHover = () => {
      cursor.classList.add('link-hover');
    };

    const handleLinkLeave = () => {
      cursor.classList.remove('link-hover');
    };

    // Attach mousemove listener
    document.addEventListener('mousemove', moveCursor);

    // Attach hover listeners to all anchor tags (including those rendered by Link)
    const links = document.querySelectorAll('a'); // Select rendered <a> tags
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousemove', moveCursor);

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });

      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
