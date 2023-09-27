/**
 * let is look at this situation where a student is to revise
 */

function revise(essay) {
  read(essay);
  edit(essay);
  const changes = review(essay);
  return changes ? revise(changes + essay) : true;
}