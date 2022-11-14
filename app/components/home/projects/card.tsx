import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Link,
  Image,
  Box,
  Center,
} from '@chakra-ui/react';
import { useLinkColor } from '~/components/ui/theme';
import { Tag } from '~/components/ui/tags';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  blurHash: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  link,
  technologies,
}) => {
  const linkColor = useLinkColor();
  const textColor = useColorModeValue(`gray.500`, `gray.200`);

  return (
    <Link href={link} target='_blank'>
      <HStack
        p={4}
        bg={useColorModeValue(`white`, `gray.800`)}
        rounded='xl'
        borderWidth='1px'
        w='sm'
        h='100%'
        textAlign='left'
        align='start'
        spacing={4}
        cursor='pointer'
        _hover={{ shadow: `lg` }}
      >
        <Box>
          <Center>
          <Image
            src={image}
            alt={title}
            fallbackSrc={`/assets/images/placeholder.png`}
            maxWidth='100%'
            height='xs'
            objectFit='contain'
          />
          </Center>
        
          <VStack align='start' justify='center'>
            <Text
              as={Link}
              href={link}
              fontWeight='bold'
              fontSize='md'
              noOfLines={1}
              onClick={(e) => e.stopPropagation}
              color={linkColor}
              isExternal
            >
              {title}
            </Text>
            <HStack>
              {technologies.map((tech, index) => (
                <Tag
                  key={index}
                  name={tech}
                  mt='1px'
                  interactive={false}
                  mr='auto'
                />
              ))}
            </HStack>

            <Box>
              <Text fontSize='sm' color={textColor} noOfLines={1}>
                {description}
              </Text>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Link>
  );
};

export default ProjectCard;
