import React from 'react';
import { useRouter } from 'next/router';
import matter from 'gray-matter';
import { marked } from 'marked';
import { PostMetadata, PostsMetadata } from '@/models/posts.interface';
export default async function Post({ post }: { post: PostMetadata }) {
	if (!post) {
		return <div>Loading...</div>;
	}

	const { repoName, postsFolder, slug } = post;
	const response = await fetch(
		`https://api.github.com/repos/${repoName}/contents/${postsFolder}/${slug}.md`
	);
	const file: PostsMetadata = await response.json();
	const fileContent = await fetch(file.download_url);
	const fileText = await fileContent.text();
	const { data: metadata, content } = matter(fileText);

	return (
		<div>
			<h1>{metadata.title}</h1>
			<p>{metadata.date.toDateString()}</p>
			<div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
		</div>
	);
}
