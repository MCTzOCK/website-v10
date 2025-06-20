/**
 * src/pages/test.tsx
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.06.25
 */
import * as React from "react";

// pages/test.tsx
import {
  Box,
  Button,
  Input,
  Textarea,
  Select,
  Badge,
  Switch,
  Alert,
  AlertIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Modal,
  Tooltip,
  HStack,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export default function TestPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={5}>
      <VStack spacing={8} align="stretch">
        {/* Buttons with Tooltip */}
        <Box>
          <Tooltip label="This is a tooltip for the buttons" fontSize="sm">
            <HStack spacing={4}>
              <Button variant="solid">Solid Button</Button>
              <Button variant="danger">Danger Button</Button>
            </HStack>
          </Tooltip>
        </Box>

        {/* Input and Textarea (Filled Variant) */}
        <Box>
          <VStack spacing={4} align="stretch">
            <Input variant="filled" placeholder="Filled Input" />
            <Textarea variant="filled" placeholder="Filled Textarea" />
          </VStack>
        </Box>

        {/* Tabs with softRounded variant */}
        <Box>
          <Tabs variant="softRounded">
            <TabList>
              <Tab>Tab One</Tab>
              <Tab>Tab Two</Tab>
              <Tab>Tab Three</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box>Content for Tab One.</Box>
              </TabPanel>
              <TabPanel>
                <Box>Content for Tab Two.</Box>
              </TabPanel>
              <TabPanel>
                <Box>Content for Tab Three.</Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* Card showcasing glassy look */}
        <Box>
          <Box
            rounded="2xl"
            p={5}
            bg="whiteAlpha.100" // using the glassy background
            backdropFilter="saturate(180%) blur(20px)"
            boxShadow="lg"
            border="1px solid"
            borderColor="whiteAlpha.125"
          >
            <Box fontSize="xl" mb={2}>
              Glassy Card
            </Box>
            <Box>
              This card mimics a glass effect using our modified theme settings.
            </Box>
          </Box>
        </Box>

        {/* Modal demonstrating glassy design */}
        <Box>
          <Button onClick={onOpen}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Glassy Modal</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                This modal uses a semi-transparent background with a blur
                effect.
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>

        {/* Menu with modified styling */}
        <Box>
          <Menu>
            <MenuButton as={Button}>Open Menu</MenuButton>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </VStack>
    </Box>
  );
}
