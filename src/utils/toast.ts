import { toast } from "react-toastify";

export const showErrorMessage = (message: string) => {
  toast.error(message, {
    position: "top-right",
    pauseOnHover: true,
  });
};

export const showSuccessMessage = (message: string) => {
  toast.dark(message, {
    position: "top-right",
    pauseOnHover: true,
  });
};
