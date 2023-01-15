import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { instance as axios } from '../globals/axios';
import { AuthContext } from '../context/AuthContext';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { PF } from '../globals/env';
import { CloseIcon } from './Icons/CloseIcon';
import { PencilIcon } from './Icons/PencilIcon';
import { AuthActionType } from '../globals/types';
import { CameraIcon } from './Icons/CameraIcon';

type Props = {
  toggleEditing: () => void;
};

export const EditProfile = ({ toggleEditing }: Props) => {
  const { user, dispatch } = useContext(AuthContext);

  const [file, setFile] = useState<File | null>(null);
  const [img, setImg] = useState<string>(user?.profilePicture as string);
  const [name, setName] = useState<string>(user?.username as string);
  const [location, setLocation] = useState<string>(user?.location as string);
  const [from, setFrom] = useState<string>(user?.from as string);
  const [bio, setBio] = useState<string>(user?.bio as string);

  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [isEditingLocation, setIsEditingLocation] = useState<boolean>(false);
  const [isEditingFrom, setIsEditingFrom] = useState<boolean>(false);
  const [isEditingBio, setIsEditingBio] = useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const fromRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLInputElement>(null);
  const componentRef = useRef<HTMLFormElement>(null);

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

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);

    setImg(URL.createObjectURL(e.target.files[0]));

    imgRef.current &&
      (imgRef.current.src = URL.createObjectURL(e.target.files[0]));

    imgRef.current &&
      (imgRef.current.onload = () => {
        URL.revokeObjectURL(imgRef.current?.src as string); // free memory
      });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Looks messy but this validation is needed to avoid unnecessary requests
    if (
      (user &&
        name !== '' &&
        name !== null &&
        location !== '' &&
        location !== null &&
        from !== '' &&
        from !== null &&
        bio !== null) ||
      (user && img !== user.profilePicture)
    ) {
      const newUserData = {
        _id: user._id,
        profilePicture: user.profilePicture,
        bannerPicture: user.bannerPicture,
        username: name,
        location: location,
        from: from,
        bio: bio,
      };

      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append('name', fileName);
        data.append('file', file);
        newUserData.profilePicture = fileName;
        try {
          await axios.post('/upload', data);

          (dispatch as React.Dispatch<AuthActionType>)({
            type: 'EDIT_PROFILE',
            payload: newUserData,
          });
        } catch (err) {
          console.log(err);
        }
      }
      try {
        await axios.put('/users/' + user._id, newUserData);

        (dispatch as React.Dispatch<AuthActionType>)({
          type: 'EDIT_PROFILE',
          payload: newUserData,
        });

        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

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
      <form
        onSubmit={(e) => handleSubmit(e)}
        ref={componentRef}
        className='w-[90%] sm:w-[500px] bg-white sm:rounded-lg shadow-md shadow-gray-dark'
      >
        <div className='flex justify-between items-center p-3 border-b border-gray-200'>
          <div className='h-9 w-9 -z-10'></div>
          <h1 className='font-bold text-xl'>Edit profile</h1>
          <button
            type='button'
            onClick={toggleEditing}
            className='right-0 h-9 w-9 bg-gray-light flex items-center justify-center rounded-full hover:bg-gray-200 active:bg-gray-300 active:scale-95 transition-all'
          >
            <CloseIcon height='1.25em' width='1.25em' />
          </button>
        </div>
        <div className='p-8'>
          <div className='flex gap-4 sm:gap-8'>
            <input
              ref={fileRef}
              className='hidden'
              type='file'
              id='file'
              accept='.png,.jpeg,.jpg'
              onChange={(e) => onChangeFile(e)}
            />
            {img !== '' ? (
              <label
                htmlFor='file'
                className='h-[128px] w-[128px] min-h-[128px] min-w-[128px] sm:h-[168px] sm:w-[168px] sm:min-h-[168px] sm:min-w-[168px] cursor-pointer'
              >
                <img
                  ref={imgRef}
                  src={img}
                  className={` ${
                    img !== user?.profilePicture ? 'block' : 'hidden'
                  } min-h-[128px] min-w-[128px] sm:h-[168px] sm:w-[168px] rounded-lg object-cover`}
                />
                <img
                  src={PF + img}
                  className={` ${
                    img !== user?.profilePicture ? 'hidden' : 'block'
                  } min-h-[128px] min-w-[128px] sm:h-[168px] sm:w-[168px] rounded-lg object-cover`}
                />
                <button
                  type='button'
                  className='h-fit w-fit relative -top-6 left-[108px] sm:left-36  bg-gray-light p-2 rounded-full'
                >
                  <CameraIcon height='1.25em' width='1.25em' />
                </button>
              </label>
            ) : (
              <label htmlFor='file' className='cursor-pointer '>
                <div className='text-9xl font-black text-primary h-[128px] w-[128px] min-h-[128px] min-w-[128px] sm:h-[168px] sm:w-[168px] sm:min-h-[168px] sm:min-w-[168px] rounded-lg bg-gray-light object-cover flex items-center justify-center'>
                  {user?.username.charAt(0).toLocaleUpperCase()}
                </div>
                <button
                  type='button'
                  className='h-fit w-fit relative -top-6 left-[108px] sm:left-36  bg-gray-light p-2 rounded-full'
                >
                  <CameraIcon height='1.25em' width='1.25em' />
                </button>
              </label>
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
                      type='button'
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
                      type='button'
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
                      type='button'
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
                      type='button'
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
                      type='button'
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
                      type='button'
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
                  type='button'
                  onClick={toggleEditingBio}
                  className='rounded-full p-1 hover:bg-gray-light active:bg-gray-300 active:scale-95 transition-all'
                >
                  <CloseIcon />
                </button>
              ) : (
                <button
                  type='button'
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
                <div>{bio}</div>
              )}
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='mx-auto flex mb-8 bg-primary text-gray-light font-bold rounded-lg py-1 px-2 transition-all hover:bg-blue-700 active:bg-blue-800 active:scale-95'
        >
          <span>Edit Profile</span>
        </button>
      </form>
    </div>
  );
};
