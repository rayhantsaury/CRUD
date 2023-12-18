import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [nomor, setNomor] = useState("");
  const [nama, setNama] = useState("");
  const [posisi, setPosisi] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setNomor(response.data.nomor);
    setNama(response.data.nama);
    setPosisi(response.data.posisi);
    setTempatLahir(response.data.tempatLahir);
    setTanggalLahir(response.data.tanggalLahir);
    setAlamat(response.data.alamat);
    setNomorTelepon(response.data.nomorTelepon);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nomor,
        nama,
        posisi,
        tempatLahir,
        tanggalLahir,
        alamat,
        nomorTelepon,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Nomor</label>
            <div className="control">
              <input type="text" className="input" value={nomor} onChange={(e) => setNomor(e.target.value)} placeholder="Nomor" />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
            </div>
          </div>
          <div className="field">
            <label className="label">Posisi</label>
            <div className="control">
              <input type="text" className="input" value={posisi} onChange={(e) => setPosisi(e.target.value)} placeholder="Posisi" />
            </div>
          </div>
          <div className="field">
            <label className="label">Tempat Lahir</label>
            <div className="control">
              <input type="text" className="input" value={tempatLahir} onChange={(e) => setTempatLahir(e.target.value)} placeholder="Tempat Lahir" />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Lahir</label>
            <div className="control">
              <input type="text" className="input" value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} placeholder="Tanggal Lahir" />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input type="text" className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" />
            </div>
          </div>
          <div className="field">
            <label className="label">Nomor Telepon</label>
            <div className="control">
              <input type="text" className="input" value={nomorTelepon} onChange={(e) => setNomorTelepon(e.target.value)} placeholder="Nomor Telepon" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
