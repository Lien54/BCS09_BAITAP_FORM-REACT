import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./../../redux/slice/userSlice";

const TableUser = ({ setValues }) => {
  const { arrUser } = useSelector((state) => {
    console.log(state);
    return state.userSlice;
  });

  const dispatch = useDispatch();

  // redux.arrUser
  console.log(arrUser);

  return (
    <div className="mt-10">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Mã sinh viên
              </th>
              <th scope="col" className="px-6 py-3">
                Họ tên
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Số điện thoại
              </th>
              <th scope="col" className="px-6 py-3">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr> */}
            {arrUser.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.maSV}
                  </th>
                  <td className="px-6 py-4">{item.hoTen}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.soDienThoai}</td>
                  <td className="px-6 py-4 space-x-3">
                    <button
                      onClick={() => {
                        setValues(item);
                      }}
                      className="p-2 text-white bg-yellow-500 rounded-md"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => {
                        dispatch(removeUser(item.id));
                      }}
                      className="p-2 text-white bg-red-500 rounded-md"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUser;
