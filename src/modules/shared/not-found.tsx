import type { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppButton } from '~/modules/shared/button'

export const NotFound: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="text-center">
        <h2
        >
          Oops, it seems you are lost
        </h2>
        <p
          className="py-6"
        >
          You may be trying to access a file that has been removed or relocated.
        </p>
        <AppButton
          type="button"
          onClick={() => {
            navigate(-1);
          }}
          className='bg-[#4069D0] px-4 py-2 rounded cursor-pointer hover:text-black-300 hover:bg-[#4069D0]'
        >
          Back
        </AppButton>
      </div>
    </div>
  )
}
