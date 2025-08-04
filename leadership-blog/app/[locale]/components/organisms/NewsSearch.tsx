'use client';

import ArticlePreview from '../molecules/ArticlePreview';
import { useGetDepartmentWithProjects } from '@/hooks/post/useGetDepartmentWithProjects';

/*interface NewsItem {
  title: string;
  extracto: string;
  link: string;
  alt: string;
  src: string;
  fecha: string;
}*/

interface Props {
  //allNews: NewsItem[];
  departmentId: number;
}

export default function ListaNoticias({ departmentId }: Props) {
  //const [listaNoticias, setListaNoticias] = useState<NewsItem[]>(allNews);
  //console.log(setListaNoticias);

  //const { department, projects, isLoading, isError, refetchProjects } =
  const { projects } = useGetDepartmentWithProjects(departmentId);

  projects?.map((noticia) => {
    console.log(noticia);
    console.log(
      `${noticia.createdAt.getDate()} ${noticia.createdAt.toLocaleString('es-Es', { month: 'long' }).charAt(0).toUpperCase()}${noticia.createdAt.toLocaleString('es-ES', { month: 'long' }).slice(1)} ${noticia.createdAt.getFullYear()}`,
    );
  });

  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {projects?.map((noticia) => {
        return (
          <ArticlePreview
            key={noticia.id}
            titulo={noticia.title}
            extracto={noticia.content}
            link={noticia.title}
            alt={noticia.content}
            src={
              'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400'
            }
            fecha={`${noticia.createdAt.getDate()} ${noticia.createdAt.toLocaleString('es-ES', { month: 'long' }).charAt(0).toUpperCase()}${noticia.createdAt.toLocaleString('es-ES', { month: 'long' }).slice(1)} ${noticia.createdAt.getFullYear()}`}
          />
        );
      })}
    </div>
  );
}
