import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 300,
    subtitle:
      '300 + component compositions, which will help you to build any page easily.',
    suffix: '+',
  },
  {
    title: 45,
    subtitle:
      '45 + landing and supported pages to Build a professional website.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our customers rated 5-star our themes over 5 years.',
    suffix: '%',
  },
];

const Features = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Stay focused on your business. Let us handle the design.
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              You have a business to run. Stop worrying about cross-browser bugs,
              designing new pages, keeping your components up to date. Let us do
              that for you.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {mock.map((item, i) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.5,
                });

                return (
                  <Grid key={i} item xs={12} md={4}>
                    <Typography variant="h4" color={'primary'} gutterBottom>
                      <Box fontWeight={600} ref={ref}>
                        <CountUp
                          duration={2}
                          end={inView ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </Box>
                    </Typography>
                    <Typography component="p">{item.subtitle}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box height={1} width={1} maxHeight={800}>
            <Box
              component={'img'}
              loading="lazy"
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/svg/illustrations/illustration1.svg'
                  : 'https://assets.maccarianagency.com/svg/illustrations/illustration1--dark.svg'
              }
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 1 }}
              width={1}
              maxWidth={1}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
