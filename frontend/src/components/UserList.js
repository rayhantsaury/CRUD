import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    getUsers();
  }, []);

  // Function to fetch users from the API
  const getUsers = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []); // No dependencies, as it doesn't rely on state or props

  // Function to delete a user by ID
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers(); // Fetch updated user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Function to add a new user
  const addUser = async (newUser) => {
    try {
      // Make a POST request to add the new user
      await axios.post("http://localhost:5000/users", newUser);
      // Call getUsers to update the users state
      getUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          {/* Title */}
          <h1 className="title is-3 has-text-centered mb-5">Data Pemain Futsal FC Omicron</h1>

          {/* Add New User Button */}
          <Link to="add" className="button is-success mb-3">
            Tambah Baru
          </Link>

          {/* User List Table */}
          <table className="table is-striped is-fullwidth is-size-6">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nomor Punggung</th>
                <th>Nama</th>
                <th>Posisi</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Alamat</th>
                <th>Nomor Telepon</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.nomor}</td>
                  <td>{user.nama}</td>
                  <td>{user.posisi}</td>
                  <td>{user.tempatLahir}</td>
                  <td>{user.tanggalLahir}</td>
                  <td>{user.alamat}</td>
                  <td>{user.nomorTelepon}</td>
                  <td>
                    {/* Edit User Button */}
                    <Link to={`edit/${user._id}`} className="button is-info is-small mr-1">
                      Edit
                    </Link>
                    {/* Delete User Button */}
                    <button onClick={() => deleteUser(user._id)} className="button is-danger is-small">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
