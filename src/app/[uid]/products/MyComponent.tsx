"use client";

import { SubmitButton } from "@/components";
import { AUTH } from "@/contexts";

const MyComponent = () => {
  const { user } = AUTH.use();
  if (!user) {
    return null;
  }

  return (
    <div>
      {!user.sellerId ? (
        <div className="flex flex-col gap-y-5 p-5 ">
          <h1>판매자 계정이 아닙니다. 사업자등록번호를 등록해주세요.</h1>
          <SubmitButton className="px-2.5">사업자 등록번호 입력</SubmitButton>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyComponent;
