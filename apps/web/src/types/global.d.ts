type UndefinedType<T> = {
  [K in keyof T]?: T[K];
};

type CountInit<T> = {
  _count: T;
};

interface Pagination<T> {
  skip: number; // 시작점
  take: number; // 출력개수
  lastPage: boolean;
  data: T[];
}
interface PageQuery {
  skip: number; // 시작점
  take: number; // 출력개수
}

interface BaseInit {
  createTime?: string;
  createBy?: number;
  updateTime?: string;
  updateBy?: number;
}
