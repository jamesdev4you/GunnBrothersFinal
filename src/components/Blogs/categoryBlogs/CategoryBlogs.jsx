import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import PaidIcon from '@mui/icons-material/Paid';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../../sanityClient';
import Navbar from '../../Navbar/Navbar';
import CategoryBlogHeader from './CategoryBlogHeader';
import CategoryBlogSidebar from './CategoryBlogSidebar';
import CategoryBottomNavigation from './CategoryBottomNavigation';
import Footer from '../../Footer/footer';

function CategoryBlogs() {
  const navigate = useNavigate();

  const placeholderImageUrl = 'https://placehold.co/600x400';

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }
  const { categorySlug } = useParams();

  const [categoryBlogs, setCategoryBlogs] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [educationalPosts, setEducationalPosts] = useState([]);
  const [moneySavingTips, setMoneySavingTips] = useState([]);
  // const [similarBlog, setSimilarBlog] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const categoryBlogsQuery = `*[_type == "post" && "${categorySlug}" in categories[] -> slug.current] | {
        mainImage,
        title,
        body,
        slug,
        "categories": categories[]->{title, description, "slug": slug.current}
      }`;
      const topStoriesQuery =
        '*[_type == "post" && "Top Stories" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const recentPostsQuery =
        '*[_type == "post" && "Recent Posts" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const educationalQuery =
        '*[_type == "post" && "Educational" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';
      const moneySavingTipsQuery =
        '*[_type == "post" && "Money Saving Tips" in categories[]->title] | order(publishedAt desc)[0...3] { mainImage, title, body, slug, "categories": categories[]->{title, description, slug} }';

      Promise.all([
        client.fetch(categoryBlogsQuery),
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
            setCategoryBlogs(singleBlogData);
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
  }, [categorySlug]);

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
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
      >
        <Navbar />
        <CategoryBlogSidebar HeaderNavigationMenu={DataStorage} />
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
          <CategoryBlogHeader
            HeaderNavigationMenu={DataStorage}
            HeaderText={categoryBlogs}
          />
          {categoryBlogs.map((item) => (
            <Box
              sx={{
                width: {
                  xl: '70%',
                  lg: '70%',
                  md: '70%',
                  sm: '90%',
                  xs: '90%',
                },
                height: {
                  xl: '55vh',
                  lg: '55vh',
                  md: '55vh',
                  sm: '55vh',
                  xs: '55vh',
                },
                marginBottom: '4em',
                borderRadius: '15px',
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                borderSize: '2px',
                borderStyle: 'solid',
                borderColor: 'primary.main',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                backgroundColor: 'primary.main',
              }}
            >
              <Box
                sx={{
                  height: '85%',
                  width: '100%',
                  // eslint-disable-next-line no-underscore-dangle
                  backgroundImage: `url(${
                    // eslint-disable-next-line no-underscore-dangle
                    item.mainImage?.asset?._ref
                      ? // eslint-disable-next-line max-len, no-underscore-dangle
                        urlFor(item.mainImage.asset._ref).url() // Ensure this method call is correct based on your imageUrlBuilder setup
                      : placeholderImageUrl // Fallback URL or keep as an empty string
                  })`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'none',
                  backgroundPosition: 'center',
                  borderBottomSize: '2px',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'primary.main',
                  borderTopRightRadius: '15px',
                  borderTopLeftRadius: '15px',
                }}
              />
              <Box
                sx={{
                  height: '15%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1em',
                  backgroundColor: 'primary.main',
                  borderBottomRightRadius: '13px',
                  borderBottomLeftRadius: '13px',
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    marginLeft: {
                      xl: '1em',
                      lg: '1em',
                      md: '.4em',
                      sm: '1em',
                      xs: '.7em',
                    },
                    color: 'secondary.main',
                    fontWeight: 'bold',
                    width: '70%',
                  }}
                >
                  {item.title ? <>{item.title} </> : 'loading...'}
                </Typography>
                <Button
                  variant='contained'
                  color='secondary'
                  sx={{
                    marginLeft: 'auto',
                    marginRight: '1em',
                    width: '150px',
                    height: '35px',
                    color: 'primary.main',
                  }}
                  onClick={() => navigate(`/blog/${item?.slug?.current}`)}
                >
                  Read Today
                </Button>
              </Box>
            </Box>
          ))}
          <CategoryBottomNavigation HeaderNavigationMenu={DataStorage} />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default CategoryBlogs;
