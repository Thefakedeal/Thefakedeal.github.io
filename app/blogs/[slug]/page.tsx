import { getPostBySlug } from '@/helper/blog'
import { BlogMD } from '@/PageComponents/BlogPage/BlogMD'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { formatDistance} from 'date-fns'
import ShareLinks from '@/PageComponents/BlogPage/ShareLinks'

type Props = {
    params: Promise<{
        slug: string
    }>
}

export async function generateMetadata({ params }: Props) {
  const {slug} = await params
  const post =  getPostBySlug(slug);
  if(!post){
      notFound();
  }

  const title= `${post.data.title} | Blog | ${post.data.category} |samirshrestha.info.np`;

  return {
      title:title,
      description: post.data.description,
      keywords: post.data.tags.join(', '),

      openGraph: {
          title: title,
          siteName: "samirshrestha.info.np",
          type: "website",
          description: post.data.description,
          images: [
              {
                  url: post.data.image
              },
          ],
      },

      twitter: {
          title: title,
          description: post.data.description,
          card: "summary_large_image",
          site: "samirshresth.info.np",

          images: [
            {
                url: post.data.image
            },
          ],
      },

      robots: {
          index: true,
          follow: true,
          nocache: true,
          googleBot: {
              index: true,
              follow: true,
          },
      },
  };
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
          <span className={`w-fit inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-text ring-1 ring-accent/30 ring-inset`}>{data.category}</span>   

          {
            data.image && (
              <Image src={data.image} alt={data.title} width={400} height={300} 
                className='w-full p-5'
              />
            )
          }
          <ShareLinks  title={data.title} tags={data.tags} />
          <BlogMD content={content} />
          <ShareLinks  title={data.title} tags={data.tags} />
        </article>
    </main>
  )
}

export default page;