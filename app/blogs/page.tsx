import { getPosts } from "@/helper/blog"
import BlogCard from "@/PageComponents/BlogPage/BlogCard";

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