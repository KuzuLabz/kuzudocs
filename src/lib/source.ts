import { docs, blogPosts } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItchIo, faPython, faReact, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { createMDXSource } from 'fumadocs-mdx/runtime/next';
import { type InferPageType } from 'fumadocs-core/source';

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

const createFaIcon = (icon: IconDefinition) => createElement(FontAwesomeIcon, { icon });

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (icon && icon in icons) {
      return createElement(icons[icon as keyof typeof icons]);
    } else if (icon?.includes('https') || icon?.startsWith('/docs')) {
      return createElement('img', { src: icon, alt: 'favicon', width: 24, height: 24 });
    } else {
      switch (icon) {
        case 'itch':
          return createFaIcon(faItchIo);
        case 'react':
          return createFaIcon(faReact);
        case 'python':
          return createFaIcon(faPython);
        case 'gamepad':
          return createFaIcon(faGamepad);
        default:
          return;
      }
    }

  },
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});