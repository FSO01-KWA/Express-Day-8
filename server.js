const express = require('express');
const app = express();
const port = 5000;

console.log('서버 설정 중입니다...'); // 추가

// 정적 파일 제공 설정
app.use(express.static('public'));

console.log('정적 파일 제공 준비 완료'); // 추가

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
