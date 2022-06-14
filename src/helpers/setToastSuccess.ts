import { toast } from 'react-toastify';
import 'react-toastify/scss/main.scss';

const setToastSuccess = (message: string) => toast.success(message, {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export default setToastSuccess;
