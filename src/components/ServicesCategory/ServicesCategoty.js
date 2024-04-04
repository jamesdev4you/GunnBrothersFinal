import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import client from '../../sanityClient';

const ServicesCategoty = (props) => {
  const { slug } = useParams();

  const [singleCategory, setSingleCategory] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const singleCategory = `*[_type == "services" && slug.current == "${slug}"]`;

      Promise.all([
        client.fetch(singleCategory),
        // eslint-disable-next-line max-len
      ])
        .then(([singleCategoryData]) => {
          setSingleCategory(singleCategoryData);
        })
        .catch((error) => console.error(error));
    };

    fetchPosts();
  }, [slug]);
  console.log(singleCategory);
  return <div>ServicesCategoty</div>;
};

export default ServicesCategoty;
