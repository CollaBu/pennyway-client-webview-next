import { IUser } from '@/entities/user';
import { IScrollablePage } from '@/shared/types';

//유저 검색
export interface ISearchUserResDTO {
  user: IScrollablePage<IUser[]>;
}
