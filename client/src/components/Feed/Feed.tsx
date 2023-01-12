import { Post } from '../Post/Post';
import { Share } from '../Share/Share';

export const Feed = () => {
  return (
    <div className='flex flex-col gap-4 h-screen w-[640px] md:w-2/3 lg:w-[572px] xl:w-[652px] sm:mx-auto md:mx-8 lg:mx-auto'>
      <Share />
      <Post />
    </div>
  );
};
