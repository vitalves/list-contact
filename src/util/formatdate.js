export default function formatDate(date) {
  date
    .substr(0, 10)
    .split('-')
    .reverse()
    .join('/');
}
