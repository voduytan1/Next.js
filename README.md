## Hướng dẫn chạy code
Gán database URL vào DATABASE_URL trong file .env

Chạy các lệnh sau:
1. `npm install`
2. Tạo một console mới chạy lệnh tạo schema cơ sở dữ liệu `npx prisma migrate dev --name init`
3. Nếu muốn xem dữ liệu thì chạy lệnh `npx prisma studio`
4. Chạy ứng `npm run dev`

## API route

 GET /api/users (lấy danh sách user)
 - body: không cần
 - response: 200, return list user
 - side response 500, fetch danh sách user thất bại


 POST /api/users (tạo một user)
 - body: trường name
 - response: 200, return user đã đăng ký
 - side response: 500, tạo user thất bại 

 GET /api/users/[id] (tìm một user bằng id)
  - body: không cần
   - response: 200, return user
 - side response 500, fetch user thất bại

  DELETE /api/users/[id] (xóa một user bằng id)
  - body: không cần
   - response: 200, return user
 - side response 500, xóa user thất bại

  PUT /api/users/[id] (update một user bằng id)
  - body: trường name
   - response: 200, return user
 - side response 500, update user thất bại