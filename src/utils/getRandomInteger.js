export default function getRandomInteger(min = 0, max = 5) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
