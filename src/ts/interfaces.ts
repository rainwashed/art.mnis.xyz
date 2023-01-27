interface PostInterface {
  title: string;
  description: string;
  timestamp: number;
  thumbnail: string;
  src: string;
  uid: string;
}

interface ManifestInterface {
  signature: string;
  posts: PostInterface[];
  metadata: {
    postCount: number;
  };
  motd: string;
}

export type { PostInterface, ManifestInterface };
