import { instance as axios } from '../../globals/axios';
import { useContext, useEffect, useState } from 'react';
import { Post } from '../Post/Post';
import { Share } from '../Share/Share';
import { PostType } from '../../globals/types';
import { AuthContext } from '../../context/AuthContext';

type Props = {
  username?: string;
};

export const Feed = ({ username }: Props) => {
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get('posts/profile/' + username)
        : await axios.get('posts/feed/' + user?._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div
      className={`flex flex-col gap-4 pb-6 ${
        !username &&
        ' h-fit min-h-screen w-[640px] md:w-2/3 lg:w-[572px] xl:w-[652px] sm:mx-auto md:mx-8 lg:mx-auto'
      } `}
    >
      {(username === user?.username || !username) && <Share />}
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  );
};
