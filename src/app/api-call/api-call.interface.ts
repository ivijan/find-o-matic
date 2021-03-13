export interface MetaData {
  pagination: PaginationConfig;
}

export interface PaginationConfig {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface UsersRequest {
  code: number;
  meta: MetaData;
  data: UserData[];
}

export interface PostData {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}
export interface PostsRequest {
  code: number;
  meta: MetaData;
  data: PostData[];
}
