/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import PaidIcon from '@mui/icons-material/Paid';
// eslint-disable-next-line import/no-extraneous-dependencies
import Navbar from '../../components/Navbar/Navbar';
import BlogSidebar from './BlogSidebar';
import Placeholder from '../../assets/pictures/placeholderblog.jpg';
import BlogHeader from './BlogHeader';
import BlogHowTo from './BlogHowTo';
import BlogSections from './BlogSections';
import BlogForm from './BlogForm';
import BlogBottomNavigation from './BlogBottomNavigation';
import Footer from '../Footer/footer';
import client from '../../sanityClient';

function Blog() {
  const [howToRead, setHowToRead] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [educationalPosts, setEducationalPosts] = useState([]);
  const [moneySavingTips, setMoneySavingTips] = useState([]);
  const myTopStories = useRef(null);
  const myRecentPosts = useRef(null);
  const myEducational = useRef(null);
  const myMoneySavingTips = useRef(null);
  const executeTopStories = () => myTopStories.current.scrollIntoView();
  const executeRecentPosts = () => myRecentPosts.current.scrollIntoView();
  const executeEducational = () => myEducational.current.scrollIntoView();
  const executeMoneySavingTips = () =>
    myMoneySavingTips.current.scrollIntoView();

  useEffect(() => {
    const fetchPosts = async () => {
      const howToReadQuery = '*[_type == "howto"]';
      const topStoriesQuery =
        '*[_type == "post" && "Top Stories" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const recentPostsQuery =
        '*[_type == "post" && "Recent Posts" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const educationalQuery =
        '*[_type == "post" && "Educational" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const moneySavingTipsQuery =
        '*[_type == "post" && "Money Saving Tips" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';

      Promise.all([
        client.fetch(howToReadQuery),
        client.fetch(topStoriesQuery),
        client.fetch(recentPostsQuery),
        client.fetch(educationalQuery),
        client.fetch(moneySavingTipsQuery),
      ])
        .then(
          ([
            howToReadData,
            topStoriesData,
            recentPostsData,
            educationalData,
            moneySavingTipsData,
          ]) => {
            setHowToRead(howToReadData);
            setTopStories(topStoriesData);
            setRecentPosts(recentPostsData);
            setEducationalPosts(educationalData);
            setMoneySavingTips(moneySavingTipsData);
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
      fxn: executeTopStories,
      name: 'Top Stories',
      href: '/topstories',
      src: Placeholder,
      desc1: 'lorem ipsum lorem ipsum lorem ipsum',
      title1: 'New Way To Flow',
      title2: 'New Way To Flow',
      title3: 'New Way To Flow',
      ref: myTopStories,
    },
    {
      icon: (
        <TimerIcon
          sx={{ color: 'secondary.main', '&:hover': { color: 'info.main' } }}
        />
      ),
      object: recentPosts,
      fxn: executeRecentPosts,
      name: 'Recent Posts',
      href: '/recentposts',
      src: Placeholder,
      desc1: 'lorem ipsum lorem ipsum lorem ipsum',
      title1: 'New Way To Flow',
      title2: 'New Way To Flow',
      title3: 'New Way To Flow',
      ref: myRecentPosts,
    },
    {
      icon: (
        <SchoolIcon
          sx={{ color: 'secondary.main', '&:hover': { color: 'info.main' } }}
        />
      ),
      object: educationalPosts,
      fxn: executeEducational,
      name: 'Education',
      href: '/educational',
      src: Placeholder,
      desc1: 'lorem ipsum lorem ipsum lorem ipsum',
      title1: 'New Way To Flow',
      title2: 'New Way To Flow',
      title3: 'New Way To Flow',
      ref: myEducational,
    },
    {
      icon: (
        <PaidIcon
          sx={{ color: 'secondary.main', '&:hover': { color: 'info.main' } }}
        />
      ),
      object: moneySavingTips,
      fxn: executeMoneySavingTips,
      name: 'Saving',
      href: '/moneysaving',
      src: Placeholder,
      desc1: 'lorem ipsum lorem ipsum lorem ipsum',
      title1: 'New Way To Flow',
      title2: 'New Way To Flow',
      title3: 'New Way To Flow',
      ref: myMoneySavingTips,
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
        }}
      >
        <Navbar />
        <BlogSidebar HeaderNavigationMenu={DataStorage} />
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
            position: {
              xs: 'absolute',
              sm: 'absolute',
              md: 'relative',
              lg: 'relative',
              xl: 'relative',
            },
          }}
        >
          <BlogHeader
            HeaderNavigationMenu={DataStorage}
            HeaderCarouselItems={DataStorage[0].object}
          />
          <BlogHowTo HowToData={howToRead} />
          <BlogSections SectionNavigationMenu={DataStorage} />
          <BlogForm />
          <BlogBottomNavigation HeaderNavigationMenu={DataStorage} />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default Blog;
