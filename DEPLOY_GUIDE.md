# 다년도 배포 가이드

이 가이드는 교회력 웹사이트가 메인 사이트와 함께 여러 연도(예: `/2023`, `/2024`)를 지원하도록 배포하는 방법을 설명합니다.

## 1. 코드 준비 (Vite 설정)

웹사이트가 하위 디렉토리(예: `/2023/`)에서 올바르게 작동하려면, `vite.config.mjs` 파일의 `base` 경로를 상대 경로로 설정해야 합니다.

**권장 방법:**
**모든 브랜치**(main, 2023, 2024 등)의 `vite.config.mjs`를 수정하여 상대 경로를 사용하도록 설정하세요. 이렇게 하면 빌드 결과물을 어떤 디렉토리에 두어도 작동합니다.

**파일:** `vite.config.mjs`
```javascript
export default defineConfig({
    root: './',
    base: '', // 기존 '/'에서 '' (빈 문자열) 또는 './' 로 변경
    build: {
        // ... 기존 설정
    },
    // ...
})
```

## 2. 각 버전 빌드

각 브랜치를 체크아웃하고 빌드해야 합니다.

### 2023년도 버전
```bash
git checkout 2023
# vite.config.mjs의 base가 '' 인지 확인하세요
npm install
npm run build
# 결과물은 dist/ 폴더에 생성됩니다.
# 이 폴더의 이름을 변경하거나 서버로 이동시킬 준비를 하세요.
```

### 2024년도 버전
```bash
git checkout 2024
# vite.config.mjs의 base가 '' 인지 확인하세요
npm install
npm run build
```

### Main (2025년도)
```bash
git checkout main
# vite.config.mjs의 base가 '' 인지 확인하세요
npm install
npm run build
```

## 3. 서버 디렉토리 구조

빌드된 파일들을 서버의 웹 루트 디렉토리(`/var/www2/kmc/lectionary.kmc.or.kr/`)에 다음과 같이 구성합니다.

```
/var/www2/kmc/lectionary.kmc.or.kr/
├── dist/          <-- Main 브랜치 (2025) 빌드 결과물
├── 2023/          <-- 2023 브랜치 dist/ 폴더 내용
├── 2024/          <-- 2024 브랜치 dist/ 폴더 내용
├── 2026/          <-- 2026 브랜치 dist/ 폴더 내용
```

## 4. Nginx 설정

제공된 `nginx-multiversion.conf` 파일을 사용합니다.
이 설정은 다음과 같이 동작합니다:
- `/` -> `dist/` 폴더 (Main/2025)를 보여줍니다.
- `/2025` -> `dist/` 폴더 (Main/2025)를 보여줍니다 (Alias).
- `/2023` -> `2023/` 폴더를 보여줍니다.
- `/2024` -> `2024/` 폴더를 보여줍니다.

## 5. 배포 적용

1. 위 구조대로 빌드된 폴더들을 서버에 복사합니다.
2. Nginx 설정 파일을 업데이트합니다 (`/etc/nginx/sites-available/...`).
3. Nginx 설정 테스트: `sudo nginx -t`
4. Nginx 재시작: `sudo systemctl reload nginx`
