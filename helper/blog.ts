import fs from "fs";
import path from "path";
import matter from "gray-matter";


export const getPosts =  () => {
    const files = fs.readdirSync(path.join(process.cwd(), "/blogs"));
    const posts = files.map((file) => {
        const slug = file.replace(".mdx", "");
        const markdownWithMeta = fs.readFileSync(
            path.join(process.cwd(), "/blogs", slug + ".mdx"),
            "utf-8"
        );
        const { data }= matter(markdownWithMeta);
        return {
            slug,
            title: data.title,
            image: data.image,
            description: data.description,
            date: data.date,
            category: data.category,
        }

    });
    return posts;
}

export  function getPostBySlug(slug:string) {
    const filePath = path.join(process.cwd(), "/blogs", `/${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
        return null; // Return null if the file does not exist
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    // check if file exists
    
    const { data, content} = matter(fileContent);
    // const contentData = await compileMDX({source: content});
    
    return { data:{
        title: data.title,
        image: data.image,
        description: data.description || "",
        date: data.date,
        category: data.category,
        tags: data.tags||[],
    }, content};
  }