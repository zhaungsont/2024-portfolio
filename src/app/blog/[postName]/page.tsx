import React from 'react';
import { repoName, postsFolder } from '@/models/blogRepo';
import matter from 'gray-matter';
import { marked } from 'marked';
import { PostMetadata, PostsMetadata } from '@/models/posts.interface';
import SubPage from '@/app/ui/SubPage/SubPage';

export default async function page({
	params,
}: {
	params: { postName: string };
}) {
	const { postName } = params;
	console.log('return params', params);
	const response = await fetch(
		`https://api.github.com/repos/${repoName}/contents/${postsFolder}/${postName}.md`
	);
	const file: PostsMetadata = await response.json();
	const fileContent = await fetch(file.download_url);
	const fileText = await fileContent.text();
	const { data: metadata, content } = matter(fileText);
	console.log('metadata', metadata);
	console.log('content', content);
	return (
		<SubPage title={metadata.title}>
			<div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
		</SubPage>
	);
}
