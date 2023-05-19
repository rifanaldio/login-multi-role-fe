import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-right",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

class Alert {
  constructor() {}
  successLogin = () => {
    Toast.fire({
      showCloseButton: true,
      icon: "success",
      title: "Sukses !",
      text: "Berhasil masuk",
    });
    // }
  };

  errorLogin = () => {
    Toast.fire({
      showCloseButton: true,
      icon: "error",
      title: "Error",
      text : "Email / Password Salah"
    });
    // }
  };

  infoEditDate = () => {
    Swal.fire(
      "Perhatian!",
      "Jika Merubah Tanggal Dokumen Maka akan mengubah Nomor Dokumen",
      "info"
    );
  }

  successCreate = () => {
    Toast.fire({
      showCloseButton: true,
      icon: "success",
      title: "Sukses !",
      text : "Berhasil Menambahkan Data"
    });
    // }
  };
  errorCreate = (error) => {
    Toast.fire({
      showCloseButton: true,
      icon: "error",
      title: "Error",
      text : error
    });
    // }
  };

  successEdit = () => {
    Toast.fire({
      showCloseButton: true,
      icon: "success",
      title: "Sukses !",
      text : "Berhasil Mengubah Data"
    });
    // }
  };

  errorEdit = (error) => {
    Toast.fire({
      showCloseButton: true,
      icon: "error",
      title: "Error",
      text : error
    });
    // }
  };

  delete = () => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        console.log(result);
      if (result.isConfirmed) {
        Swal.fire("Terhapus!", "Data anda berhasil dihapus.", "success");
      } else if (result.isDenied) {
        Swal.fire("Terhapus!", "Error" , "error");
      }
    });
  };

  logoutSesionAlert = () => {
    Swal.fire({
      title: 'Sesi telah habis',
      text : 'Silahkan melakukan login kembali',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  deleteFile = () => {
    Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  }
  successDeleteFile = () => {
    Toast.fire({
      showCloseButton: true,
      icon: "success",
      title: "Sukses !",
      text: "File berhasil dihapus !",
    });
    // }
  };
  errorDeleteFile = (err) => {
    Toast.fire({
      showCloseButton: true,
      icon: "error",
      title: "Gagal Hapus File !",
      text : err
    });
    // }
  };

  errorFileAlredyExist = () => {
    Toast.fire({
      showCloseButton: true,
      icon: "error",
      title: "Error",
      text : "Nama File Tersebut Sudah Ada"
    });
    // }
  };


}

export default Alert;
