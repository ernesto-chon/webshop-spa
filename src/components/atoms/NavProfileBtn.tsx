import React from 'react';
import { Link } from 'react-router-dom';

import ProfileICon from '@/assets/icons/user.svg?react';

export default function NavProfileBtn() {
  return (
    <div className="flex-none">
      <button className="d-btn-ghost d-btn d-btn-square">
        <Link to="/my-account">
          <ProfileICon height="24px" width="20px" className="mx-1" />
        </Link>
      </button>
    </div>
  );
}
