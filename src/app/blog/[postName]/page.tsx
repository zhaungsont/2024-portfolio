import React from 'react';

import matter from 'gray-matter';
import { marked } from 'marked';

import SubPage from '@/app/ui/SubPage/SubPage';
import { repoName, postsFolder } from '@/models/blogRepo';
import { PostsMetadata } from '@/models/posts.interface';

export default async function page({
  params,
}: {
  params: { postName: string };
}) {
  const { postName } = params;
  const response = await fetch(
    `https://api.github.com/repos/${repoName}/contents/${postsFolder}/${postName}.md`,
  );
  const file: PostsMetadata = await response.json();
  const fileContent = await fetch(file.download_url);
  const fileText = await fileContent.text();
  const { data: metadata, content } = matter(fileText);

  const date = Date();
  return (
    <SubPage title={metadata.title} backPath="/blog">
      {date}
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </SubPage>
  );
}
