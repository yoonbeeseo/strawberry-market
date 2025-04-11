interface User {
  email: string;
  name: string;
  mobile: string;
  uid: string;
  sellerId: string | null; // 판매자용 사업자등록번호
  createdAt: Date; // new Date()
  jusoes: Juso[];
}

interface Juso {
  nickname: string;
  roadAddr: string;
  id: string;
  detail: string; // reset
  zipNo: string; //postcode
}

interface Result {
  success?: boolean;
  message?: string;
}
type PromiseResult = Promise<Result>;
