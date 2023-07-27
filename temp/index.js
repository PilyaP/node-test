// import Jimp from "jimp";
// import fs from "fs/promises";
// import path from "path";

// const downloadedAvatarPath = path.join("temp", "marvel.jpg");

// const publicAvatarsFolderPath = "public/avatars";

// async function processAvatar() {
//   try {
//     const avatar = await Jimp.read(downloadedAvatarPath);

//     avatar.resize(250, 250);

//     const resizedAvatarPath = path.join("publicAvatarsFolderPath");
//     await avatar.writeAsync(resizedAvatarPath);

//     const uniqueFileName = generateUniqueFileName();

//     const newAvatarPath = path.join(
//       publicAvatarsFolderPath,
//       `${uniqueFileName}_avatar.jpg`
//     );
//     await fs.rename(resizedAvatarPath, newAvatarPath);

//     const avatarURL = `/avatars/${uniqueFileName}.jpg`;

//     console.log(`Avatar processed and saved successfully. URL: ${avatarURL}`);
//   } catch (err) {
//     console.error("Error processing the avatar:", err);
//   }
// }

// function generateUniqueFileName() {
//   return Math.random().toString(36).substr(2, 9);
// }

// processAvatar();
// export default processAvatar;

import Jimp from "jimp";

const resizeAvatar = async ({
  imagePath,
  resizeX = 250,
  resizeY = 250,
  quality = 100,
}) => {
  const image = await Jimp.read(imagePath);
  image.resize(resizeX, resizeY).quality(quality).write(imagePath);
};

export default resizeAvatar;
