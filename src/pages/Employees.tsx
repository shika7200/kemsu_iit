import { GetStaticProps } from 'next';
import { GridLayout } from '@/enteties';
import { ProfsWidget } from '@/widgets';

export const getStaticProps: GetStaticProps = async () => {
  // Этот код выполняется на сервере и предварительно загружает данные для NewsWidget
  return {
    props: {},
  };
};

const News: React.FC = () => (
  <GridLayout>
    <ProfsWidget/>
  </GridLayout>
);

export default News;
