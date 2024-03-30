import React from 'react';
import { useRouter } from 'next/router';
import matter from 'gray-matter';
import { marked } from 'marked';

export default function Post({ post }) {
	if (!post) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>{post.metadata.title}</h1>
			<p>{post.metadata.date.toDateString()}</p>
			<div dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
		</div>
	);
}
