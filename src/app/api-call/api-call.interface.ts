export interface IMetaData {
  pagination: IPaginationConfig;
}

export interface IPaginationConfig {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export interface IUserData {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface IUsersRequest {
  code: number;
  meta: IMetaData;
  data: IUserData[];
}

export interface IPostData {
  id: number;
  user_id: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}
export interface IPostsRequest {
  code: number;
  meta: IMetaData;
  data: IPostData[];
}
