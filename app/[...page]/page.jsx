'use client';

import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import { builder } from '../src/lib/builder';

export async function getStaticProps({ params }) {
  const page = await builder
    .get('page', {
      userAttributes: { urlPath: '/' + (params?.path?.join('/') || '') },
    })
    .toPromise() || null;
  return { props: { page }, revalidate: 5 };
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', { options: { noTargeting: true } });
  return { paths: pages.map((page) => `/${page.data?.url}`), fallback: true };
}

export default function Page({ page }) {
  const isPreviewing = useIsPreviewing();
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }
  return <BuilderComponent model="page" content={page} />;
}