# TASK_DECOMPOSITION.md — Prompt AI cho Lab 1

> Quy tắc bắt buộc: mỗi prompt chỉ giải quyết **1 sub-task**, sau khi AI trả code thì đọc/kiểm tra rồi mới `git commit` atomic. **Không** gộp nhiều sub-task vào 1 prompt (one-shot = 0 điểm).

---

## Exercise 1: Semantic DOM Architecture & A11y Contract

### T-01: Semantic DOM landmarks (0 divs, skip-link, 1 h1)
```
Bạn là kỹ sư frontend cấp senior. Hãy viết phần HTML cho landmark
structure của một trang portfolio cá nhân, tuân thủ nghiêm ngặt các
ràng buộc sau:
- Tuyệt đối KHÔNG dùng thẻ <div> nào.
- Có đúng 1 thẻ <h1> duy nhất.
- Có skip-link đầu trang: <a href="#main-content" class="skip-link">
  Skip to main content</a>
- Cấu trúc landmark: <header role="banner">, <nav role="navigation"
  aria-label="Primary">, <main id="main-content" role="main">,
  <footer role="contentinfo">.
- Trong <nav> dùng <ul><li><a href="#...">.
- Trong <main> chia 2-3 <section id="..."> cho About và Projects.
- Không viết CSS, không viết JavaScript, chỉ HTML.
Trả về duy nhất đoạn code HTML, không giải thích thêm.
```

Sau khi nhận code → kiểm tra bằng Chrome DevTools > Accessibility >
Landmark tree → commit:
```
git commit -m "feat(html): semantic landmark tree"
```

---

## Exercise 2: Enterprise Developer Portfolio (chia theo T-02A/B/C)

### T-02A: Design tokens & CSS reset
```
Viết file reset.css cho một dự án portfolio, chỉ tập trung vào:
- Universal reset: box-sizing: border-box, margin: 0, padding: 0
  cho *, *::before, *::after.
- html { color-scheme: light dark; }
- body { font-family hệ thống, line-height: 1.6 }
- Khai báo CSS custom properties (design tokens) trong :root cho:
  --bg-primary, --text-primary, --accent, --card-bg (light mode)
  và override lại trong @media (prefers-color-scheme: dark).
- KHÔNG hardcode màu trực tiếp trong bất kỳ selector nào khác,
  chỉ dùng var(--...).
Chỉ trả về CSS, không HTML, không JS.
```
Commit: `git commit -m "feat(css): tokens & reset"`

### T-02B: Responsive 2D Grid layout cho Project Cards
```
Viết CSS cho .project-grid dùng CSS Grid (không dùng Flexbox), yêu cầu:
- display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
- gap dùng đơn vị rem, không dùng margin để tạo khoảng cách giữa item.
- .project-card dùng var(--card-bg), var(--border-color), border-radius: 8px.
- Đảm bảo ở viewport 375px chỉ hiển thị 1 cột, không có scroll ngang.
Chỉ trả về CSS cho phần grid layout này, không đụng tới các class khác.
```
Commit: `git commit -m "feat(css): responsive grid"`

### T-02C: Theme switcher (dark mode engine)
```
Viết JavaScript ES6+ (không dùng var, ưu tiên const) cho nút chuyển
theme, với yêu cầu:
- Chọn phần tử bằng document.querySelector('#theme-btn').
- Khi click: toggle class 'dark-theme' trên document.body.
- Cập nhật thuộc tính aria-pressed trên nút theo trạng thái hiện tại
  (accessibility).
- Lưu lựa chọn vào localStorage với key 'theme' (giá trị 'dark'/'light').
- Khi tải trang, đọc localStorage để áp dụng lại theme đã lưu trước đó.
- Không dùng bất kỳ thư viện ngoài nào.
Chỉ trả về đoạn JS này.
```
Commit: `git commit -m "feat(js): dark mode engine"`

---

## Exercise 3: Resilient Component Architecture (4-state contract)

### T-03A: Loading Skeleton (pure CSS shimmer)
```
Viết CSS cho trạng thái loading-skeleton của một danh sách item, yêu cầu:
- .skeleton-item có height cố định, background dùng linear-gradient
  3 điểm dừng để tạo hiệu ứng shimmer.
- @keyframes shimmer di chuyển background-position từ 200% 0 về -200% 0.
- animation: shimmer 1.5s infinite (hoặc linear infinite).
- Không dùng JavaScript, không dùng ảnh/gif.
Chỉ trả về CSS.
```
Commit: `git commit -m "feat(css): skeleton"`

### T-03B: Live Data State (Flexbox badges + Grid list)
```
Viết HTML + CSS cho trạng thái "đã có dữ liệu" của component, yêu cầu:
- Danh sách item hiển thị dạng CSS Grid (đã có ở T-02B, tái sử dụng).
- Mỗi item có các badge metadata (ví dụ: category, date) dùng Flexbox
  (display: flex, gap) để sắp ngang hàng.
- Dữ liệu badge nhận qua thuộc tính data-* thay vì hardcode text
  trong JS logic.
Chỉ trả về đoạn markup + CSS cho trạng thái này (không đụng vào skeleton
hay error state).
```
Commit: `git commit -m "feat(css): live data state"`

### T-03C: Empty & Error states + accessible retry
```
Viết HTML + JS cho 2 trạng thái empty và error của component, yêu cầu:
- Trạng thái empty: hiển thị message thân thiện + minh hoạ đơn giản
  bằng CSS (không dùng ảnh).
- Trạng thái error: hiển thị message lỗi + nút "Thử lại" có thể focus
  bằng Tab và kích hoạt bằng Enter/Space.
- Nút retry gắn event listener 'click' gọi lại hàm fetch dữ liệu
  (giả định tên hàm là loadData()).
- Đảm bảo phần tử thông báo lỗi có role="alert" để screen reader
  đọc ngay khi xuất hiện.
Chỉ trả về đoạn code cho 2 trạng thái này, không viết lại skeleton
hay live-data state.
```
Commit: `git commit -m "feat(js): empty & error states with retry"`

---

## Lưu ý khi nộp bài
- Copy nguyên văn từng prompt ở trên (hoặc bản bạn đã chỉnh sửa) vào
  `TASK_DECOMPOSITION.md` của repo, kèm sub-task tương ứng.
- Mỗi prompt → 1 commit riêng, message theo đúng format `feat(...)`.
- Trước khi merge/nộp, tự đọc diff (`git diff`) để chắc AI không tự
  thêm thư viện ngoài (jQuery, Bootstrap...) — vi phạm project-rules.md.
- Chuẩn bị sẵn tinh thần cho phần "3-Minute Live Defense": thầy có thể
  đổi 1 chi tiết nhỏ (VD đổi `data-sound` thành `data-audio-src`) và
  yêu cầu bạn tự sửa code trong 60 giây — nên hiểu rõ code AI sinh ra,
  đừng chỉ copy-paste.
