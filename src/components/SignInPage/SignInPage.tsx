import React from 'react';
import { login } from '../../utils';
import './signInPage.scss';

function SignInPage() {
  return (
    <div className="signIn">
      <div className="signIn__content">
        <h1 className="signIn__content-title">Make good things happen!</h1>
        <p className="signIn__content-description">Are you working on an awesome project? Great, we love those. How about you pitch us your idea so we can get you started?</p>
        <button
          type="button"
          className="signIn__button"
          onClick={login}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignInPage;