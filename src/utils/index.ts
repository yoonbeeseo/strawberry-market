export const isEmail = (email: string): boolean => {
  if (email.length === 0) {
    return false;
  }
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  return regex.test(email);
};

export function emailValidator(email: string) {
  if (!isEmail(email)) {
    return "잘못된 이메일 형식입니다.";
  }
  return null;
}

export function passwordValidator(
  pwd: string,
  min: number = 6,
  max: number = 18
) {
  if (pwd.length === 0) {
    return "비밀번호를 입력해주세요.";
  }
  if (pwd.length < min || pwd.length > max) {
    return `비밀번호는 ${min}~${max}자리입니다.`;
  }
  return null;
}

export const isKor = (text: string) => {
  const korean = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/;
  return korean.test(text);
};
export const isKorCharacter = (char: string) => {
  const regex = /^[ㄱ-ㅎ|ㅏ-ㅣ]+$/;
  return regex.test(char);
};

export function korValidator(name: string) {
  const texts = Array.from({ length: name.length }, (_, i) => name[i]);
  const foundSingleChar = texts.find((item) => isKorCharacter(item));
  if (foundSingleChar) {
    return "모음/자음만 입력할 수 없습니다.";
  }
  if (name.length <= 0) {
    return "이름은 2글자 이상이어야 합니다.";
  }
  if (!isKor(name)) {
    return "한글만 써주세요.";
  }
  return null;
}

export const isNum = (n: number | string) => {
  const regex = /^[0-9]+$/;
  return regex.test(n.toString());
};

export function mobileValidator(mobile: string) {
  if (!isNum(mobile)) {
    return "숫자만 입력해주세요.";
  }

  if (!mobile.startsWith("010")) {
    return "휴대전화는 010으로 시작해야 합니다.";
  }

  if (mobile.length !== 11) {
    return "휴대전화는 11자리입니다.";
  }

  return null;
}
