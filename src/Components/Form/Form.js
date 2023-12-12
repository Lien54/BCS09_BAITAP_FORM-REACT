import { useFormik } from "formik";
import React from "react";
import { validateUser } from "./../../util/validation";
import TableUser from "./TableUser";
import { useDispatch, useSelector } from "react-redux";
import { getValueUser, updateUser } from "./../../redux/slice/userSlice";
const Form = () => {
  const { showError } = useSelector((state) => state.userSlice);
  
  // sử dụng 2 hook: useSelector và useDispatch
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(getValueUser(values));
      resetForm();
    },

    validationSchema: validateUser,
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
    resetForm,
  } = formik; // destructuring

  // console.log(errors);
  console.log(touched);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="mb-5 font-bold text-2xl text-center">
        Thông tin Sinh Viên
      </h1>

      <div>
        {/* truyền onSubmit */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="maSV"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Mã sinh viên
              </label>
              <input
                type="text"
                name="maSV"
                id="maSV"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập mã sinh viên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
              />
              {errors.maSV && touched.maSV ? (
                <p className="text-red-500  text-xs">{errors.maSV}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="hoTen"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Họ tên
              </label>
              <input
                type="text"
                name="hoTen"
                id="hoTen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập họ tên"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTen}
              />
              {errors.hoTen && touched.hoTen ? (
                <p className="text-red-500  text-xs">{errors.hoTen}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500  text-xs">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="soDienThoai"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Số điện thoại
              </label>
              <input
                type="text"
                name="soDienThoai"
                id="soDienThoai"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Vui lòng nhập số điện thoại"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.soDienThoai}
              />
              {errors.soDienThoai && touched.soDienThoai ? (
                <p className="text-red-500  text-xs">{errors.soDienThoai}</p>
              ) : null}
            </div>
            <div className="text-center space-x-3">
              <p className="text-xs text-red-500">{showError}</p>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md"
              >
                Thêm người dùng
              </button>
              <button
                type="button"
                onClick={() => {
                  dispatch(updateUser(values));
                  resetForm();
                }}
                className="bg-orange-500 text-white py-2 px-4 rounded-md"
              >
                Cập nhật người dùng
              </button>
            </div>
          </div>
        </form>
      </div>

      <form className="w-85 my-5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      
      <div>
        <TableUser setValues={setValues} />
      </div>
    </div>
  );
};

export default Form;
