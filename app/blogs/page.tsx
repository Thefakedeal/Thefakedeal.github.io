import { getPosts } from "@/helper/blog"
import BlogCard from "@/PageComponents/BlogPage/BlogCard";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Samir Shrestha | Blogs",
  description: "Explore insightful blogs on web development, software engineering, and fitness by Samir Shrestha. Learn about Laravel, React, Next.js, performance optimization, strength training, and high-protein meal planning.",  
  openGraph: {
    title: "Samir Shrestha | Blogs",
    siteName: "samirshrestha.info.np",
    type: "website",
    description:"Explore insightful blogs on web development, software engineering, and fitness by Samir Shrestha. Learn about Laravel, React, Next.js, performance optimization, strength training, and high-protein meal planning.",  
    images: [
        {
            url: "https://samirshrestha.info.np/images/avatar.webp"
        },
    ],
    },

    twitter: {
        title: "Samir Shrestha | Blogs",
        description: "Explore insightful blogs on web development, software engineering, and fitness by Samir Shrestha. Learn about Laravel, React, Next.js, performance optimization, strength training, and high-protein meal planning.",  
        card: "summary_large_image",
        site: "samirshrestha.info.np",
        images: [
          {
              url: "https://samirshrestha.info.np/images.avatar.webp"
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


export default async function page() {
  const posts = getPosts();
  return (
    <main className="w-screen flex flex-col items-center">
        <section className="glass w-full md:w-3/4 p-4 mb-5 flex flex-col gap-2 min-h-[80vh]">
            <h1>
                Blogs
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {
                posts.map((post) => (
                  <BlogCard key={post.slug} blog ={{ 
                    title: post.title,
                    slug: post.slug,
                    image: post.image,
                    description: post.description
                   }} />
                ))
              }
            </div>
        </section>
    </main>
  )
}