import { instance as axios } from '../../globals/axios';
import { format } from 'timeago.js';
import { useContext, useEffect, useState } from 'react';
import { CommentIcon } from '../Icons/CommentIcon';
import { FriendsIcon } from '../Icons/FriendsIcon';
import { LikeFillIcon } from '../Icons/LikeFillIcon';
import { LikeIcon } from '../Icons/LikeIcon';
import { ShareIcon } from '../Icons/ShareIcon';
import { PostType, UserType } from '../../globals/types';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  const [likeCount, setLikeCount] = useState<number>(post.likes.length);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | Record<string, never>>({});
  const { user: currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLiked(post.likes.includes((currentUser as UserType)._id));
  }, [currentUser?._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users?userId=${post.userId}`);
      console.log(res);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const handleLike = () => {
    try {
      axios.put('/posts/' + post._id + '/like', { userId: currentUser?._id });
    } catch (err) {
      console.log(err);
    }
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
  };

  const btnStyle =
    'flex gap-2 py-2 rounded-lg items-center justify-center hover:bg-gray-light active:bg-gray-200 transition-all';

  return (
    <div className='w-full bg-white pt-3 pb-1 sm:rounded-lg shadow-sm shadow-gray-300'>
      <div className='flex px-4 items-center gap-1'>
        <a
          onClick={() => navigate(`../profile/${user.username}`)}
          className='mr-2 cursor-pointer'
        >
          {user.profilePicture !== '' ? (
            <img
              src={user.profilePicture}
              alt=''
              className='w-10 h-10 rounded-full object-cover'
            />
          ) : (
            <div className='text-3xl font-black text-primary w-10 h-10 rounded-full bg-gray-light object-cover flex items-center justify-center'>
              {user.username.charAt(0).toLocaleUpperCase()}
            </div>
          )}
        </a>

        <div className='flex flex-col gap-1'>
          <a
            onClick={() => navigate(`../profile/${user.username}`)}
            className='cursor-pointer w-fit font-semibold hover:underline'
          >
            {user.username}
          </a>
          <div className='flex gap-2 items-center text-gray-dark text-xs'>
            <span>{format(post.createdAt)} · </span>
            <FriendsIcon />
          </div>
        </div>
      </div>
      <div className='my-3 px-4'>{post.desc}</div>

      {post.img && (
        <img className='w-full h-64 bg-primary' src={post.img} alt='' />
      )}

      <div className='w-full px-4 my-3 flex items-center text-sm text-gray-dark justify-between'>
        <div className='flex gap-2 items-center'>
          <i className='text-white h-fit w-fit bg-primary p-[6px] rounded-full bg-gradient-to-b from-[#17ABFD] to-[#1B74E4] '>
            <LikeFillIcon height='0.75em' width='0.75em' />
          </i>
          <span className='hover:underline'>{likeCount}</span>
        </div>
        <span className='hover:underline'>0 comments</span>
      </div>

      <div className='h-[1px] w-full mb-1 px-4 bg-gray-200'></div>
      <div className='grid grid-cols-3 px-4 font-semibold text-gray-dark'>
        <button
          onClick={handleLike}
          className={`${btnStyle} ${isLiked && `text-primary`}`}
        >
          <LikeIcon height='1.25em' width='1.25em' />
          <span>Like</span>
        </button>
        <button className={`${btnStyle}`}>
          <CommentIcon height='1.25em' width='1.25em' />
          <span>Comment</span>
        </button>
        <button className={`${btnStyle}`}>
          <ShareIcon height='1.25em' width='1.25em' />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};
