import { Menu } from '../newuser/interface'

export interface State {
  currentPage: Menu | null,
  cachePages: Array<Menu>,
  expandMisMenu: boolean,
  loading: boolean
}
