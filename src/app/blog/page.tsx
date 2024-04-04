import React from 'react';

import matter from 'gray-matter';
import markdownit from 'markdown-it';
import { Inter, Fira_Mono } from 'next/font/google';
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';

import SubPage from '@/app/ui/SubPage/SubPage';
import { repoName, postsFolder } from '@/models/blogRepo';
import { PostsMetadata, PostMetadata } from '@/models/posts.interface';

import styles from './page.module.scss';

const md = markdownit();
const inter = Inter({ subsets: ['latin'] });
const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

async function fetchPosts() {
  const response = await fetch(
    `https://api.github.com/repos/${repoName}/contents/${postsFolder}`,
  );
  const files: PostsMetadata[] = await response.json();
  if (!Array.isArray(files)) {
    console.warn('No posts found:', files);
    return { posts: [] };
  }

  const posts = await Promise.all(
    files.map(async (file) => {
      if (file.type === 'file' && file.name.endsWith('.md')) {
        const fileResponse = await fetch(file.download_url);
        const fileContent = await fileResponse.text();
        const { data: metadata, content } = matter(fileContent);
        // console.log('metadata', metadata);
        const html = md.render(content);
        const sanitizedHtml = sanitizeHtml(html, {
          allowedTags: [], // Remove all tags
          allowedAttributes: {}, // Remove all attributes
        });

        // replace all newlines with spaces and trim the text,
        // and then get the first 100 characters
        const previewText = `${sanitizedHtml
          .replace(/\n/g, ' ')
          .trim()
          .substring(0, 100)}...`;

        return {
          slug: file.name.replace('.md', ''),
          metadata,
          preview: previewText,
          repoName,
          postsFolder,
        } as PostMetadata;
      }
      return undefined;
    }),
  );

  // Filter out any undefined values and sort posts by date
  const filteredPosts = posts
    .filter((post) => post !== undefined)
    .sort(
      (a, b) =>
        new Date(b!.metadata.date).getTime() -
        new Date(a!.metadata.date).getTime(),
    ) as PostMetadata[];

  // console.log('filteredPosts', filteredPosts);
  return { posts: filteredPosts };
}

export default async function page() {
  const { posts } = await fetchPosts();
  // console.log('posts', posts);

  if (!posts.length) {
    return <SubPage title="Blog">No posts found.</SubPage>;
  }

  return (
    <SubPage title="Blog">
      {/* <div className={`${inter.className} ${styles.post}`}>
        <Link href="/blog" className={styles.invincibleAnchor}>
          <h2 className={firaMono.className}>Welcome to my blog!</h2>
          <p>
            2024-01-01 <code>CAT</code>
          </p>
        </Link>
        <div className={styles.preview}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis
          nostrum dolore repellat, vitae enim error labore alias possimus
          numquam dolores quasi deleniti impedit, repudiandae placeat illo
          voluptates voluptatibus architecto!
          <div className={styles.readMore}>
            <Link href="/blog" className={styles.invincibleAnchor}>
              <span>Read More</span>
            </Link>
          </div>
        </div>
      </div> */}
      {posts.map((post) => (
        <div className={`${inter.className} ${styles.post}`} key={post.slug}>
          <Link href={`/blog/${post.slug}`} className={styles.invincibleAnchor}>
            <h2 className={firaMono.className}>{post.metadata.title}</h2>
            <p>
              {post.metadata.date.toDateString()}{' '}
              <code>{post.metadata.category}</code>
            </p>
          </Link>
          <div className={styles.preview}>
            {post.preview}

            <div className={styles.readMore}>
              <Link
                href={`/blog/${post.slug}`}
                className={styles.invincibleAnchor}
              >
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </SubPage>
  );
}
