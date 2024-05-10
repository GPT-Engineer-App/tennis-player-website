import { Box, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaTrophy, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Flex justifyContent="space-between" alignItems="center" px={8}>
          <Heading as="h1" size="lg">John Doe - Tennis Pro</Heading>
          <Flex as="nav">
            <Link px={4} href="#biography" _hover={{ textDecoration: "underline" }}>Biography</Link>
            <Link px={4} href="#highlights" _hover={{ textDecoration: "underline" }}>Highlights</Link>
            <Link px={4} href="#matches" _hover={{ textDecoration: "underline" }}>Matches</Link>
            <Link px={4} href="#gallery" _hover={{ textDecoration: "underline" }}>Gallery</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={10} py={10} px={8} align="stretch">
        <Box id="biography" as="section">
          <Heading as="h2" size="xl" mb={4}><FaUser /> Biography</Heading>
          <Text fontSize="lg">John Doe, born in City, Country, is a professional tennis player who has been competing internationally since 2005. Known for his powerful serve and quick footwork, John has won multiple titles on the ATP tour.</Text>
        </Box>
        <Box id="highlights" as="section">
          <Heading as="h2" size="xl" mb={4}><FaTrophy /> Career Highlights</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Text fontSize="lg">Winner of the US Open 2018</Text>
            <Text fontSize="lg">Reached the semi-finals at Wimbledon 2019</Text>
            <Text fontSize="lg">ATP Player of the Year 2020</Text>
            <Text fontSize="lg">Winner of 15 ATP titles</Text>
          </SimpleGrid>
        </Box>
        <Box id="matches" as="section">
          <Heading as="h2" size="xl" mb={4}><FaCalendarAlt /> Upcoming Matches</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Text fontSize="lg">July 20, 2023 - Against Alex Thompson in London</Text>
            <Text fontSize="lg">August 5, 2023 - Davis Cup Qualifier in Berlin</Text>
          </SimpleGrid>
        </Box>
        <Box id="gallery" as="section">
          <Heading as="h2" size="xl" mb={4}>Photo Gallery</Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5}>
            <Image src="https://via.placeholder.com/150" alt="Match photo" />
            <Image src="https://via.placeholder.com/150" alt="Award ceremony" />
            <Image src="https://via.placeholder.com/150" alt="Training session" />
            <Image src="https://via.placeholder.com/150" alt="Casual event" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;