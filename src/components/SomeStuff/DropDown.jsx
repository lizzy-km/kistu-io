import { Menu, Button, rem } from '@mantine/core';

const  Browse =()=> {

 

  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Browse</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="/anime">
          Anime
        </Menu.Item>
        <Menu.Item component="a" href="/manga">
          Manga
        </Menu.Item>

       
      </Menu.Dropdown>
    </Menu>
  );
}

export default Browse;