export const loadFont = async ({
  string,
  weight,
}: {
  string: string;
  weight: number;
}) => {
  const font = (
    await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(string)}`,
      )
    ).text()
  ).match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

  if (font) {
    const response = await fetch(font[1]);

    if (response.status === 200) return await response.arrayBuffer();
  }

  throw new Error();
};
