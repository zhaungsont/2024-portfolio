import React from 'react';
import matter from 'gray-matter';
import SubPage from '@/app/ui/SubPage/SubPage';
import { Inter, Fira_Mono } from 'next/font/google';
import markdownit from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

interface PostsMetadata {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url: string;
	type: string;
	_links: {
		self: string;
		git: string;
		html: string;
	};
}

interface PostMetadata {
	slug: string;
	metadata: {
		title: string;
		date: Date;
		description: string;
	};
	preview: string;
}
const md = markdownit();
const inter = Inter({ subsets: ['latin'] });
const firaMono = Fira_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

async function fetchPosts() {
	const repoName = 'zhaungsont/blog';
	const postsFolder = 'posts';
	const response = await fetch(
		`https://api.github.com/repos/${repoName}/contents/${postsFolder}`
	);
	const files: PostsMetadata[] = await response.json();
	const posts = await Promise.all(
		files.map(async (file) => {
			if (file.type === 'file' && file.name.endsWith('.md')) {
				const fileResponse = await fetch(file.download_url);
				const fileContent = await fileResponse.text();
				const { data: metadata, content } = matter(fileContent);
				const html = md.render(content);
				const sanitizedHtml = sanitizeHtml(html, {
					allowedTags: [], // Remove all tags
					allowedAttributes: {}, // Remove all attributes
				});

				// replace all newlines with spaces and trim the text,
				// and then get the first 100 characters
				const previewText = sanitizedHtml
					.replace(/\n/g, ' ')
					.trim()
					.substring(0, 100);

				return {
					slug: file.name.replace('.md', ''),
					metadata,
					preview: previewText,
				} as PostMetadata;
			}
		})
	);

	// Filter out any undefined values and sort posts by date
	const filteredPosts = posts
		.filter((post) => post !== undefined)
		.sort(
			(a, b) =>
				new Date(b!.metadata.date).getTime() -
				new Date(a!.metadata.date).getTime()
		) as PostMetadata[];

	// console.log('filteredPosts', filteredPosts);
	return { posts: filteredPosts };
}

export default async function page() {
	const { posts } = await fetchPosts();

	return (
		<SubPage title="Blog">
			{posts.map((post) => (
				<div className={inter.className} key={post.slug}>
					<h2 className={firaMono.className}>{post.metadata.title}</h2>
					<p>{post.metadata.date.toDateString()}</p>
					<div>{post.preview}</div>
				</div>
			))}
		</SubPage>
	);
}
