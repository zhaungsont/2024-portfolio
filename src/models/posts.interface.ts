export interface PostsMetadata {
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

export interface PostMetadata {
	slug: string;
	metadata: {
		title: string;
		date: Date;
		category: string;
	};
	preview: string;
	repoName: string;
	postsFolder: string;
}
