export default function randomNum(min: number, max: number): number {
  Math.round(Math.random() * (max - min)) + min;
}