import Image from 'next/image'
import Link from 'next/link'
import image from '@/assets/images/fit.webp'
type Props = {
    blog: {
        title: string,
        slug: string
        image?: string
        description?: string,
        date?: string
    }
}

const BlogCard = (props: Props) => {
    return (


        <div className="glass w-full">
            <div className='w-full p-5'>
            <Link href={`/blogs/${props.blog.slug}`}>
                <Image className="rounded-2xl w-full object-cover aspect-[4/3]" src={props.blog.image||image} alt={props.blog.title}  height={200} width={300}/>
            </Link>
            </div>
            <div className="p-5">
                <h3 className="mb-2 text-2xl font-bold 
                line-clamp-2 h-20
                tracking-tight text-text">{props.blog.title}</h3>
                <p className="mb-3 text-sm text-text/90 line-clamp-2 overflow-ellipsis">
                    {props.blog.description}
                </p>
                <Link href={`/blogs/${props.blog.slug}`} className="inline-flex items-center px-3 py-2 
                    text-sm font-medium text-center
                    text-text bg-primary/60 rounded-lg hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-accent
                     ">
                    Read Blog
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>

    )
}

export default BlogCard