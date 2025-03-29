import { getPostBySlug } from '@/helper/blog'
import { BlogMD } from '@/PageComponents/BlogPage/BlogMD'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { formatDistance} from 'date-fns'

type Props = {
    params: Promise<{
        slug: string
    }>
}

async function page({params}: Props) {
  const {slug} = await params
  const post =  getPostBySlug(slug);
  if(!post) {
    notFound();
  }
  const {data,content} = post;
  return (
    <main className="w-screen flex flex-col items-center">
        <article className="glass w-full md:w-3/4 p-4 mb-5 flex flex-col gap-2 min-h-[80vh]">
          <h2>{data.title}</h2>
          <span className='text-sm mx-1 text-text/60'>Last Update: {data.date} {" "}
            ({formatDistance(new Date(data.date), new Date(), { addSuffix: true })})</span>
          {
            data.image && (
              <Image src={data.image} alt={data.title} width={400} height={300} 
                className='w-full p-5'
              />
            )
          }
          <BlogMD content={content} />
        </article>
    </main>
  )
}

export default page;