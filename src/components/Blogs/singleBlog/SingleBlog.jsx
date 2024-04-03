import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import PaidIcon from '@mui/icons-material/Paid';
import client from '../../../sanityClient';
import Navbar from '../../Navbar/Navbar';
import SingleBlogHeader from './SingleBlogHeader';
import SingleBlogContent from './SingleBlogContent';
import SingleBlogSidebar from './SingleBlogSidebar';
import SingleBottomNavigation from './SingleBottomNavigation';

function SingleBlog() {
  const { slug } = useParams();

  const [singleBlog, setSingleBlog] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [educationalPosts, setEducationalPosts] = useState([]);
  const [moneySavingTips, setMoneySavingTips] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const singleBlogQuery = `*[_type == "post" && slug.current == "${slug}"] | { mainImage, title, body, slug, "categories": categories[]->{title, description} }`;
      const topStoriesQuery =
        '*[_type == "post" && "Top Stories" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const recentPostsQuery =
        '*[_type == "post" && "Recent Posts" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const educationalQuery =
        '*[_type == "post" && "Educational" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const moneySavingTipsQuery =
        '*[_type == "post" && "Money Saving Tips" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';

      Promise.all([
        client.fetch(singleBlogQuery),
        client.fetch(topStoriesQuery),
        client.fetch(recentPostsQuery),
        client.fetch(educationalQuery),
        client.fetch(moneySavingTipsQuery),
        // eslint-disable-next-line max-len
      ])
        .then(
          ([
            singleBlogData,
            topStoriesData,
            recentPostsData,
            educationalData,
            moneySavingTipsData,
          ]) => {
            setSingleBlog(singleBlogData);
            setTopStories(topStoriesData);
            setRecentPosts(recentPostsData);
            setEducationalPosts(educationalData);
            setMoneySavingTips(moneySavingTipsData);
            // setSimilarBlog(similarBlogData);
            // eslint-disable-next-line no-console
          }
        )
        .catch((error) => console.error(error));
    };

    fetchPosts();
  }, []);

  const DataStorage = [
    {
      icon: (
        <AutoStoriesIcon
          sx={{ color: 'secondary.main', '&:hover': { color: 'info.main' } }}
        />
      ),
      object: topStories,
      name: 'Top Stories',
      href: '/topstories',
      desc1: 'lorem ipsum lorem ipsum lorem ipsum',
      title1: 'New Way To Flow',
      title2: 'New Way To Flow',
      title3: 'New Way To Flow',
    },
    {
      icon: (
        <TimerIcon
          sx={{ color: 'secondary.main', '&:hover': { color: 'info.main' } }}
        />
      ),
      object: recentPosts,
      name: 'Recent Posts',
      href: '/recentposts',
      desc1: 'lorem ipsum lorem ipsum lorem ipsum',
      title1: 'New Way To Flow',
      title2: 'New Way To Flow',
      title3: 'New Way To Flow',
    },
    {
      icon: (
        <SchoolIcon
          sx={{ color: 'secondary.main', '&:hover': { color: 'info.main' } }}
        />
      ),
      object: educationalPosts,
      name: 'Education',
      href: '/educational',
      desc1: 'lorem ipsum lorem ipsum lorem ipsum',
      title1: 'New Way To Flow',
      title2: 'New Way To Flow',
      title3: 'New Way To Flow',
    },
    {
      icon: (
        <PaidIcon
          sx={{ color: 'secondary.main', '&:hover': { color: 'info.main' } }}
        />
      ),
      object: moneySavingTips,
      name: 'Money Saving',
      href: '/moneysaving',
      desc1: 'lorem ipsum lorem ipsum lorem ipsum',
      title1: 'New Way To Flow',
      title2: 'New Way To Flow',
      title3: 'New Way To Flow',
    },
  ];

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
    >
      <Navbar />
      <SingleBlogSidebar HeaderNavigationMenu={DataStorage} />
      <Box
        sx={{
          height: 'auto',
          width: {
            xs: '100%',
            sm: '100%',
            md: '90%',
            lg: '90%',
            xl: '90%',
          },
          display: 'flex',
          alignItems: 'center',
          jusitfyContent: 'center',
          flexDirection: 'column',
          marginTop: '8em',
        }}
      >
        <SingleBlogHeader HeaderNavigationMenu={DataStorage} />
        <SingleBlogContent
          SingleBlogContent={singleBlog}
          TopStories={DataStorage[0].object}
        />
        <SingleBottomNavigation HeaderNavigationMenu={DataStorage} />
      </Box>
    </Box>
  );
}

export default SingleBlog;
