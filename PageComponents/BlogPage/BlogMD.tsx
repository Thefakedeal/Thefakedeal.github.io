// "use client"
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
// import { serialize } from 'next-mdx-remote/serialize'
// import {  useLayoutEffect, useState } from 'react'
type Props = {
    content: string
}

const components = {
  p : (props: any) => <p className='text-text my-2'>{props.children}</p>,
  a : (props:{children: string, href: string}) => <Link href={props.href} className='text-accent font-bold'>{props.children}</Link>,
  img: (props:{src: string, alt: string}) => <Image 
   src={props.src} alt={props.alt} className='w-full p-1'
   width={400} height={300}
   />
}

export const BlogMD =  ({content}: Props) => {
  // const [loading, setLoading] = useState(true);
  // const [mdxSource, setMdxSource] = useState<any>(null);
  // const getMdxSource = async () => {
  //   setLoading(true);
  //   const mdx = await serialize(content);
  //   setMdxSource(mdx);
  //   setLoading(false);
  // }

  // useLayoutEffect(() => {
  //   getMdxSource();  
  // },[]);

  return (
    <section className="flex flex-col align-center justify-center">
         {
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <MDXRemote  components={components} source={content} />
          </Suspense>
         }   
    </section>
  )
  // return (
  //   <section className="flex flex-col align-center justify-center">
  //        {
  //           (loading || !mdxSource)?(
  //               <span className="loading loading-bars loading-xl"></span>
  //           ):(
  //               <MDXRemote {...mdxSource} />
  //           )
  //        }   
  //   </section>
  // )
}