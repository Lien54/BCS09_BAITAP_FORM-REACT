import * as Yup from "yup";

export const validateUser = Yup.object({
  // nơi chứa các thuộc tính từ initialValues cần validate
  // required giúp kiểm tra dữ liệu rỗng
  maSV: Yup.string().required("Vui lòng không bỏ trống mã sinh viên"),
  hoTen: Yup.string()
    .required("Vui lòng nhập họ tên")
    .min(3, "Vui lòng nhập tối thiểu 3 kí tự"),
  email: Yup.string()
    .email("Vui lòng nhập đúng định dạng email")
    .required("Vui lòng không bỏ trống email"),
  // hàm matches giúp kiểm tra dữ liệu dựa vào regex: có 2 giá trị tuyền vào: thứ 1 là chuỗi regex, thứu 2 là câu thông báo khi dữ liệu không khớp
  soDienThoai: Yup.string()
    .matches(
      /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
      "Vui lòng nhập đúng định dạng số điện thoại"
    )
    .required("Vui lòng không bỏ trống số điện thoại")
});
