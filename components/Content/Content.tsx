import { Marquee } from '@gfazioli/mantine-marquee';
import { Anchor } from 'nextra/components';
import { Button, Divider, Stack, Title } from '@mantine/core';

export const Content = () => {
  return (
    <>
      <Divider my="md" />
      <Stack align="center" my={32}>
        <Title order={2} ta="center">
          Голосуй за сервер на мониторингах
        </Title>

        <Marquee fadeEdges pauseOnHover>
          <Button
            size="xl"
            component="a"
            href="https://minecraftrating.ru/server/theconcept/"
            target="_blank"
          >
            MinecraftRating.ru
          </Button>
          <Button
            size="xl"
            component="a"
            href="https://mc-servera.net/102597"
            target="_blank"
          >
            Mc-Servera
          </Button>
          <Button
            size="xl"
            component="a"
            href="https://hotmc.ru/minecraft-server-280783"
            target="_blank"
          >
            HotMC
          </Button>
        </Marquee>

        {/* <TextAnimate.Typewriter
          multiline
          value={[
            'Hello, World! Mantine Typewriter component',
            'That was a long time ago',
            'But it was fun',
          ]}
        /> */}
      </Stack>
    </>
  );
};
