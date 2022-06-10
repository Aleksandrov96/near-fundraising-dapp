import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LoadingModal from '../Common/LoadingModal/LoadingModal';
import './newFundraising.scss';

type NewFundraising = {
  name: string,
  url: string,
  description: string,
  wallet: string,
}

function NewFundraising() {
  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<NewFundraising>();

  const onSubmit = async (data: NewFundraising): Promise<void> => {
    setActive(true);
    const projectData = await window.contract.create({
      name: data.name,
      url: data.url,
      description: data.description,
      wallet: data.wallet,
    });
    reset();
    navigate('/fundraisings');
    setActive(false);
    console.log(projectData);
  };

  console.log(errors);

  return (
    <div className="newFundraising">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <label>
          <div className="form__error">
            <p className="form__error-text">
              {errors.name && 'Project name is required'}
            </p>
          </div>
          <input
            type="text"
            className="form__input"
            placeholder="Project Name"
            {...register('name', { required: true, maxLength: 80 })}
          />
        </label>
        <label>
          <div className="form__error">
            <p className="form__error-text">
              {errors.url && 'Image URL is required'}
            </p>
          </div>
          <input
            type="text"
            className="form__input"
            placeholder="Project image URL"
            {...register('url', { required: true })}
          />
        </label>
        <label>
          <div className="form__error">
            <p className="form__error-text">
              {errors.description && 'Description is required'}
            </p>
          </div>
          <textarea
            placeholder="Description"
            className="form__textarea"
            {...register('description', { required: true })}
          />
        </label>
        <label>
          <div className="form__error">
            <p className="form__error-text">
              {errors.wallet && 'Owner wallet is required'}
            </p>
          </div>
          <input
            type="text"
            className="form__input"
            placeholder="Wallet"
            {...register('wallet', { required: true })}
          />
        </label>
        <button
          type="submit"
          className="form__button"
        >
          SUBMIT
        </button>
      </form>
      <LoadingModal active={active} />
    </div>
  );
}
export default NewFundraising;
