import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { instance as axios } from '../globals/axios';
import { PF } from '../globals/env';
import { Feed } from '../components/Feed/Feed';
import { PencilIcon } from '../components/Icons/PencilIcon';
import { Topbar } from '../components/Topbar/Topbar';
import { AuthActionType, UserType } from '../globals/types';
import { AuthContext } from '../context/AuthContext';
import { FollowIcon } from '../components/Icons/FollowIcon';
import { UnfollowIcon } from '../components/Icons/UnfollowIcon';
import { About } from '../components/About/About';
import { Friends } from '../components/Friends/Friends';
import { EditProfile } from '../components/EditProfile';

export const Profile = () => {
  const [profileUser, setProfileUser] = useState<UserType | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('posts');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const profileUsername: string = useParams().username as string;
  const { user: currentUser, dispatch } = useContext(AuthContext);

  let followed = profileUser?.followers.includes(
    currentUser?._id as string
  ) as boolean;

  const isOwnProfile: boolean = currentUser?._id === profileUser?._id;

  const handlePageSwitch = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${profileUsername}`);
      setProfileUser(res.data);
    };
    fetchUser();
  }, []);

  const handleFollow = async () => {
    try {
      if (currentUser && profileUser) {
        if (followed) {
          await axios.put(`/users/${profileUser._id}/unfollow`, {
            userId: currentUser?._id,
          });

          (dispatch as React.Dispatch<AuthActionType>)({
            type: 'UNFOLLOW',
            payload: profileUser._id,
          });
        } else {
          await axios.put(`/users/${profileUser._id}/follow`, {
            userId: currentUser?._id,
          });
          (dispatch as React.Dispatch<AuthActionType>)({
            type: 'FOLLOW',
            payload: profileUser._id,
          });
        }
      }
      followed = !followed;
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const btnStyle =
    'w-full lg:w-fit justify-center flex gap-2 p-3 font-bold text-gray-dark rounded-md hover:bg-gray-light active:bg-gray-200 transition-all';

  return (
    <div className='bg-gray-light w-full min-h-screen h-fit pb-1'>
      <Topbar />
      <div className='w-screen flex bg-white h-[438px] md:h-[590px] lg:h-[600px] shadow-md shadow-gray-200'>
        <div className='mx-auto w-full bg-gradient-to-b from-[#7F94AE] to-white h-[250px] md:h-[400px]'>
          <img
            src={profileUser?.bannerPicture}
            alt=''
            className='bg-gradient-to-b from-primary to-gray-light mx-auto h-[150px] md:h-[300px] lg:h-[400px] w-full max-w-[1250px] xl:rounded-b-xl'
          />

          <div className=' w-full max-w-[1250px] mx-auto px-[50px] flex flex-col lg:flex-row lg:justify-between'>
            <div className='block lg:flex mx-auto lg:mx-0 text-center lg:text-left'>
              <button className='h-fit w-fit relative -top-20 lg:-top-12 rounded-full border-4 border-white'>
                {profileUser?.profilePicture !== '' ? (
                  <img
                    src={PF + profileUser?.profilePicture}
                    alt=''
                    className='h-[168px] w-[168px] rounded-full object-cover'
                  />
                ) : (
                  <div className='text-9xl font-black text-primary h-[168px] w-[168px] rounded-full bg-gray-light object-cover flex items-center justify-center'>
                    {profileUser.username.charAt(0).toLocaleUpperCase()}
                  </div>
                )}
              </button>

              <div className='-translate-y-28 lg:-translate-y-0 font-bold lg:ml-4 h-fit mt-8 text-center lg:text-left'>
                <h1 className='text-4xl mb-2'>{profileUser?.username}</h1>

                {profileUser?.followers &&
                (profileUser.followers.length === 0 ||
                  profileUser.followers.length > 1) ? (
                  <span className='text-gray-dark'>
                    {profileUser.followers.length} followers
                  </span>
                ) : (
                  <span className='text-gray-dark'>
                    {profileUser?.followers.length} follower
                  </span>
                )}
              </div>
            </div>
            {isOwnProfile && (
              <button
                onClick={toggleEditing}
                className='-translate-y-24 lg:-translate-y-0 mb-12 h-fit self-center lg:self-end flex items-center gap-2 font-bold bg-gray-light rounded-lg py-1 px-2 transition-all hover:bg-gray-200 active:bg-gray-300 active:scale-95'
              >
                <PencilIcon height='1.5em' width='1.5em' />
                <span>Edit profile</span>
              </button>
            )}
            {isOwnProfile && isEditing && (
              <EditProfile toggleEditing={toggleEditing} />
            )}
            {!followed && !isOwnProfile && (
              <button
                onClick={handleFollow}
                className='bg-primary text-white -translate-y-24 lg:-translate-y-0 mb-12 h-fit self-center lg:self-end flex items-center gap-2 font-bold rounded-lg py-1 px-2 transition-all hover:bg-blue-700 active:bg-blue-800 active:scale-95'
              >
                <FollowIcon height='1.5em' width='1.5em' />
                <span>Follow</span>
              </button>
            )}
            {followed && !isOwnProfile && (
              <button
                onClick={handleFollow}
                className='-translate-y-24 lg:-translate-y-0 mb-12 h-fit self-center lg:self-end flex items-center gap-2 font-bold bg-gray-light rounded-lg py-1 px-2 transition-all hover:bg-gray-200 active:bg-gray-300 active:scale-95'
              >
                <UnfollowIcon height='1.5em' width='1.5em' />
                <span>Unfollow</span>
              </button>
            )}
          </div>

          <div className='-translate-y-32 lg:-translate-y-8'>
            <div className='h-[1px] w-full max-w-[1150px] mx-auto mb-1 bg-gray-300'></div>

            <div className='w-full max-w-[1250px] mx-auto px-[50px] flex justify-center lg:justify-start'>
              <button
                onClick={() => handlePageSwitch('posts')}
                className={`${btnStyle} ${
                  currentPage === 'posts' &&
                  'rounded-b-none border-b-[3px] border-primary'
                }`}
              >
                Posts
              </button>
              <button
                onClick={() => handlePageSwitch('about')}
                className={`${btnStyle} ${
                  currentPage === 'about' &&
                  'rounded-b-none border-b-[3px] border-primary'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handlePageSwitch('friends')}
                className={`${btnStyle} ${
                  currentPage === 'friends' &&
                  'rounded-b-none border-b-[3px] border-primary'
                }`}
              >
                Friends
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='my-4 flex flex-col gap-4 w-full max-w-[800px] mx-auto px-4 lg:px-[50px]'>
        {currentPage === 'posts' && <Feed username={profileUsername} />}
        {profileUser && currentPage === 'about' && <About user={profileUser} />}
        {profileUser && currentPage === 'friends' && (
          <Friends user={profileUser} />
        )}
      </div>
    </div>
  );
};
