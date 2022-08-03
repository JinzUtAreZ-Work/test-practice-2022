export const getExtension = (filename: string): string => {
  return filename.slice(filename.lastIndexOf('.'));
};

export const getFilenameWithoutExtension = (filename: string): string => {
  return filename
    .substring(filename.length, filename.lastIndexOf('.') + 1)
    .toUpperCase();
};

export const convertBytesToMb = (size: number): number => {
  return parseFloat((size / 1024 / 1024).toFixed(2));
};
