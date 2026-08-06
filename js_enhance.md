### IIFE là gì?

1. Định nghĩa: Là một hàm ẩn danh (anonymous function) được đặt trong dấu ngoặc đơn () và có thêm dấu ngoặc đơn () ở cuối để kích hoạt chạy liền.
2. Cú pháp cơ bản:

- Dùng dấu ngoặc đơn bọc quanh hàm để biến nó thành biểu thức.
- Thêm dấu ngoặc () ở cuối để gọi hàm chạy luôn.
  (function()
  { console.log('Chạy ngay!');
  })();

3. Tác dụng chính

- Tránh trùng tên biến: Giữ cho các biến bên trong không bị lẫn vào phạm vi toàn cục (global scope).
- Tạo dữ liệu riêng tư: Giúp ẩn các biến khỏi bên ngoài
- Chạy mã nhanh: Dùng khi chỉ cần thực thi một đoạn code một lần duy nhất.

### Scope

1. Các loại phạm vi

- Global - Toàn cầu
- Code block - Khối mã: let, const
- Local scope - Hàm: var, function

2. Khi gọi mỗi hàm luôn có một phạm vi mới được tạo ra
3. Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó

### Khái niệm Closure

1. Khái niệm: Closure là một hàm có khả năng ghi nhớ và truy cập các biến từ phạm vi (scope) của hàm cha bao quanh nó, ngay cả khi hàm cha đã thực thi xong.
2. Cách thức hoạt động

- Tạo phạm vi: Hàm cha chạy và khai báo biến.
- Đóng gói: Hàm con được tạo ra bên trong và tham chiếu tới biến đó.
- Ghi nhớ: Khi hàm cha kết thúc, vùng nhớ của nó thông thường sẽ bị xóa, nhưng nhờ closure, hàm con vẫn "giữ chặt" liên kết với các biến của cha để dùng sau này

### Hoisting

1. Định nghĩa: Là cơ chế trong JavaScript giúp đẩy phần khai báo biến và hàm lên đầu phạm vi (scope) trước khi mã được thực thi. Việc này diễn ra trong quá trình biên dịch, giúp bạn có thể gọi hàm hoặc dùng biến trước khi viết dòng lệnh khai báo thực tế.
2. Cơ chế hoạt động với Biến (Variables)

- Từ khóa var: Được đưa lên đầu scope và gán giá trị mặc định là undefined. Bạn có thể gọi biến trước khi khai báo nhưng giá trị sẽ là undefined.
- Từ khóa let và const: Cũng được đưa lên đầu scope nhưng không được khởi tạo giá trị. Chúng nằm trong vùng gọi là Temporal Dead Zone (Vùng chết tạm thời), gây ra lỗi ReferenceError nếu bạn truy cập trước dòng khai báo.

3. Cơ chế hoạt động với Hàm (Functions)

- Function Declaration (Khai báo hàm): Toàn bộ cấu trúc hàm được đưa lên đầu scope. Bạn có thể gọi hàm trước đoạn code định nghĩa.
- Function Expression / Arrow Function: Không được hoisting toàn bộ nếu dùng let hoặc const; nếu dùng var, phần biểu thức hàm sẽ mang giá trị undefined và không thể gọi như một hàm bình thường
