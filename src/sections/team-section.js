/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'William Aoun',
    title: 'William Aoun',
    designation: 'Founder, Director, President, and Programmer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.google.com/search?q=federer&oq=federer&aqs=chrome..69i57j46i433i512j35i39j0i512j0i131i433i512j69i60l3.2242j0j7&sourceid=chrome&ie=UTF-8',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Pierre Gabaix',
    title: 'Pierre Gabaix',
    designation: 'Founder, Director, and Project Manager for UK',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Victor Bauche',
    title: 'Victor Bauche',
    designation: 'Founder, Director, and Project Manager for Switzerland',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Paul Meyer',
    title: 'Paul Meyer',
    designation: 'Director, and Reseacher',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section id="pricing">
      <Container>
        <SectionHeader
          slogan="Team"
          title="Founders"
        />
        <Grid sx={styles.grid}>
          {data.map((item)=>(
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
