// pages/news/index.tsx
import { GetStaticProps } from 'next';
import NewsWidget from '@/widgets/NewsWidget/ui/NewsWidget';
import { NewsLayout } from '@/enteties';
import * as React from 'react';

export const getStaticProps: GetStaticProps = async () => {
  // Этот код выполняется на сервере и предварительно загружает данные для NewsWidget
  return {
    props: {},
  };
};

const News: React.FC = () => (
  <NewsLayout>
    <NewsWidget />
  </NewsLayout>
);

export default News;
