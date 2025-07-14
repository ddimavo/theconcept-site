'use client';

import { TextAnimate } from '@gfazioli/mantine-text-animate';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Anchor, Button, Center, Code, Paper, Text, Title } from '@mantine/core';
import pack from '../../package.json';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title maw="90vw" mx="auto" className={classes.title} ta="center" mt={100}>
        Добро пожаловать на сайт проекта
        <TextAnimate
          animate="in"
          by="character"
          inherit
          variant="gradient"
          component="span"
          segmentDelay={0.2}
          duration={2}
          animation="scale"
          animateProps={{
            scaleAmount: 3,
          }}
          gradient={{ from: 'blue', to: 'purple' }}
        >
          The Concept
        </TextAnimate>
      </Title>

      <Text c="dimmed" ta="center" size="xl" maw={580} mx="auto" mt="sm">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + Next.js integration follow{' '}
        <Anchor href="https://mantine.dev/guides/next/">this guide</Anchor>. To get started edit{' '}
        <Code fz="xl">page.tsx</Code> file.
      </Text>

      <Center>
        <Button
          href="https://github.com/ddimavo/theconcept-site"
          component="a"
          rightSection={<IconExternalLink />}
          leftSection={<IconBrandGithub />}
          variant="outline"
          px={32}
          radius={256}
          size="lg"
          mx="auto"
          mt="xl"
        >
          Репозиторий на GitHub
        </Button>
      </Center>
    </>
  );
}
