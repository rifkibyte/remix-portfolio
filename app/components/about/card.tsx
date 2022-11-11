import { CardTransition } from '~/components/ui/pagetransitions';
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { Tags } from '~/components/ui/tags';
interface CardProps {
  title: string;
  role: string;
  skills: string[];
  period: string;
  logo: string;
  colorMode: string;
  alt?: string;
}

const EducationCard = (props: CardProps) => {
  const { title, role, skills, period, logo, colorMode, alt } = props;
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth='1px'
        _hover={{ shadow: `lg` }}
        bg={useColorModeValue(`gray.50`, `gray.800`)}
        position='relative'
        rounded='md'
      >
        <Flex justifyContent='space-between'>
          <Flex>
            <Image
              rounded='full'
              w={16}
              h={16}
              objectFit='contain'
              fallbackSrc={`/assets/images/placeholder.png`}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align='left'>
              <Heading fontSize='xl' color={`mode.${colorMode}.career.text`}>
                {title}
              </Heading>
              <Heading fontSize='sm' color={`mode.${colorMode}.career.subtext`}>
                {role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems='center'
                display={[`none`, `none`, `flex`, `flex`]}
              >
                <Tags
                  tags={skills}
                  interactive={false}
                  tagProps={{
                    colorScheme: `gray`,
                    padding: `0 3px`,
                    size: `sm`,
                  }}
                />
              </Stack>
            </Stack>
          </Flex>
          <Stack display={[`none`, `none`, `flex`, `flex`]}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems='center'
          display={[`flex`, `flex`, `none`, `none`]}
        >
          <Tags
            tags={skills}
            interactive={false}
            tagProps={{
              colorScheme: `gray`,
              padding: `0 3px`,
              size: `sm`,
            }}
          />
        </Stack>
      </Box>
    </CardTransition>
  );
};

export default EducationCard;
