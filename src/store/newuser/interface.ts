export interface Menu {
  mid: number,
  mkey: String,
  mname: String,
  micon: String,
  mpath: String,
  mtip: String,
  mrender: String,
  mpid: number,
  mlevel: Number,
  mstatus: Number,
  child?: Array<Menu>
}

export interface CurrentUser {
  user: any,
  menu: Array<Menu>,
  dept: any
}

export interface State {
  currentUser: CurrentUser,
  isLogin: boolean
}
