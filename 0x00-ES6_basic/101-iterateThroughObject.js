export default function iterateThroughObject(reportWithIterator) {
  return Object.values(reportWithIterator.allEmployees)
    .flatMap(department => department)
    .join(' | ');
}
