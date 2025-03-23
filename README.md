## Hướng dẫn chạy code
Gán database URL vào DATABASE_URL trong file .env

Chạy các lệnh sau:
1. `npm install`
2. Tạo một console mới chạy lệnh tạo schema cơ sở dữ liệu `npx prisma migrate dev --name init`
3. Nếu muốn xem dữ liệu thì chạy lệnh `npx prisma studio`
4. Chạy ứng `npm run dev`