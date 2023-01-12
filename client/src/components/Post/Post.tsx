import { useState } from 'react';
import { CommentIcon } from '../Icons/CommentIcon';
import { FriendsIcon } from '../Icons/FriendsIcon';
import { LikeFillIcon } from '../Icons/LikeFillIcon';
import { LikeIcon } from '../Icons/LikeIcon';
import { ShareIcon } from '../Icons/ShareIcon';

type Props = {
  post?: {
    userId: string;
    desc: string;
    img: string;
    likes: Array<any>;
  };
};

export const Post = ({ post }: Props) => {
  const [likeCount, setLikeCount] = useState<number | undefined>(
    post?.likes.length
  );
  const [isLiked, setIsLiked] = useState<boolean | null>(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(
      isLiked ? (likeCount as number) - 1 : (likeCount as number) + 1
    );
  };

  const btnStyle =
    'flex gap-2 py-2 rounded-lg items-center justify-center hover:bg-gray-light active:bg-gray-200 transition-all';

  return (
    <div className='w-full bg-white pt-3 pb-1 sm:rounded-lg shadow-sm shadow-gray-300'>
      <div className='flex px-4 items-center gap-1'>
        <a href='#' className='mr-2'>
          <img
            src=''
            alt=''
            className='bg-primary w-10 h-10 rounded-full object-cover'
          />
        </a>

        <div className='flex flex-col gap-1'>
          <a href='#' className='font-semibold hover:underline'>
            Chuck Norris
          </a>
          <div className='flex gap-2 items-center text-gray-dark text-xs'>
            <span>20h ·</span>
            <FriendsIcon />
          </div>
        </div>
      </div>
      <div className='my-3 px-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        harum odio rem quidem alias neque nostrum tempora eligendi, adipisci
        saepe totam exercitationem aliquam ipsam? Inventore magni aliquid ipsum
        voluptatum eveniet doloribus quia expedita. Recusandae, quidem.
        Molestias, aliquid ipsam facere, unde repudiandae excepturi cumque est
        saepe ratione dignissimos exercitationem corporis ad?
      </div>
      <img className='w-full h-64 bg-primary' src='' alt='' />

      <div className='w-full px-4 my-3 flex items-center text-sm text-gray-dark justify-between'>
        <div className='flex gap-2 items-center'>
          <i className='text-white h-fit w-fit bg-primary p-[6px] rounded-full bg-gradient-to-b from-[#17ABFD] to-[#1B74E4] '>
            <LikeFillIcon height='0.75em' width='0.75em' />
          </i>
          <span className='hover:underline'>8</span>
        </div>
        <span className='hover:underline'>0 comments</span>
      </div>

      <div className='h-[1px] w-full mb-1 px-4 bg-gray-200'></div>
      <div className='grid grid-cols-3 px-4 font-semibold text-gray-dark'>
        <button className={`${btnStyle}`}>
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
