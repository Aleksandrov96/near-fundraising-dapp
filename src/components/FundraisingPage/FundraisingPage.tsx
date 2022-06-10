import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoadingModal from '../Common/LoadingModal/LoadingModal';
import ToasterContainer from '../Common/ToasterContainer/ToasterContainer';
import setToastSuccess from '../../helpers/setToastSuccess';
import setToastError from '../../helpers/setToastError';
import './fundraisingPage.scss';

type NewFundraising = {
  name: string,
  url: string,
  description: string,
  wallet: string,
  donation?: string,
};

type Form = {
  amount: string,
};

function FundraisingPage() {
  const { pathname } = useLocation();
  const projectId = pathname.split('/').slice(2);
  const id = parseInt(projectId[0], 10);

  const [project, setProject] = useState<NewFundraising>();
  const [active, setActive] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  console.log(errors);

  useEffect(() => {
    const getProject = async () => {
      setProject(await window.contract.getById({ id }));
    };
    getProject()
      .catch((error) => console.log(error));
  }, [id]);

  const onSubmit = async ({ amount }: Form): Promise<void> => {
    setActive(true);
    try {
      await window.contract.donate({ id, amount: parseInt(amount, 10) });
      setToastSuccess('Successfuly donated 🎉');
    } catch (error) {
      if (error instanceof Error) {
        setToastError(error.message);
      } else {
        setToastError('Unexpected error');
      }
    }
    setActive(false);
    reset();
  };

  return (
    <div className="fundraisingPage">
      <div className="fundraisingPage__content">
        <div className="fundraisingPage__content-image">
          <img alt="Project" src={project?.url} />
        </div>
        <div className="fundraisingPage__content-title">{project?.name}</div>
        <p className="fundraisingPage__content-description">
          {project?.description}
        </p>
        <p className="fundraisingPage__content-owner">
          Owner:
          {' '}
          {project?.wallet}
        </p>
        <div className="fundraisingPage__content-donate">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="fundraisingPage__form"
          >
            <label>
              <div className="fundraisingPage__form-error">
                <p className="fundraisingPage__form-error--text">
                  {errors.amount && 'Enter value please'}
                </p>
              </div>
              <input
                type="number"
                className="fundraisingPage__form-input"
                placeholder="Ⓝ"
                step={0.1}
                {...register('amount', { required: true, maxLength: 80 })}
              />
            </label>
            <button
              type="submit"
              className="fundraisingPage__form-button"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <LoadingModal active={active} />
      <ToasterContainer />
    </div>
  );
}

export default FundraisingPage;
