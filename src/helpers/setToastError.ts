import { toast } from 'react-toastify';
import 'react-toastify/scss/main.scss';

const setToastError = (error: string) => toast.error(`${error} 🤷‍♂️`, {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export default setToastError;