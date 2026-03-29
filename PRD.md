# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Product Name

**Billiard Scores**

## Version

MVP – v1.0

## Document Purpose

Tài liệu này mô tả các yêu cầu sản phẩm (PRD) cho phiên bản **MVP** của ứng dụng Billiard Scores. Mục tiêu là thống nhất phạm vi, tính năng cốt lõi và giới hạn triển khai cho đội phát triển (Product / Design / Engineering).

---

## 1. Product Overview

### 1.1 Problem Statement

Người chơi billiard (đặc biệt tại quán bia, câu lạc bộ) cần một cách **ghi điểm nhanh, đơn giản**, hỗ trợ **nhiều người chơi**, đồng thời có thể **theo dõi các trận đấu hoặc giải đấu** do người khác tạo mà không cần các tính năng mạng xã hội phức tạp.

### 1.2 Product Goals

* Ghi điểm trận đấu billiard nhanh và trực quan trên mobile
* Tạo và quản lý các giải đấu nhỏ
* Cho phép người dùng theo dõi trực tiếp (Live) trận đấu do người khác tạo
* MVP gọn nhẹ, dễ dùng, dễ mở rộng

### 1.3 Non-Goals (Ngoài phạm vi MVP)

* Mạng xã hội, like, follow
* Video livestream
* Thống kê nâng cao
* Betting, ranking cá nhân người dùng

---

## 2. Target Users

* Người chơi billiard nghiệp dư / phong trào
* Nhóm bạn chơi billiard tại quán
* Theo dõi giải đấu quốc tế và thứ hạng của các game thủ Pro yêu thích

---

## 3. Scope – MVP Features

### 3.1 Authentication (Tối giản)

**Required**

* Đăng ký / Đăng nhập bằng Email + Password
* Guest mode (dùng nhanh không cần tài khoản)

---

## 4. Core Features

### 4.1 Scoreboard – Tính điểm (Core Feature)

#### Objective

Cho phép người dùng ghi điểm nhanh cho **một trận billiard có nhiều người chơi**, giống bảng điểm ngoài quán. Trận đấu **không lưu lịch sử, không lưu kết quả**.

#### User Flow

1. Người dùng chọn **Scoreboard**
2. Tạo trận đấu mới
3. Thêm người chơi
4. Ghi điểm trong quá trình chơi
5. Kết thúc trận → thoát

#### Functional Requirements

* Tạo trận đấu nhanh với:

  * Tên trận (tuỳ chọn)
  * Số người chơi: không giới hạn cứng
* Thêm người chơi:

  * Tên người chơi (text)
  * Điểm ban đầu = 0

##### Giao diện tính điểm

* Mỗi người chơi hiển thị trên **1 dòng** gồm:

  * Tên người chơi
  * Điểm hiện tại (hiển thị lớn, dễ nhìn)
  * Nút ➖ / ➕
* Hành vi:

  * Nhấn ➕: +1 điểm
  * Nhấn ➖: -1 điểm
  * Cho phép điểm âm

##### Trạng thái trận đấu

* Trận đấu chỉ tồn tại trong **phiên hiện tại**
* Nút chức năng:

  * Reset điểm
  * Kết thúc trận

##### Kết thúc trận

* Không lưu kết quả
* Không tạo lịch sử
* Quay về màn hình Play

**Design Principle**: "Dùng xong là xong – như bảng điểm viết phấn"

---

### 4.2 Tournaments – Giải đấu (MVP Version)

#### Objective

Cho phép người dùng tạo và quản lý **giải đấu nhỏ**, phục vụ chơi phong trào.

#### Functional Requirements

* Tạo giải đấu:

  * Tên giải
  * Danh sách người chơi
* Tự động tạo cặp đấu:

  * Knockout **hoặc** vòng tròn đơn giản
* Trong giải:

  * Ghi điểm từng trận
  * Hiển thị bảng kết quả giải

#### Out of Scope (MVP)

* Seed nâng cao
* Double elimination
* Giải đấu nhiều bảng lớn

---

### 4.3 Live Matches – Theo dõi trận đấu

#### Objective

Cho phép người dùng theo dõi **trực tiếp điểm số** của một trận đấu do người khác tạo thông qua **mã trận đấu**.

#### Functional Requirements

* Màn hình nhập **mã trận đấu**
* Sau khi nhập mã hợp lệ:

  * Hiển thị trận đấu tương ứng
  * Điểm số cập nhật real-time

#### Permissions

* Người xem:

  * Chỉ có quyền xem
  * Không chỉnh sửa điểm

---

## 5. Pro Tournaments & Rankings (MVP nhẹ)

### Objective

Cung cấp thông tin tham khảo về các giải billiard chuyên nghiệp trên thế giới.

### Functional Requirements

* Danh sách giải đấu lớn (static):

  * Ví dụ: World Pool Championship, US Open Pool
* Cho phép xem:

  * Kết quả các trận
  * Bảng xếp hạng tuyển thủ

### Data Source

* Static data / mock data cho MVP
* Giai đoạn sau tích hợp API thật

---
## 6. Architectural proposal

* Front-end react native
* Back-end firebase
* Mục tiêu cần triển khai nhanh product các tính năng có thể thêm vao sau này 


## 7. Non-Functional Requirements (MVP)

* Mobile-first (iOS / Android)
* UI rõ ràng, dễ dùng trong môi trường ánh sáng quán
* Thao tác nhanh, ít bước
* Hỗ trợ offline cho Scoreboard (phiên hiện tại)

---

## 8. Success Metrics (MVP)

* Người dùng có thể tạo và ghi điểm trận đấu trong < 30 giây
* Ghi điểm không lỗi trong suốt trận đấu
* Truy cập Live Match thành công bằng mã trận

---

## 9. Future Considerations (Post-MVP)

* Lưu lịch sử trận đấu
* Thống kê người chơi
* Ranking cộng đồng
* Đồng bộ đa thiết bị
* Monetization (ads / pro mode)

---
## 10. User Flow & Screen Flow (MVP)

### 10.1 Overall App Entry Flow
```
Launch App
   ↓
Authentication Check
   ├─ Logged in → Home
   └─ Not logged in
        ├─ Login (Email/Password)
        ├─ Register
        └─ Guest Mode → Home
```

---

### 10.2 Home / Flow
```
Home 
 ├─ Create & Track Matches
 │    ├─ Scoreboard
 │    ├─ Tournaments
 │    └─ Tracking (Live Match)
 └─ Pro Tournaments & Rankings
      ├─ World Tournaments
      └─ Player Rankings
```

---

### 10.3 Scoreboard – Multi-player Match Flow

Home
   ↓
Create & Track Matches
   ↓
Scoreboard
   ↓
Create Match
   ├─ Enter Match Name (optional)
   └─ Add Players (N players)
        ↓
Scoreboard Screen (Live Scoring)
   ├─ + / - Score per player
   ├─ Reset Scores
   └─ End Match
        ↓
Exit Match (No Save)
   ↓
Back to Create & Track Matches
```

---

### 10.4 Tournament Flow 
Home
   ↓
Create & Track Matches
   ↓
Tournaments
   ↓
Create Tournament
   ├─ Tournament Name
   └─ Add Players
        ↓
Auto Generate Matches
   ↓
Tournament Match List
   ↓
Match Scoreboard
   ↓
Update Results
   ↓
Tournament Standings
```

---

### 10.5 Live Match Tracking Flow
Home
   ↓
Create & Track Matches
   ↓
Tracking (Live Match)
   ↓
Enter Match Code
   ├─ Invalid Code → Error Message
   └─ Valid Code
        ↓
Live Match View
   ├─ View Players
   ├─ View Live Scores (Read-only)
   └─ Exit Tracking
```

---

### 10.6 Pro Tournaments & Rankings Flow
Home
   ↓
Pro Tournaments & Rankings
   ↓
World Tournaments List
   ↓
Tournament Details
   ↓
Match Results

OR

Home
   ↓
Pro Tournaments & Rankings
   ↓
Player Rankings
   ↓
Player List / Standings
```

---

### 10.7 Screen List (MVP)

**Authentication**
- Login
- Register
- Guest Entry

**Main**
- Home 
- Create & Track matches
- Pro Tournaments & Rankings

**Create & Track Matches**
- Scoreboard – Create Match
- Scoreboard – Live Scoring
- Tournament – Create
- Tournament – Match List
- Tournament – Standings
- Live Match – Enter Code
- Live Match – View Only

**Pro Tournaments & Rankings**
- World Tournaments List
- Tournament Details
- Player Rankings

---
**End of Document**