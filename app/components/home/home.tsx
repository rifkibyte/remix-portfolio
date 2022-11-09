import React from 'react';
import {
  Avatar,
  Box,
  Flex,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';

import { Link as RemixLink } from '@remix-run/react';
import Header from '../layout/header';
import { MotionBox, MotionFlex } from '../ui/motion';
import { useLinkColor } from '../ui/theme';
import Projects from './projects';
import { avatar } from '~/data/data';

import type { Project } from 'types';

const ANIMATION_DURATION = 0.5;
const ORANGE = `#ff9400`;

interface HomeProps {
  projects: Project[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
  const linkColor = useLinkColor();
  const mode = useColorModeValue(`dark`, `light`);

  return (
    <Flex direction='column' align='center'>
      <Box></Box>
      <Flex direction={[`column`, `column`, `row`]}>
        <MotionBox
          opacity='0'
          initial={{ translateX: -150, opacity: 0 }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m='auto'
          mb={[16, 16, `auto`]}
        >
          {mode === `dark` ? (
            <Avatar size={`3xl`} src={avatar.darkAvatar} />
          ) : (
            <Avatar size={`3xl`} src={avatar.lightAvatar} />
          )}
        </MotionBox>
        <MotionFlex
          ml={[`auto`, `auto`, 16]}
          m={[`auto`, `initial`]}
          w={[`90%`, `85%`, `80%`]}
          maxW='800px'
          opacity='0'
          justify='center'
          direction='column'
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Header underlineColor={ORANGE} emoji='👋' mt={0}>
            Hello World!
          </Header>
          <Box as='h2' fontSize='2xl' fontWeight='400' textAlign='left'>
            I’m Rifki Andriyanto — a Frontend Developer. I started as a full
            stack developer in 2019, but now I do a mix of React Js and React
            Native
          </Box>
        </MotionFlex>
      </Flex>
      <MotionBox
        w='100%'
        opacity='0'
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align='start'
            borderLeft='4px solid'
            borderColor='#53c8c4'
            color={`whatsapp`}
            _hover={{ shadow: `lg` }}
            backgroundColor={useColorModeValue(`gray.100`, `#1e2533`)}
            rounded='sm'
            fontSize='md'
          >
            <Text textAlign='center' color='#53c8c4' fontWeight='bold'>
              Highlights
            </Text>
            <UnorderedList textAlign='left' paddingLeft={5} m={0}>
              <ListItem>
                <Link as={RemixLink} to={`/tech-stack`} color={linkColor}>
                  Tech Stack
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Projects projects={projects} />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;
