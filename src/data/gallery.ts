export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
  type: 'portrait';
  series: string;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  { id: 'kinetic-art', title: 'Kinetic Art', series: 'Campus & events', caption: 'Kinetic Art workshop poster for the Department of Computer Science and Engineering at Christ College of Engineering.', width: 1080, height: 1350 },
  { id: 'ramadan-kareem', title: 'Ramadan Kareem', series: 'Celebrations & observances', caption: 'A deep-blue and gold Ramadan greeting poster for V-Tech Group.', width: 1587, height: 2245 },
  { id: 'labour-day', title: 'International Labour Day', series: 'Celebrations & observances', caption: 'An illustrated Labour Day tribute for V-Tech Group.', width: 1587, height: 2245 },
  { id: 'mothers-day', title: 'Mother’s Day', series: 'Celebrations & observances', caption: 'A Mother’s Day greeting in soft pinks, with illustration at its heart.', width: 1587, height: 2245 },
  { id: 'ocean-day', title: 'World Ocean Day', series: 'Celebrations & observances', caption: 'An ocean conservation poster with marine illustrations for V-Tech Group.', width: 1587, height: 2245 },
  { id: 'environment-day', title: 'World Environment Day', series: 'Celebrations & observances', caption: 'An illustrated environmental awareness poster for V-Tech Group.', width: 1587, height: 2245 },
  { id: 'fathers-day', title: 'Father’s Day', series: 'Celebrations & observances', caption: 'A Father’s Day greeting built around a playful, illustrated outdoor scene.', width: 1587, height: 2245 },
  { id: 'independence-day', title: 'Independence Day', series: 'Celebrations & observances', caption: 'A tricolour Independence Day greeting for V-Tech Group.', width: 1587, height: 2245 },
].map((item) => ({ ...item, type: 'portrait', image: `/images/posters/${item.id}.webp` }));
