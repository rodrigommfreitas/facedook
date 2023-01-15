import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { CloseIcon } from './Icons/CloseIcon';
import { PencilIcon } from './Icons/PencilIcon';

type Props = {
  toggleEditing: () => void;
};

export const EditProfile = ({ toggleEditing }: Props) => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState<string>(user?.username as string);
  const [location, setLocation] = useState<string>(user?.location as string);
  const [from, setFrom] = useState<string>(user?.from as string);
  const [bio, setBio] = useState<string>(user?.bio as string);

  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [isEditingLocation, setIsEditingLocation] = useState<boolean>(false);
  const [isEditingFrom, setIsEditingFrom] = useState<boolean>(false);
  const [isEditingBio, setIsEditingBio] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLInputElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useOnClickOutside(componentRef, () => {
    toggleEditing();
  });

  const toggleEditingName = () => {
    setIsEditingName(!isEditingName);
  };
  const toggleEditingLocation = () => {
    setIsEditingLocation(!isEditingLocation);
  };
  const toggleEditingFrom = () => {
    setIsEditingFrom(!isEditingFrom);
  };
  const toggleEditingBio = () => {
    setIsEditingBio(!isEditingBio);
  };

  useOnClickOutside(nameRef, () => {
    isEditingName && toggleEditingName();
  });
  useOnClickOutside(locationRef, () => {
    isEditingLocation && toggleEditingLocation();
  });
  useOnClickOutside(fromRef, () => {
    isEditingFrom && toggleEditingFrom();
  });
  useOnClickOutside(bioRef, () => {
    isEditingBio && toggleEditingBio();
  });

  const inputStyle = 'px-2 rounded-md bg-gray-light w-full outline-none';

  return (
    <div className='absolute flex justify-center items-center top-0 left-0 h-screen w-screen bg-black bg-opacity-30 z-20'>
      <div
        ref={componentRef}
        className='w-[90%] sm:w-[500px] bg-white sm:rounded-lg shadow-md shadow-gray-dark'
      >
        <div className='flex justify-between items-center p-3 border-b border-gray-200'>
          <div className='h-9 w-9 -z-10'></div>
          <h1 className='font-bold text-xl'>Edit profile</h1>
          <button
            onClick={toggleEditing}
            className='right-0 h-9 w-9 bg-gray-light flex items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-300 active:scale-95 transition-all'
          >
            <CloseIcon height='1.25em' width='1.25em' />
          </button>
        </div>
        <div className='p-8'>
          <div className='flex gap-4 sm:gap-8'>
            {user?.profilePicture !== '' ? (
              <button className='h-fit w-fit'>
                <img
                  src={user?.profilePicture}
                  alt=''
                  className='min-h-[128px] min-w-[128px] sm:h-[168px] sm:w-[168px] rounded-lg object-cover'
                />
              </button>
            ) : (
              <button className='text-9xl font-black text-primary min-h-[128px] min-w-[128px] sm:min-h-[168px] sm:min-w-[168px] rounded-lg bg-gray-light object-cover flex items-center justify-center'>
                {user.username.charAt(0).toLocaleUpperCase()}
              </button>
            )}
            <div className='flex flex-col justify-between py-4'>
              <div className='flex gap-2 items-center'>
                {isEditingName ? (
                  <>
                    <input
                      onChange={() =>
                        nameRef.current && setName(nameRef.current.value)
                      }
                      autoFocus
                      className={`text-xl sm:text-2xl ${inputStyle}`}
                      ref={nameRef}
                      type='text'
                      name=''
                      id=''
                    />
                    <button
                      onClick={toggleEditingName}
                      className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                    >
                      <CloseIcon />
                    </button>
                  </>
                ) : (
                  <>
                    <div className='text-xl sm:text-2xl font-bold'>{name}</div>
                    <button
                      onClick={toggleEditingName}
                      className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                    >
                      <PencilIcon />
                    </button>
                  </>
                )}
              </div>
              <div className='flex gap-2 items-center'>
                <div className='font-bold sm:text-lg text-gray-dark'>
                  Location:{' '}
                </div>
                {isEditingLocation ? (
                  <>
                    <input
                      onChange={() =>
                        locationRef.current &&
                        setLocation(locationRef.current.value)
                      }
                      autoFocus
                      className={inputStyle}
                      ref={locationRef}
                      type='text'
                      name=''
                      id=''
                    />
                    <button
                      onClick={toggleEditingName}
                      className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                    >
                      <CloseIcon />
                    </button>
                  </>
                ) : (
                  <>
                    <span>{location}</span>
                    <button
                      onClick={toggleEditingLocation}
                      className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                    >
                      <PencilIcon />
                    </button>
                  </>
                )}
              </div>
              <div className='flex gap-2 items-center'>
                <div className='font-bold sm:text-lg text-gray-dark'>
                  From:{' '}
                </div>
                {isEditingFrom ? (
                  <>
                    <input
                      onChange={() =>
                        fromRef.current && setFrom(fromRef.current.value)
                      }
                      autoFocus
                      className={inputStyle}
                      ref={fromRef}
                      type='text'
                      name=''
                      id=''
                    />
                    <button
                      onClick={toggleEditingFrom}
                      className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                    >
                      <CloseIcon />
                    </button>
                  </>
                ) : (
                  <>
                    <span>{from}</span>
                    <button
                      onClick={toggleEditingFrom}
                      className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                    >
                      <PencilIcon />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='flex gap-2 items-center'>
              <div className='sm:text-lg font-bold text-gray-dark'>Bio:</div>
              {isEditingBio ? (
                <button
                  onClick={toggleEditingBio}
                  className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                >
                  <CloseIcon />
                </button>
              ) : (
                <button
                  onClick={toggleEditingBio}
                  className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                >
                  <PencilIcon />
                </button>
              )}
            </div>
            <div className='mt-1'>
              {isEditingBio ? (
                <input
                  onChange={() =>
                    bioRef.current && setBio(bioRef.current.value)
                  }
                  autoFocus
                  className={inputStyle}
                  ref={bioRef}
                  type='text'
                  name=''
                  id=''
                />
              ) : (
                <div>{bio}qeqwewqewq</div>
              )}
            </div>
          </div>
        </div>
        <button className='mx-auto flex mb-8 bg-primary text-gray-light font-bold rounded-lg py-1 px-2 transition-all hover:bg-blue-700 active:bg-blue-800 active:scale-95'>
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
};
