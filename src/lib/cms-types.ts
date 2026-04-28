export type Article = {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  excerpt: string | null;
  content_html: string;
  cover_image: string | null;
  read_time: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Review = {
  id: string;
  author_name: string;
  location: string | null;
  rating: number;
  text: string;
  service: string | null;
  date: string | null;
  display_order: number;
  published: boolean;
  created_at: string;
};

export type GalleryItem = {
  id: string;
  image_path: string;
  alt_text: string;
  caption: string | null;
  display_order: number;
  published: boolean;
  created_at: string;
};

export type PageContent = {
  id: string;
  page_key: string;
  block_key: string;
  value: string;
  updated_at: string;
};