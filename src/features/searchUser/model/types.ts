import { IUser } from '@/entities/user';
import { ICommonSearchData } from '@/shared/types';

//유저 검색
export interface ISearchUserResDTO {
  user: ICommonSearchData<IUser[]>;
}
