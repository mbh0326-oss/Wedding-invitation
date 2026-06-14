# Wedding Invitation

정적 HTML/CSS/JS로 만든 모바일 청첩장입니다.

## 공개 주소

https://wedding-invitation-inky-ten.vercel.app

현재는 Vercel에 로컬 업로드 방식으로 배포되어 있습니다.

## 구성

- `index.html`: 청첩장 본문과 샘플 정보
- `styles.css`: 모바일 우선 레이아웃과 디자인
- `script.js`: 계좌 복사, 공유, 갤러리 확대 기능
- `assets/cover.png`: 샘플 커버 이미지

## 수정할 곳

실제 정보는 `index.html`에서 아래 항목을 교체하면 됩니다.

- 신랑/신부 이름
- 예식 날짜와 시간
- 예식장 이름과 주소
- 연락처
- 계좌 정보
- `assets/cover.png`와 갤러리 이미지

## 로컬 확인

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:8000/
```

## Vercel 재배포

수정 후 아래 명령으로 프로덕션에 다시 배포합니다.

```sh
npx -y vercel --prod --yes
```

Vercel 프로젝트는 `wedding-invitation`으로 연결되어 있으며, `.vercel` 폴더는 로컬 배포 설정이므로 Git에 올리지 않습니다.

## GitHub Pages

GitHub 저장소의 Pages 설정에서 배포 소스를 `main` 브랜치의 루트로 선택하면
`index.html`이 청첩장으로 열립니다.

현재 저장소는 다른 계정 소유라 collaborator 권한만으로는 Pages 설정을 바꿀 수 없습니다. 저장소 owner가 Pages 설정을 직접 켜야 합니다.
