"use client"
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import {  useLayoutEffect, useState } from 'react'
type Props = {
    content: string
}

export const BlogMD =  ({content}: Props) => {
  const [loading, setLoading] = useState(true);
  const [mdxSource, setMdxSource] = useState<any>(null);
  const getMdxSource = async () => {
    setLoading(true);
    const mdx = await serialize(content);
    setMdxSource(mdx);
    setLoading(false);
  }

  useLayoutEffect(() => {
    getMdxSource();  
  },[]);
  return (
    <section className="flex flex-col align-center justify-center">
         {
            (loading || !mdxSource)?(
                <span className="loading loading-bars loading-xl"></span>
            ):(
                <MDXRemote {...mdxSource} />
            )
         }   
    </section>
  )
}