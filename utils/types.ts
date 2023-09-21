export type Post = {
  annunci_id: string;
  creation_date: string;
  last_modification_date: string;
  title: string;
  body: string;
  author: string;
  tag: string;
  images: string | null;
};

export type Profile = {
  last_login: string | null;
  primary_group: string | null;
  username: string | null;
  uuid: string | null;
};
