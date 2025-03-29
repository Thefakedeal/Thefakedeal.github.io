import { getPosts } from '@/helper/blog';
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const staticMaps:MetadataRoute.Sitemap = [
    {
      url: 'https://samirshrestha.info.np',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://samirshrestha.info.np/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://samirshrestha.info.np/blogs',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];
  const posts = getPosts();
  const dymanicMaps:MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://samirshrestha.info.np/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'daily',
    priority: 0.99,
  }));
  const maps: MetadataRoute.Sitemap = [...staticMaps, ...dymanicMaps];
  return maps;
}