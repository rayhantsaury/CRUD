import mongoose from "mongoose";

const User = mongoose.Schema({
  nomor: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  posisi: {
    type: String,
    required: true,
  },
  tempatLahir: {
    type: String,
    required: true,
  },
  tanggalLahir: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  nomorTelepon: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Users", User);
