import { useEffect } from 'react';

const SITE_NAME = 'Fondazione Flumina';
const BASE_URL = 'https://www.fondazioneflumina.it';
const DEFAULT_IMAGE = `${BASE_URL}/img/icons/apple-touch-icon.png`;

interface PageMetaOptions {
  title: string;
  description: string;
  ogImage?: string;
  path?: string;
  type?: 'website' | 'article';
}

function upsertMeta(attrName: string, attrVal: string, content: string) {
  const selector = `meta[${attrName}="${attrVal}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export function usePageMeta({ title, description, ogImage, path, type = 'website' }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = path ? `${BASE_URL}${path}` : BASE_URL;
    const image = ogImage ? `${BASE_URL}${ogImage}` : DEFAULT_IMAGE;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:type', type);
    upsertCanonical(url);

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, ogImage, path, type]);
}
