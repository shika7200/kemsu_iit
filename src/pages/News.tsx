import { GetStaticProps } from 'next';
import { GridLayout } from '@/enteties';
import { NewsWidget } from '@/widgets';

export const getStaticProps: GetStaticProps = async () => {
  // Этот код выполняется на сервере и предварительно загружает данные для NewsWidget
  return {
    props: {},
  };
};

const News: React.FC = () => (
  <GridLayout>
    <NewsWidget />
  </GridLayout>
);

export default News;
