import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import {
  PageSlideFade,
  StaggerChildren,
} from '~/components/ui/pagetransitions';
import { MotionBox } from '~/components/ui/motion';
import { institutes } from '~/data/education';
import { careers } from '~/data/careers';
import Header from '~/components/layout/header';
import PageLayout from '~/components/layout/pagelayout';
import { useLoaderData } from '@remix-run/react';
import type { Company, Institute } from 'types';
import type { MetaFunction } from '@remix-run/node';
import Card from '~/components/about/card';

const TURQUOISE = `#06b6d4`;

export const loader = () => {
  return {
    careers,
    institutes,
  };
};

const About = () => {
  const { careers, institutes } = useLoaderData();
  const { colorMode } = useColorMode();

  return (
    <PageLayout
      title='About'
      description='My educational and professional journey so far'
    >
      <PageSlideFade>
        <StaggerChildren>
          <MotionBox>
            <Heading>
              <Flex alignItems='center'>
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  Career
                </Header>
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size='25px' />
                </Stack>
              </Flex>
            </Heading>
          </MotionBox>
          <VStack
            spacing={4}
            marginBottom={6}
            align='left'
            mx={[0, 0, 6]}
            mt={12}
          >
            {careers.map((company: Company, index: number) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
          <Heading>
            <Flex alignItems='center'>
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Education
              </Header>
              <Stack pl={3}>
                <Box as={FaGraduationCap} size='25px' />
              </Stack>
            </Flex>
          </Heading>
          <VStack
            spacing={4}
            marginBottom={6}
            align='left'
            mx={[0, 0, 6]}
            mt={12}
          >
            {institutes.map((institute: Institute, index: number) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  );
};

export const meta: MetaFunction = () => {
  return { title: `About | RIfki` };
};

export default About;
